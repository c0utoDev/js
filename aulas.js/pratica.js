const prompt = require("prompt-sync")()

console.log(`
    
    Bem-vindo a loja clandestina!
    
`)

const object = {
    user: prompt("Digite seu nome: "),
    age: prompt("Digite sua idade: "),
    email: prompt("Digite seu email: "),
};

const { user, age, email } = object;

if (age <= 17) {
    console.log("acesso negado")
} else {
    const catalog = {
        a: "cigarro(s)",
        quantA: 50,
        b: "vodka",
        quantB: 15,
        c: "ak-47",
        quantC: 8
    };
    const { a, quantA, b, quantB, c, quantC } = catalog;

    console.log(`O que você gostaria de comprar?, ${user}:
 a) cigarro(s)
 b) vodka(s) 
 c) ak-47(s) `);
    const venda = {
        consult: prompt("opção: ")
    };
    const { consult } = venda;

    if (consult == "a") {

        console.log(`Temos ${quantA} ${a}!`);


        prompt("Deseja comprar? (press enter) ");
        const quant = Number(prompt("Quantidade: "));
        const soldA = quantA - quant;

        if (quant >= quantA) {
            console.log("Quantidade fora de estoque");
        } else if (quant <= quantA) {
            console.log(`Vendido, você tem ${quant} ${a}!`);
            console.log(`



                          (  )/  
                          )(/
       ________________  ( /)
      ()__)____________)))))


`);
            console.log(`
Estoque: ${soldA}`);
        }
    } else if (consult == "b") {

        console.log(`Temos ${quantB} ${b} `);

        prompt("Deseja comprar? (press enter)");
        const quant = Number(prompt("Quantidade: "));
        const soldB = quantB - quant;

        if (quant >= quantB) {
            console.log("Quantidade fora de estoque!")
        } else if (quant <= quantB) {
            console.log(`Vendido, você tem ${quant} ${b}`)
            console.log(`
            
            
               ______⠀⠀⠀
            ⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀
            ⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀
            ⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀
            ⠀⠀⢀⣿⡇⠀⠀⢸⣿⡀⠀⠀
            ⠀⢀⣾⡿⠁⠀⠀⠈⢿⣷⡀⠀
            ⢀⣿⡿⠁⠀⠀⠀⠀⠈⢿⣿⡀
            ⢸⣿⣥⣤⣤⣤⣤⣤⣤⣬⣿⡇
            ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
            ⢸⣿⣿⡿⠟⠛⠉⠀⣹⣿⣿⡇
            ⢸⣿⣿⣧⣀⣤⣶⣿⣿⣿⣿⡇
            ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
            ⢸⣿⠉⠉⠉⠉⠉⠉⠉⠉⣿⡇
            ⠸⣿⣧⣤⣤⣤⣤⣤⣤⣼⣿⠇
            ⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠁
            
            ⠀`)
            console.log(`
Estoque: ${soldB}`)
        }
    } else if (consult == "c") {

        console.log(`Temos ${quantC} ${c}`);

        prompt("Deseja comprar? (press enter)");
        const quant = Number(prompt("Quantidade: "))
        const soldC = quantC - quant;

        if (quant >= quantC) {
            console.log("Quantidade fora de estoque!");
        } else if (quant <= quantC) {
            console.log(`Vendido, você tem ${quant} ${c}`)
            console.log(`


⠀⠀⠀⠀⠀⠀⠀      ⢀⣠⣴⣶⣶⣤⣤⣤⣤⣶⣶⣶⣶⣶⣶⣦⣤⣤⡀⠀⢀⣶⠀
      ⢸⣿⣿⣿⣿⣿⣿⡿⢿⣿⡿⡟⢻⣿⣿⡟⠛⠛⠛⠉⠙⠛⠋⠀⠉⠉⠉⠉⠉⠁
      ⢸⣿⠿⠟⠋⠉⠀⢀⣾⡿⠉⠁⠈⠹⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀      ⠉⠁⠀⠀⠀⠀⠀⠀⠈⠙⠛⠁


`)
            console.log(`
Estoque: ${soldC}`);
        };
    };
};