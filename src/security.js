const securityTable = require("./getSecurityTable");
const {
  getDays,
  getBenefit,
  getMedicalExpenses,
  getUnemploymentAndOldAge,
  getDisability,
} = require("./utilsSecurity");

/**
 * It calculates the amount of money that an employer must pay to the Mexican government for a given
 * employee
 * @param amount - The amount of money the employee is being paid.
 * @param period - weekly, biweekly, monthly, bimonthly, quarterly, semiannually, annually
 * @param type - "patron" or "trabajador"
 * @returns The sum of the security data
 */
function calculateSecurity(amount, period, type) {
  const uma = 96.22;
  const factorIntegracion = 1.0452;
  const sueldoMinimoDiario = 172.87;
  const salarioDiario = amount / getDays(period);

  const salarioIntegradoTope = Math.min(
    salarioDiario * factorIntegracion,
    25 * uma
  );

  const cuotaFija =
    uma * getDays(period) * securityTable.enfermedad.cuotaFija[type];

  const excedente =
    salarioIntegradoTope > 3 * uma
      ? (salarioIntegradoTope - 3 * uma) *
        securityTable.enfermedad.excedente[type] *
        getDays(period)
      : 0;

  const prestaciones = getBenefit(
    type,
    salarioDiario,
    sueldoMinimoDiario,
    salarioIntegradoTope,
    period
  );

  const gastosMedicos = getMedicalExpenses(
    type,
    salarioDiario,
    sueldoMinimoDiario,
    salarioIntegradoTope,
    period
  );

  const riesgo =
    salarioIntegradoTope * getDays(period) * securityTable.riesgo[type];

  const invalidez = getDisability(
    type,
    salarioDiario,
    sueldoMinimoDiario,
    salarioIntegradoTope,
    period
  );

  const guarderias =
    salarioIntegradoTope * getDays(period) * securityTable.guarderias[type];

  const retiro =
    salarioIntegradoTope *
    getDays(period) *
    securityTable.cesantia.retiro[type];

  const infonavit =
    salarioIntegradoTope * getDays(period) * securityTable.infonavit[type];

  const vejez = getUnemploymentAndOldAge(
    type,
    salarioDiario,
    sueldoMinimoDiario,
    salarioIntegradoTope,
    period
  );

  const securityData = {
    cuotaFija,
    excedente,
    prestaciones,
    gastosMedicos,
    riesgo,
    invalidez,
    guarderias,
    retiro,
    infonavit,
    vejez,
  };

  const sumSecurityData =
    cuotaFija +
    excedente +
    prestaciones +
    gastosMedicos +
    riesgo +
    invalidez +
    guarderias +
    retiro +
    infonavit +
    vejez;

  return sumSecurityData;
}

module.exports = calculateSecurity;
