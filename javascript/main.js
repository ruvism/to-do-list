function tarefa(){
    var novaTarefa = document.getElementById('novaTarefa').value;

    if (novaTarefa > ''){

        var conteudoAtual = document.getElementById('output').innerHTML;

        var novaLinha = '<li onclick="riscar(this)">' + novaTarefa + '<span onclick="fecharLinha(this)"><img src="./error.png"></span>' + '</li>';	
        output.innerHTML = novaLinha + conteudoAtual;

        document.getElementById('novaTarefa').value = '';
    }
    else{
        alert('Por favor informar a tarefa!');
    }
}
			
function riscar(palavra) {
    palavra.classList.toggle('checked');       
}

function fecharLinha(botaoFechar){
    botaoFechar.parentElement.remove()
}
