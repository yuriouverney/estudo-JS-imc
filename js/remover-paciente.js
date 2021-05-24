let table = document.querySelector("table");

table.addEventListener("dblclick", function(event){
	
	let paciente = event.target.parentNode;
	let tdNome = paciente.querySelector(".info-nome");

	if (tdNome != null){
		let confirmAction = confirm("Você tem certeza que deseja excluir o paciente "+ tdNome.textContent +"?");
		if (confirmAction) {
		event.target.parentNode.classList.add("fadeOut");
		setTimeout(function(){
			event.target.parentNode.remove();
		},1000);
			} else {
	  		alert("Ação Cancelada");
		}
	}
});