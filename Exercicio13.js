const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question (`Digite por favor o ano de nascimento do guri: `, (anoNas) => {
    const anoAt = new Date().getFullYear
    const idade = anoAt - parseInt (anoNas);
    
    if  ( idade < 18) {
        const anosFal = 18 - idade;
        console.log(`Você ainda não tem 18 (ufa) ainda faltam ${anosFal} para se alistar `);
    } else if (idade === 18){
        console.log (`Você já tem idade para se alistar! Boa sorte!`);
    } else {
        const anosPass = idade - 18;
        console.log (`Você já passou ${anosPass} anos do alistamento! eita xiri`);
}
rl.close();
}); 