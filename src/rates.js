const diaryRates = [
  { min: 0.01, max: 21.19, amount: 0, percent: 0.0192 },
  { min: 21.2, max: 179.87, amount: 0.41, percent: 0.064 },
  { min: 179.88, max: 316.1, amount: 10.56, percent: 0.1088 },
  { min: 316.11, max: 367.45, amount: 25.38, percent: 0.16 },
  { min: 367.46, max: 439.94, amount: 33.6, percent: 0.1792 },
  { min: 439.95, max: 887.29, amount: 46.59, percent: 0.2136 },
  { min: 887.3, max: 1398.5, amount: 142.15, percent: 0.2352 },
  { min: 1398.51, max: 2669.96, amount: 262.38, percent: 0.3 },
  { min: 2669.97, max: 3559.95, amount: 643.82, percent: 0.32 },
  { min: 3559.96, max: 10679.84, amount: 928.61, percent: 0.34 },
  { min: 10679.85, max: Infinity, amount: 3349.38, percent: 0.35 },
];

const quincenalRates = [
  { min: 0.01, max: 318, amount: 0, percent: 0.0192 },
  { min: 318.01, max: 2699.4, amount: 6.15, percent: 0.064 },
  { min: 2699.41, max: 4744.05, amount: 158.55, percent: 0.1088 },
  { min: 4744.06, max: 5514.75, amount: 381, percent: 0.16 },
  { min: 5514.76, max: 6602.7, amount: 504.3, percent: 0.1792 },
  { min: 6602.71, max: 13316.7, amount: 699.3, percent: 0.2136 },
  { min: 13316.71, max: 20988.9, amount: 2133.3, percent: 0.2352 },
  { min: 20988.81, max: 40071.3, amount: 3937.8, percent: 0.3 },
  { min: 40071.31, max: 53428.5, amount: 9662.55, percent: 0.32 },
  { min: 53428.51, max: 160285.35, amount: 13936.8, percent: 0.34 },
  { min: 160285.36, max: Infinity, amount: 50268.15, percent: 0.35 },
];

const mensualRates = [
  { min: 0.01, max: 644.58, amount: 0, percent: 0.0192 },
  { min: 644.59, max: 5470.92, amount: 12.38, percent: 0.064 },
  { min: 5470.93, max: 9614.66, amount: 321.26, percent: 0.1088 },
  { min: 9614.67, max: 11176.62, amount: 772.1, percent: 0.16 },
  { min: 11176.63, max: 13381.47, amount: 1022.01, percent: 0.1792 },
  { min: 13381.48, max: 26988.5, amount: 1417.12, percent: 0.2136 },
  { min: 26988.51, max: 42537.58, amount: 4323.58, percent: 0.2352 },
  { min: 42537.59, max: 81211.25, amount: 7980.73, percent: 0.3 },
  { min: 81211.26, max: 108281.67, amount: 19582.83, percent: 0.32 },
  { min: 108281.68, max: 324845.01, amount: 28245.36, percent: 0.34 },
  { min: 324845.02, max: Infinity, amount: 101876.9, percent: 0.35 },
];

/**
 * It takes an income and a period and returns an object with the income tax information
 * @param income - The income to calculate the LISR for.
 * @param period - The period of the income. It can be "diario", "quincenal" or "mensual".
 * @returns An object with the following properties:
 * baseGravable,
 * limiteInferior,
 * excedente,
 * porcentajeSobreExcedente,
 * impuestoMarginal,
 * cuotaFija,
 * lisr,
 */
function calculateLisr(income, period) {
  let lisr = 0;
  let rates = null;
  let baseGravable = income;
  let limiteInferior = 0;
  let excedente = 0;
  let porcentajeSobreExcedente = 0;
  let impuestoMarginal = 0;
  let cuotaFija = 0;

  switch (period) {
    case "diario":
      rates = diaryRates;
      break;
    case "quincenal":
      rates = quincenalRates;
      break;
    case "mensual":
      rates = mensualRates;
      break;
    default:
      throw new Error(`Periodo no valido: ${period}`);
  }
  rates.forEach((rate) => {
    if (income >= rate.min && income <= rate.max) {
      limiteInferior = rate.min;
      excedente = income - limiteInferior;
      porcentajeSobreExcedente = rate.percent;
      impuestoMarginal = excedente * porcentajeSobreExcedente;
      cuotaFija = rate.amount;
      lisr = impuestoMarginal + cuotaFija;
    }
  });

  const lisrObject = {
    baseGravable,
    limiteInferior,
    excedente,
    porcentajeSobreExcedente,
    impuestoMarginal,
    cuotaFija,
    lisr,
  };

  return lisrObject;
}

module.exports = calculateLisr;
