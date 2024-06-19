const form = document.getElementById('formulario');

const nomes = [];
const telefones = [];

let linhas ='' ;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addLinha();
    atualizarTabela ();

});

function addLinha() {
    const nome = document.getElementById('nomeUsuario');
    const telefone = document.getElementById('telefoneUsuario');

    const nomeV = nome.value;
    const telefoneV = Number(telefone.value);

    
    if (telefones.includes(telefoneV) ) {
        alert(`Erro! Telefone já cadastrado.`)
    } else {

    nomes.push(nomeV);
    telefones.push(telefoneV);

    let linha = '<tr>' ;
    linha += `<td> ${nomeV} </td> `;
    linha += `<td> ${telefoneV} </td> `;
    linha += '<tr>',
    linhas += linha
    }
}

nome.value = '';
telefone.value = '';

function atualizarTabela () {
    const corpotabela = document.querySelector('#corpo');
    corpotabela.innerHTML = linhas;	

}