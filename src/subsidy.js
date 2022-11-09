const diaryTable = [
  { min: 0.01, max: 58.0, amount: 13.34 },
  { min: 58.01, max: 87.0, amount: 13.34 },
  { min: 87.01, max: 113.86, amount: 13.33 },
  { min: 113.87, max: 116.0, amount: 12.88 },
  { min: 116.01, max: 145.78, amount: 12.54 },
  { min: 145.79, max: 154.66, amount: 11.61 },
  { min: 154.67, max: 174.93, amount: 10.65 },
  { min: 174.94, max: 204.09, amount: 9.66 },
  { min: 204.1, max: 233.24, amount: 8.31 },
  { min: 233.25, max: 242.04, amount: 7.13 },
  { min: 242.05, max: Infinity, amount: 0 },
];

const quincenalTable = [
  { min: 0.01, max: 884.48, amount: 203.51 },
  { min: 884.49, max: 1326.69, amount: 203.42 },
  { min: 1326.7, max: 1736.42, amount: 203.31 },
  { min: 1736.43, max: 1768.94, amount: 196.39 },
  { min: 1768.95, max: 2223.08, amount: 191.23 },
  { min: 2223.09, max: 2358.59, amount: 177.12 },
  { min: 2358.6, max: 2667.71, amount: 162.44 },
  { min: 2667.72, max: 3112.34, amount: 147.32 },
  { min: 3112.35, max: 3556.95, amount: 126.77 },
  { min: 3556.96, max: 3691.17, amount: 108.81 },
  { min: 3691.18, max: Infinity, amount: 0 },
];

const mensualTable = [
  { min: 0.01, max: 1768.96, amount: 407.02 },
  { min: 1768.97, max: 2653.38, amount: 406.83 },
  { min: 2653.39, max: 3472.84, amount: 406.62 },
  { min: 3472.85, max: 3537.87, amount: 392.77 },
  { min: 3537.88, max: 4446.15, amount: 382.46 },
  { min: 4446.16, max: 4717.18, amount: 354.23 },
  { min: 4717.19, max: 5335.42, amount: 324.87 },
  { min: 5335.43, max: 6224.67, amount: 294.63 },
  { min: 6224.68, max: 7113.9, amount: 253.54 },
  { min: 7113.91, max: 7382.33, amount: 217.61 },
  { min: 7382.34, max: Infinity, amount: 0 },
];

/**
 * It returns a table based on the period
 * @param period - The period of the table to be returned.
 * @returns A function that takes a period and returns a table.
 */
const getTable = (period) => {
  switch (period) {
    case "diario":
      return diaryTable;
    case "quincenal":
      return quincenalTable;
    case "mensual":
      return mensualTable;
    default:
      throw new Error(`Periodo no valido: ${period}`);
  }
};

/**
 * It takes an amount and a period, and returns the subsidy for that amount and period
 * @param amount - The amount of the gross income
 * @param period - The period of the subsidy. This is either "monthly" or "biweekly" or "daily".
 * @returns The amount of subsidy
 */
function calculateSubsidy(amount, period) {
  // get the table row
  const row = getTable(period).find(
    (row) => amount >= row.min && amount <= row.max
  );

  // calculate the amount of subsidy
  return row.amount;
}

module.exports = calculateSubsidy;
