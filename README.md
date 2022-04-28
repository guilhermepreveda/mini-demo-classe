# Mini-demo sobre Classe

Nessa mini-demo, esteremos **construindo várias classes para reforçar alguns conceitos** sobre Orientação a Objeto, então preste atenção no README.md e mãos a obra!

## Class Veiculo

Construa uma classe chamada `Veiculo` que terá as seguintes propriedades recebidas por parâmetro:

- `tanque` - Tipo **Number** | Quantidade de combustível no tanque
- `proprietario` - Tipo **String** | Nome do proprietário do veículo
- `placa` - Tipo **String** | Placa do veículo

E as seguintes propriedades pré-definidas (default):

- `ligado` - Tipo **Boolean** | Status atual do veículo (ligado ou desligado)

  - Pré-definida como `false`

- `velocidade` - Tipo **Number** | Velocidade do veículo (em Km/h)

  - Pré-definida como `0`

> Desenvolva somente o método `get` para essa propriedade

Além disso, essa classe terá os seguintes métodos:

### Method girarChave

Desenvolva um método chamado `girarChave` que deverá **ligar ou desligar o veículo,** dependendo do status dele. Nele, deverão existir as seguintes condicionais:

- **Se o veículo com uma velocidade maior que 0 e ligado**, esse método deverá retornar a seguinte mensagem:

```js
"O veículo deverá estar parado para ser desligado!";
```

- **Se o veículo estiver ligado**, ao chamar esse método, a propriedade `ligado` deverá ficar `false` e retornar a seguinte mensagem:

```js
"O veículo agora está desligado!";
```

- **Se o veículo estiver desligado**, ao chamar esse método, a propriedade `ligado` deverá ficar `true` e retornar a seguinte mensagem:

```js
"O veículo agora está ligado!";
```

### Method acelerar

Desenvolva um método chamado `acelerar` que deverá **aumentar a velocidade do veículo**, mas isso deverá ser feito seguindo a seguinte condicional:

- **Se o veículo estiver desligado**, esse método deverá retornar a seguinte mensagem:

```js
"Você precisa ligar o seu veículo primeiro!";
```

- **Se o veículo estiver ligado**, esse método deverá somar mais 10 na propriedade `velocidade`, retornando a seguinte mensagem:

```js
`Velocidade do veículo aumentada em 10! VELOCIDADE ATUAL: ${VELOCIDADE DO VEÍCULO}`
```

### Method frear

Desenvolva um método chamado `frear` que deverá **reduzir a velocidade do veículo**, mas isso deverá ser feito seguindo a seguinte condicional:

- **Se o veículo estiver desligado**, esse método deverá retornar a seguinte mensagem:

```js
"Você precisa ligar o seu veículo primeiro!";
```

- **Se o veículo estiver ligado**, esse método deverá reduzir em 10 na propriedade `velocidade`, retornando a seguinte mensagem:

```js
`Velocidade do veículo reduzida em 10! VELOCIDADE ATUAL: ${VELOCIDADE DO VEÍCULO}`
```

- **Se a velocidade já estiver em 0**, esse método deverá retornar a seguinte mensagem:

```js
"O veículo já está parado!";
```

## Class Caminhao

Após isso, desenvolva uma extensão dessa classe chamada `Caminhao` que herdará todas as propriedades de `Veiculo`, porém com a seguinte propriedade pré-definida adicional:

- `tipoCombustivel` - Tipo **String** | Tipo de combústivel usado pelo veículo
  - Pré-definida como `"Diesel"`

> Desenvolva somente o método `get` para essa propriedade

## Class Carro

Depois, desenvolva mais uma extensão da classe Veiculo chamada `Carro` que herdará todas as propriedades de `Veiculo`, porém com a seguinte propriedade pré-definida adicional:

- `tipoCombustivel` - Tipo **String** | Tipo de combustível usado pelo veículo
  - Pré-definida como `"Gasolina"`

> Desenvolva somente o método `get` para essa propriedade

## Static Class Posto

> Uma **classe estática** é quando ela não possui um construtor e todas as suas propriedades e métodos **são estáticos**!

Por fim, desenvolva uma **classe estática** chamada `Posto` que terá a seguinte propriedade estática pré-definida:

- `historicoAbastecimento` - Tipo **Array** | Guardará todas as notas fiscais (objetos) de abastecimentos feitos no posto
  - - Pré-definida como `[]`

### Method abastecer

Desenvolva um método estático chamado `abastecer` que deverá adicionar a quantidade de combustível desejada no tanque do veículo passado, mas somente se o tipo especificado for aceito pelo veículo.

Esse método deverá receber os seguintes valores por parâmetro:

- **veiculo** - Tipo **Object** | Uma instância da classe Veiculo ou de seus filhos
- **quantidade** - Tipo **Number** | Quantidade de combustível desejada
- **tipo** - Tipo **String** | Tipo de combustível desejado

Se o tipo de gasolina for o correto, o método deverá **retornar o seguinte objeto** (nota fiscal), além de adicioná-lo ao array `historicoAbastecimento`:

```js
{
   totalAbastecido: // QUANTIDADE DE COMBUSTÍVEL ABASTECIDO,
   precoLitro: // PREÇO POR LITRO DO COMBUSTÍVEL ESCOLHIDO,
   total: // TOTAL A SER PAGO PEL@ MOTORIST@
}
```

> - Preço por litro da **gasolina**: `R$5,00`
> - Preço por litro do **diesel**: `R$10,00`

Caso contrário, retorne a seguinte mensagem:

```js
"Tipo de combustível escolhido não é
compatível, favor verificar para não danificar o seu veículo!"
```

---

## Desafio extra

Depois de concluir todo o desenvolvimento do código, **separe cada classe em um arquivo separado**, realizando a importação correta de todos eles.
