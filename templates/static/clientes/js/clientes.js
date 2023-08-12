function add_carro() {
  container = document.getElementById("form-carro");
  html =
    "<br>  <div class='row'> <div class='col-md'> <input type='text' placeholder='carro' class='form-control' name='carro' > </div> <div class='col-md'><input type='text' placeholder='Placa' class='form-control' name='placa' ></div> <div class='col-md'> <input type='number' placeholder='ano' class='form-control' name='ano'> </div> </div>";

  container.innerHTML += html;
}

function exibir_form(tipo) {
  add_cliente = document.querySelector(".adicionar-cliente");
  att_cliente = document.querySelector("#att_cliente");

  if (tipo === "1") {
    att_cliente.style.display = "none";
    add_cliente.style.display = "block";
  } else if (tipo === "2") {
    att_cliente.style.display = "block";
    add_cliente.style.display = "none";
  }
}

function dados_cliente() {
  cliente = document.querySelector("#cliente-select");
  token = document.querySelector("[name=csrfmiddlewaretoken]").value;
  id_cliente = cliente.value;
  data = new FormData();
  data.append("id_cliente", id_cliente);
   fetch("/clientes/atualiza_cliente/", {
    method: "POST",
    headers: {
      "X-CSRFToken": token,
    },
    body: data,
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      document.getElementById("form-att-cliente").style.display = "block"
      nome = document.getElementById("nome")
      nome.value = data.nome
      sobrenome = document.getElementById("sobrenome")
      sobrenome.value = data.sobrenome
      cpf = document.getElementById('cpf')
      cpf.value = data.cpf
      email = document.getElementById("email")
      email.value = data.email
    });
}
