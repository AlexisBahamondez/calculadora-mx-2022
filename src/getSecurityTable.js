const securityTable = {
  riesgo: {
    patron: 0.005,
    trabajador: 0,
  },
  enfermedad: {
    cuotaFija: {
      patron: 0.204,
      trabajador: 0,
    },
    excedente: {
      patron: 0.011,
      trabajador: 0.004,
    },
    gastosMedicos: {
      patron: 0.0105,
      trabajador: 0.00375,
    },
    prestaciones: {
      patron: 0.007,
      trabajador: 0.0025,
    },
  },
  invalidez: {
    patron: 0.0175,
    trabajador: 0.00625,
  },
  cesantia: {
    retiro: {
      patron: 0.02,
      trabajador: 0,
    },
    vejez: {
      patron: 0.0315,
      trabajador: 0.01125,
    },
  },
  guarderias: {
    patron: 0.01,
    trabajador: 0,
  },
  infonavit: {
    patron: 0.05,
    trabajador: 0,
  },
};

module.exports = securityTable;
