//Inputs
const nome = document.getElementById("nome");
const mail = document.getElementById("mail");
const tell = document.getElementById("tell");

//Outputs
const resultName = document.getElementById("resultName");
const resultMail = document.getElementById("resultMail");
const resultTell = document.getElementById("resultTell");

function salvar() {
  resultName.textContent = nome.value;
  resultMail.textContent = mail.value;
  resultTell.textContent = tell.value;
}
