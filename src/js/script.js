/* Desenvolva o seu código abaixo */
class Veiculo {
  constructor(tanque, proprietario, placa) {
    this.tanque = tanque; // Em L
    this.proprietario = proprietario;
    this.placa = placa;

    this._ligado = false;
    this._velocidade = 0; // Em K/h
  }

  get ligado() {
    return this._ligado;
  }

  //   set ligado(_) {
  //     throw 'Cant change this value';
  //   };

  get velocidade() {
    return this._velocidade;
  }

  //   get tanque() {
  //     return this._tanque;
  //   }

  //   set tanque(newTanque) {
  //     if (typeof newTanque === "number") {
  //       this._tanque = newTanque;
  //     } else {
  //       return console.error("Tipo inválido!");
  //     }
  //   }

  girarChave() {
    // Se estiver andando e ligado, OPS!
    if (this._velocidade > 0 && this._ligado === true) {
      return "O veículo deverá estar parado para ser desligado!";
    }

    // Se estiver ligado, DESLIGA!
    else if (this._ligado === true) {
      this._ligado = false;
      return "O veículo agora está desligado!";
    }

    // Se estiver desligado, LIGA!
    // else {
    this._ligado = true;
    return "O veículo agora está ligado!";
    // }
  }

  acelerar() {
    if (this._ligado === false) {
      return "Você precisa ligar o seu veículo primeiro!";
    }

    this._velocidade += 10;
    return `Velocidade do veículo aumentada em 10! VELOCIDADE ATUAL: ${this._velocidade} Km/h`;
  }

  frear() {
    if (this._ligado === false) {
      return "Você precisa ligar o seu veículo primeiro!";
    } else if (this._velocidade === 0) {
      return "O veículo já está parado!";
    }

    this._velocidade -= 10;
    return `Velocidade do veículo reduzida em 10! VELOCIDADE ATUAL: ${this._velocidade} Km/h`;
  }
}

class Caminhao extends Veiculo {
  constructor(tanque, proprietario, placa) {
    super(tanque, proprietario, placa);

    this._tipoCombustivel = "Diesel";
  }

  get tipoCombustivel() {
    return this._tipoCombustivel;
  }
}

class Carro extends Veiculo {
  constructor(tanque, proprietario, placa) {
    super(tanque, proprietario, placa);

    this._tipoCombustivel = "Gasolina";
  }

  get tipoCombustivel() {
    return this._tipoCombustivel;
  }
}

class Posto {
  static historicoAbastecimento = [];

  static precos = { gasolina: 5, diesel: 10 };

  static abastecer(veiculo, quantidade, tipo) {
    if (veiculo.tipoCombustivel !== tipo) {
      return "Tipo de combustível escolhido não é compatível, favor verificar para não danificar o seu veículo!";
    }

    // let preco = 0;

    // switch (tipo) {
    //   // tipo === "Gasolina"
    //   case "Gasolina":
    //     preco = 5;
    //     break;
    //   // tipo === "Diesel"
    //   case "Diesel":
    //     preco = 10;
    //     break;
    //   default:
    //     break;
    // }

    // const notaFiscal = {
    //   totalAbastecido: quantidade,
    //   precoLitro: preco,
    //   total: quantidade * preco,
    // };

    const notaFiscal = {
      totalAbastecido: quantidade,
      precoLitro: Posto.precos[tipo.toLowerCase()], //posto.precos.gasolina
      total: quantidade * Posto.precos[tipo.toLowerCase()],
    };

    veiculo.tanque += quantidade;

    // Posto.historicoAbastecimento.push(notaFiscal);
    this.historicoAbastecimento.push(notaFiscal);

    return notaFiscal;
  }
}

// ==== TESTES DAS CLASSES =========
const veiculo = new Veiculo(40, "João", "LMX3435");

console.log("\n==== Veículo criado =========");
console.log(veiculo);

console.log("\n==== Status da chave antes de girar =========");
console.log(veiculo.ligado);

console.log("\n==== Girando a chave =========");
console.log(veiculo.girarChave());

console.log("\n==== Status da chave depois de girar =========");
console.log(veiculo.ligado);

console.log("\n==== Acelerar com o carro LIGADO =========");
console.log(veiculo.acelerar());

console.log("\n==== Girando a chave =========");
console.log(veiculo.girarChave());

console.log("\n==== Acelerar com o carro AINDA LIGADO =========");
console.log(veiculo.acelerar());

console.log("\n==== Freando o carro LIGADO =========");
console.log(veiculo.frear());

console.log("\n==== Freando o carro LIGADO =========");
console.log(veiculo.frear());

console.log("\n==== Freando o carro JÁ PARADO =========");
console.log(veiculo.frear());

console.log("\n==== Girando a chave =========");
console.log(veiculo.girarChave());

const caminhao = new Caminhao(40, "João", "LMX3435");

console.log("\n==== Caminhão criado =========");
console.log(caminhao);

console.log("\n==== Status da chave do caminhão =========");
console.log(caminhao.ligado);

const carro = new Carro(40, "João", "LMX3435");

console.log("\n==== Carro criado =========");
console.log(carro);

console.log("\n==== Status da chave do carro =========");
console.log(carro.ligado);

// const posto = new Posto();

console.log("\n==== Posto criado =========");
console.log(Posto);

console.log("\n==== Abastecer caminhão com gasolina =========");
console.log(Posto.abastecer(caminhao, 200, "Gasolina"));

console.log("\n==== Tanque do caminhão antes de abastecer =========");
console.log(caminhao.tanque);

console.log("\n==== Abastecer caminhão com diesel =========");
console.log(Posto.abastecer(caminhao, 200, "Diesel")); // 2000

console.log("\n==== Tanque do caminhão depois de abastecer =========");
console.log(caminhao.tanque);

console.log("\n==== Histórico de abastecimento =========");
console.log(Posto.historicoAbastecimento);

console.log("\n==== Tanque do carro antes de abastecer =========");
console.log(carro.tanque);

console.log("\n==== Abastecer carro com gasolina =========");
console.log(Posto.abastecer(carro, 150, "Gasolina")); // 2000
// gasolina

console.log("\n==== Tanque do carro depois de abastecer =========");
console.log(carro.tanque);

console.log("\n==== Histórico de abastecimento =========");
console.log(Posto.historicoAbastecimento);
