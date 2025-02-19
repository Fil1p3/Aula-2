const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function verificarBis(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    return true;
  }
  return false;
}


rl.question("Digite qualquer ano: ", (ano) => {
  ano = parseInt(ano); 

  if (verificarBis(ano)) {
    console.log(`${ano}  é um ano bissexto :(.`);
  } else {
    console.log(`${ano} não é um ano bissexto felizmente!.`);
  }

  rl.close(); 
});
