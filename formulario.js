function cadastrarCliente() {
    const cliente = {
        nome: document.getElementById("nome-cliente").value,
        email: document.getElementById("email").value,
        endereco: document.getElementById("endereço").value,
        numero: document.getElementById("numero").value,
        complemento: document.getElementById("complemento").value,
        bairro: document.getElementById("bairro").value,
        cep: document.getElementById("cep").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
    }
    $("#modalCliente").modal("hide");
    $("#formCliente").trigger("reset");
    localStorage.setItem("cliente", JSON.stringify(cliente))
}

function cadastrarProduto() {
    const produto = {
        nome: document.getElementById("nome-produto").value,
        codigo: document.getElementById("codigo").value,
        nSerie: document.getElementById("num-serie").value,
        custoUnitario: document.getElementById("custo").value,
        precoVenda: document.getElementById("venda").value,
        quantidade: document.getElementById("quantidade").value,
        categoria: document.getElementById("categoria").value,
        descricao: document.getElementById("descrição").value,
    }
    $("#modalProduto").modal("hide");
    $("#formProduto").trigger("reset");
    localStorage.setItem("produto", JSON.stringify(produto))
}

 