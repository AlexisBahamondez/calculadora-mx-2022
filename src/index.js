const calculateSubsidy = require("./subsidy");
const calculateLisr = require("./rates");
const calculateSecurity = require("./security");
const { buttonState } = require("./periodButton");

const minSueldoMap = {
	mensual: 5186.1,
	quincenal: 2593.05,
	diario: 172.87,
};

/**
 * Calculate the difference between the lisr and the subsidy.
 * @param lisr - The amount of ISR that the user has to pay.
 * @param subsidy - The subsidy amount that the user is requesting.
 * @returns The absolute value of the difference between the lisr and the subsidy.
 */
const calculateIsr = (lisr, subsidy) => {
	return Math.abs(lisr.lisr - subsidy);
};

/**
 * It calculates the net salary of a worker given an amount and a period
 * @param amount - The amount of the salary
 * @param period - "quincenal" or "mensual"
 * @returns {
 *     "lisr": {
 *         "lisr": number,
 *         "amount": number,
 *         "period": "mensual" or "quincenal" o "diario",
 *         "tax": number,
 *         "taxPercentage": number,
 *         "taxAmount": number,
 *         "subsidy": number,
 *         "subsidyPercentage": number,
 */
function calculateSalary(amount, period, includeIMMS = false) {
	const lisr = calculateLisr(amount, period);
	const subsidy = calculateSubsidy(amount, period);
	const isr = calculateIsr(lisr, subsidy);
	const security = calculateSecurity(amount, period, "trabajador"); // TYPES: patron, trabajador

	const netSalaryWithoutSecurity =
		lisr.lisr > subsidy ? amount - isr : amount + isr;

	const netSalary = includeIMMS
		? netSalaryWithoutSecurity - security
		: netSalaryWithoutSecurity;

	return {
		lisr,
		subsidy,
		isr,
		security,
		netSalary,
	};
}

const getActivePeriod = (buttonState) => {
	for (const key in buttonState) {
		const value = buttonState[key];
		if (value) return key;
	}
};

const mxFormatter = new Intl.NumberFormat("es-MX", {
	style: "currency",
	currency: "MXN",
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

const displayValues = (salary) => {
	const limiteInferior = document.getElementById("limite-inferior");
	const excedente = document.getElementById("excedente-limite-inferior");
	const porcentaje = document.getElementById("porcentaje-excedente");
	const impuestoMarginal = document.getElementById("impuesto-marginal");
	const cuotaFija = document.getElementById("cuota-fija-impuesto");
	const isr = document.getElementById("isr");
	const imss = document.getElementById("imss");
	const subsidio = document.getElementById("subsidio");
	const sueldoNeto = document.getElementById("sueldo-neto");

	limiteInferior.innerHTML = mxFormatter.format(salary.lisr.limiteInferior);
	excedente.innerHTML = mxFormatter.format(salary.lisr.excedente);
	porcentaje.innerHTML = mxFormatter.format(
		salary.lisr.porcentajeSobreExcedente
	);
	impuestoMarginal.innerHTML = mxFormatter.format(salary.lisr.impuestoMarginal);
	cuotaFija.innerHTML = mxFormatter.format(salary.lisr.cuotaFija);
	isr.innerHTML = mxFormatter.format(salary.isr);
	imss.innerHTML = mxFormatter.format(salary.security);
	subsidio.innerHTML = mxFormatter.format(salary.subsidy);
	sueldoNeto.innerHTML = mxFormatter.format(salary.netSalary) + " MXN";
};

document.getElementById("calcular-sueldo").addEventListener("click", (e) => {
	const sueldoInput = document.getElementById("sueldo-bruto");
	const activePeriod = getActivePeriod(buttonState);

	const imssCheck = document.getElementById("imss-check")?.checked;

	if (!activePeriod) {
		alert("Debes seleccionar un período");
		return;
	}

	const minSueldo = minSueldoMap[activePeriod];
	const sueldo = parseFloat(sueldoInput.value);

	if (sueldo < minSueldo) {
		alert(
			`El sueldo bruto no puede ser inferior a ${mxFormatter.format(
				minSueldo
			)} MXN para el período ${activePeriod}.`
		);
		return;
	}

	const salary = calculateSalary(sueldo, activePeriod, imssCheck);
	displayValues(salary);
});
