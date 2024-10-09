// Cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");



// Manipulando o input amount para receber somente números
amount.addEventListener("input", () =>{

  const hascharacterRegex = /\D+/g
  amount.value = amount.value.replace(hascharacterRegex, "");

});

// Captando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }

}

// Fução para converter a moeda
function convertCurrency(amount, price, symbol) {

  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    
    // Calcula total
    let total = (amount * price);
    if(isNaN(total)){
      return alert("Por favor, digite o valor corretamente para converter");
    }

    // Formatar o valor total
    total = formatCurrencyBRL(total).replace("R$", "");
    // Exibe resultado total
    result.textContent = `${total} Reais`;

    footer.classList.add("show-result");



  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result");
    alert("Não foi possivel converter. Tente novamente mais tarde.");
    
  }
  
}
// Formata a moeda em Real brasileiro
function formatCurrencyBRL(value) {
  // casting para numero e uso do toLocaleString para formatar no padrão BRL
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}