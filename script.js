// Ações dos botões
document.querySelectorAll(".power").forEach(button => {
  button.addEventListener("click", function() {
    console.log("Botão Power clicado");
  });
});

document.querySelectorAll(".volume-up").forEach(button => {
  button.addEventListener("click", function() {
    console.log("Aumentando o volume");
  });
});

document.querySelectorAll(".volume-down").forEach(button => {
  button.addEventListener("click", function() {
    console.log("Diminuindo o volume");
  });
});

document.querySelectorAll(".channel-up").forEach(button => {
  button.addEventListener("click", function() {
    console.log("Canal seguinte");
  });
});

document.querySelectorAll(".channel-down").forEach(button => {
  button.addEventListener("click", function() {
    console.log("Canal anterior");
  });
});

document.querySelectorAll(".arrow").forEach(button => {
  button.addEventListener("click", function() {
    const direction = button.classList.contains("up")
      ? "Cima"
      : button.classList.contains("down")
      ? "Baixo"
      : button.classList.contains("left")
      ? "Esquerda"
      : "Direita";
    console.log("Seta " + direction + " clicada");
  });
});

document.querySelector(".confirm").addEventListener("click", function() {
  console.log("Botão Confirmar clicado");
  enviarComando(14);
});

document.querySelectorAll(".numbers button").forEach(button => {
  button.addEventListener("click", function() {
    console.log("Número " + button.textContent + " clicado");
    enviarComando(button.textContent);
  });
});

function enviarComando(argument) {
  const jsonData = {
    'request': 'key_command',
    'device_id': 'MAC_DO_APARELHO',
    'key': Number(argument)
   };
  fetch('http://192.168.0.179:20181', {
   method: "POST", 
   headers: {
      'User-agent': 'ALiPlay 2.0 @ Android'
   },
   body: JSON.stringify(jsonData),
})
   .then(response => response.text())
   .then(text => console.log(text));
}