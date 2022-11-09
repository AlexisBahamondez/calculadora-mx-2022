const securityTable = require("./getSecurityTable");

/**
 * It takes a string and returns a number
 * @param period - The period, it can be "diario", "quincenal" or "mensual".
 */
const getDays = (period) => {
  switch (period) {
    case "diario":
      return 1;
    case "quincenal":
      return 15;
    case "mensual":
      return 30;
    default:
      throw new Error(`Periodo no valido: ${period}`);
  }
};

/**
 * It returns the benefit for the employee or employer depending on the type of the user, the salary,
 * the minimum daily salary, the salary integrated to the top, and the period
 * @param type - "patron" or "trabajador"
 * @param salary - the salary of the employee
 * @param sueldoMinimoDiario - minimum wage in Mexico
 * @param salaryIntegradoTope - is the maximum amount daily that can be paid to the employee.
 * @param period - it can be "diario", "quincenal" or "mensual".
 * @returns The benefit of the employee or the employer.
 */
const getBenefit = (
  type,
  salary,
  sueldoMinimoDiario,
  salaryIntegradoTope,
  period
) => {
  if (type === "patron") {
    return salary === sueldoMinimoDiario
      ? salaryIntegradoTope *
          getDays(period) *
          securityTable.enfermedad.prestaciones.patron +
          sueldoMinimoDiario *
            getDays(period) *
            securityTable.enfermedad.prestaciones.trabajador
      : salaryIntegradoTope *
          getDays(period) *
          securityTable.enfermedad.prestaciones.patron;
  } else {
    return salary !== sueldoMinimoDiario
      ? salaryIntegradoTope *
          getDays(period) *
          securityTable.enfermedad.prestaciones.trabajador
      : 0;
  }
};

/**
 * It returns the medical expenses for a given type of worker (patron or trabajador), salary,
 * sueldoMinimoDiario, salaryIntegradoTope, and period
 * @param type - "patron" or "trabajador"
 * @param salary - the salary of the employee
 * @param sueldoMinimoDiario - minimum wage in Mexico
 * @param salaryIntegradoTope - is the maximum amount daily that can be paid to the employee.
 * @param period - it can be "diario", "quincenal" or "mensual".
 * @returns the value of the medical expenses.
 */
const getMedicalExpenses = (
  type,
  salary,
  sueldoMinimoDiario,
  salaryIntegradoTope,
  period
) => {
  if (type === "patron") {
    return salary === sueldoMinimoDiario
      ? salaryIntegradoTope *
          getDays(period) *
          securityTable.enfermedad.gastosMedicos.patron +
          sueldoMinimoDiario *
            getDays(period) *
            securityTable.enfermedad.gastosMedicos.trabajador
      : salaryIntegradoTope *
          getDays(period) *
          securityTable.enfermedad.gastosMedicos.patron;
  } else {
    return salary !== sueldoMinimoDiario
      ? salaryIntegradoTope *
          getDays(period) *
          securityTable.enfermedad.gastosMedicos.trabajador
      : 0;
  }
};

/**
 * It returns the amount of money that should be paid for unemployment and old age insurance, depending
 * on the type of the person (employer or employee), the salary, the minimum daily salary, the salary
 * integrated limit, and the period
 * @param type - "patron" or "trabajador"
 * @param salary - the salary of the employee
 * @param sueldoMinimoDiario - minimum wage in Mexico
 * @param salaryIntegradoTope - is the maximum amount daily that can be paid to the employee.
 * @param period - it can be "diario", "quincenal" or "mensual".
 * @returns the value of the unemployment and old age insurance.
 */
const getUnemploymentAndOldAge = (
  type,
  salary,
  sueldoMinimoDiario,
  salaryIntegradoTope,
  period
) => {
  if (type === "patron") {
    return salary === sueldoMinimoDiario
      ? salaryIntegradoTope *
          getDays(period) *
          securityTable.cesantia.vejez.patron +
          sueldoMinimoDiario *
            getDays(period) *
            securityTable.cesantia.vejez.trabajador
      : salaryIntegradoTope *
          getDays(period) *
          securityTable.cesantia.vejez.patron;
  } else {
    return salary !== sueldoMinimoDiario
      ? salaryIntegradoTope *
          getDays(period) *
          securityTable.cesantia.vejez.trabajador
      : 0;
  }
};

/**
 * It returns the disability amount for a given type of user (patron or trabajador), salary,
 * sueldoMinimoDiario, salaryIntegradoTope, and period
 * @param type - "patron" or "trabajador"
 * @param salary - the employee's salary
 * @param sueldoMinimoDiario - minimum wage in Mexico
 * @param salaryIntegradoTope - is the maximum amount daily that can be paid to the employee.
 * @param period - it can be "diario", "quincenal" or "mensual".
 */
const getDisability = (
  type,
  salary,
  sueldoMinimoDiario,
  salaryIntegradoTope,
  period
) => {
  if (type === "patron") {
    return salary === sueldoMinimoDiario
      ? salaryIntegradoTope * getDays(period) * securityTable.invalidez.patron +
          sueldoMinimoDiario *
            getDays(period) *
            securityTable.invalidez.trabajador
      : salaryIntegradoTope * getDays(period) * securityTable.invalidez.patron;
  } else {
    return salary !== sueldoMinimoDiario
      ? salaryIntegradoTope *
          getDays(period) *
          securityTable.invalidez.trabajador
      : 0;
  }
};

module.exports = {
  getDays,
  getBenefit,
  getMedicalExpenses,
  getUnemploymentAndOldAge,
  getDisability,
};
