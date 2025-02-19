const readline = require("readline"); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual a velocidade do seu veículo? ", (velo) => {
  velo = parseFloat(velo); 

  const limite = 80; 
  const Multa = 5; 

  if (velo > limite) {
    const excesso = velo - limite;
    const valorMulta = excesso * Multa;
    console.log(`Você foi multado! O valor da sua multa é R$${valorMulta}`);
  } else {
    console.log("A velocidade está dentro do limite, boa!.");
  }

  rl.close();
});
