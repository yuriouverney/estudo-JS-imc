let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++){
	
	let paciente = pacientes[i];

	let tdPeso = paciente.querySelector(".info-peso");
	let peso = tdPeso.textContent;

	let tdAltura = paciente.querySelector(".info-altura");
	let altura = tdAltura.textContent;

	let tdimc = paciente.querySelector(".info-imc");
	let imc = tdimc.textContent;

	let pesoValido = validaPeso(peso);
	let alturaValida = validaAltura(altura);


	if (!pesoValido){
		tdimc.textContent = "Peso inválido!";
		pesoValido = false;
	}

	if (!alturaValida){
		tdimc.textContent = "Altura inválida!";
		alturaValida = false;
	}

	if (pesoValido && alturaValida){
		imc = calculaImc(peso,altura);
		tdimc.textContent = imc;
	}else{
		paciente.classList.add("paciente-invalido");
	}
}

function validaPeso(peso){
	if (peso > 0 && peso < 1000){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if (altura > 0 && altura < 3.0){
		return true;
	}else{
		return false;
	}
}

function calculaImc(peso,altura){
	let imc;
	imc = peso/(altura*altura);
	return imc.toFixed(2);
}

