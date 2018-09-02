function tarefa(){
    var novaTarefa = document.getElementById('novaTarefa').value;

    var conteudoAtual = document.getElementById('output').innerHTML;

    var novaLinha = '<li onclick="riscar(this)">' + novaTarefa + '<span onclick="fecharLinha(this)"><img src="./error.png"></span>' + '</li>';	
    output.innerHTML = novaLinha + conteudoAtual;

    document.getElementById('novaTarefa').value = '';
}
			
function riscar(palavra) {
    palavra.classList.toggle('checked');       
}

function fecharLinha(botaoFechar){
    botaoFechar.parentElement.remove()
}