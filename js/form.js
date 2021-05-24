const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	let form = document.querySelector("#form-adicionar");

	let paciente = adicionarPessoa(form);

	let pacienteTr = montaTr(paciente);

	let formPeso = document.querySelector("#peso");
	let formAltura = document.querySelector("#altura");

	let validaPesoForm = validaPeso(paciente.peso);
	let validaAlturaForm = validaAltura(paciente.altura);

	// adicionando paciente na tabela
	if (validaPesoForm && validaAlturaForm){
		let tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacienteTr);

		// limpando formulário
		form.reset();
		formPeso.classList.remove("form-peso-invalido");
		formAltura.classList.remove("form-altura-invalida");
		}

	else if (!validaPesoForm && !validaAlturaForm){
		formPeso.classList.add("form-peso-invalido");
		formAltura.classList.add("form-altura-invalida");
		alert("Peso e altura inválidos!");
	}

	else if (!validaPesoForm){
		alert("Peso inválido!");
		formPeso.classList.add("form-peso-invalido");
	}
	else if (!validaAlturaForm){
		alert("Altura inválida!");
		formAltura.classList.add("form-altura-invalida");
	}

});

function adicionarPessoa(form){
	let paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value,form.altura.value)
	}
	return paciente;
}


function montaTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
	let td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}
