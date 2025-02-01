"use strict";
// Diferença entre any, unknown e never
let variavelAny = "Pode ser qualquer coisa";
variavelAny = 42; // Aceita qualquer tipo
let variavelUnknown = "Algo desconhecido";
// let resultado: string = variavelUnknown; // Erro: precisa de verificação de tipo
if (typeof variavelUnknown === "string") {
    let resultado = variavelUnknown; // Agora funciona
}
function erro() {
    throw new Error("Isso nunca retorna nada!");
}
const resposta = { mensagem: "OK", codigo: 200 };
// Enums
var Cores;
(function (Cores) {
    Cores["Vermelho"] = "RED";
    Cores["Azul"] = "BLUE";
    Cores["Verde"] = "GREEN";
})(Cores || (Cores = {}));
const minhaCor = Cores.Azul;
console.log(`Minha cor favorita é ${minhaCor}`);
