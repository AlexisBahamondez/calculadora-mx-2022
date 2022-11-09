const a = [
    { min: 0.01, max: 58, amount: 13.34 },
    { min: 58.01, max: 87, amount: 13.34 },
    { min: 87.01, max: 113.86, amount: 13.33 },
    { min: 113.87, max: 116, amount: 12.88 },
    { min: 116.01, max: 145.78, amount: 12.54 },
    { min: 145.79, max: 154.66, amount: 11.61 },
    { min: 154.67, max: 174.93, amount: 10.65 },
    { min: 174.94, max: 204.09, amount: 9.66 },
    { min: 204.1, max: 233.24, amount: 8.31 },
    { min: 233.25, max: 242.04, amount: 7.13 },
    { min: 242.05, max: 1 / 0, amount: 0 },
  ],
  n = [
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
    { min: 3691.18, max: 1 / 0, amount: 0 },
  ],
  m = [
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
    { min: 7382.34, max: 1 / 0, amount: 0 },
  ];
const t = [
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
    { min: 10679.85, max: 1 / 0, amount: 3349.38, percent: 0.35 },
  ],
  e = [
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
    { min: 160285.36, max: 1 / 0, amount: 50268.15, percent: 0.35 },
  ],
  o = [
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
    { min: 324845.02, max: 1 / 0, amount: 101876.9, percent: 0.35 },
  ];
var r;
r = {
  riesgo: { patron: 0.005, trabajador: 0 },
  enfermedad: {
    cuotaFija: { patron: 0.204, trabajador: 0 },
    excedente: { patron: 0.011, trabajador: 0.004 },
    gastosMedicos: { patron: 0.0105, trabajador: 0.00375 },
    prestaciones: { patron: 0.007, trabajador: 0.0025 },
  },
  invalidez: { patron: 0.0175, trabajador: 0.00625 },
  cesantia: {
    retiro: { patron: 0.02, trabajador: 0 },
    vejez: { patron: 0.0315, trabajador: 0.01125 },
  },
  guarderias: { patron: 0.01, trabajador: 0 },
  infonavit: { patron: 0.05, trabajador: 0 },
};
var i;
const u = (a) => {
  switch (a) {
    case "diario":
      return 1;
    case "quincenal":
      return 15;
    case "mensual":
      return 30;
    default:
      throw new Error(`Periodo no valido: ${a}`);
  }
};
var c = (i = {
    getDays: u,
    getBenefit: (a, n, m, t, e) =>
      "patron" === a
        ? n === m
          ? t * u(e) * r.enfermedad.prestaciones.patron +
            m * u(e) * r.enfermedad.prestaciones.trabajador
          : t * u(e) * r.enfermedad.prestaciones.patron
        : n !== m
        ? t * u(e) * r.enfermedad.prestaciones.trabajador
        : 0,
    getMedicalExpenses: (a, n, m, t, e) =>
      "patron" === a
        ? n === m
          ? t * u(e) * r.enfermedad.gastosMedicos.patron +
            m * u(e) * r.enfermedad.gastosMedicos.trabajador
          : t * u(e) * r.enfermedad.gastosMedicos.patron
        : n !== m
        ? t * u(e) * r.enfermedad.gastosMedicos.trabajador
        : 0,
    getUnemploymentAndOldAge: (a, n, m, t, e) =>
      "patron" === a
        ? n === m
          ? t * u(e) * r.cesantia.vejez.patron +
            m * u(e) * r.cesantia.vejez.trabajador
          : t * u(e) * r.cesantia.vejez.patron
        : n !== m
        ? t * u(e) * r.cesantia.vejez.trabajador
        : 0,
    getDisability: (a, n, m, t, e) =>
      "patron" === a
        ? n === m
          ? t * u(e) * r.invalidez.patron + m * u(e) * r.invalidez.trabajador
          : t * u(e) * r.invalidez.patron
        : n !== m
        ? t * u(e) * r.invalidez.trabajador
        : 0,
  }).getDays,
  x = i.getBenefit,
  p = i.getMedicalExpenses,
  s = i.getUnemploymentAndOldAge,
  d = i.getDisability;
const l = document.getElementsByClassName("btn-period"),
  g = {},
  j = (a) => {
    for (const n of l)
      (g[n.name] = a === n.name),
        a === n.name ? n.classList.add("active") : n.classList.remove("active");
  };
j(), console.log(g);
for (const a of l)
  console.log(a.name), (g[a.name] = !1), a.addEventListener("click", b);
function b(a) {
  const n = a?.target?.name;
  n && (j(n), console.log(g));
}
//# sourceMappingURL=index.63f34ab7.js.map
