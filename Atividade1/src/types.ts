// Diferença entre any, unknown e never

let variavelAny: any = "Pode ser qualquer coisa";
variavelAny = 42; // Aceita qualquer tipo

let variavelUnknown: unknown = "Algo desconhecido";
// let resultado: string = variavelUnknown; // Erro: precisa de verificação de tipo
if (typeof variavelUnknown === "string") {
  let resultado: string = variavelUnknown; // Agora funciona
}

function erro(): never {
  throw new Error("Isso nunca retorna nada!");
}

// União, interseção, tipos literais
type Status = "Sucesso" | "Erro";
type Resposta = { mensagem: string } & { codigo: number };

const resposta: Resposta = { mensagem: "OK", codigo: 200 };

// Enums
enum Cores {
  Vermelho = "RED",
  Azul = "BLUE",
  Verde = "GREEN",
}

const minhaCor: Cores = Cores.Azul;
console.log(`Minha cor favorita é ${minhaCor}`);
