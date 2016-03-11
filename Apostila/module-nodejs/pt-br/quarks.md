# Node-Atomic-Design_QUARKS

Repositório de **TODOS** os quarks a serem utilizados em nossos sistemas.

## O que é?

Um [Quark](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/mongoose-atomic-design.md#Átomo) nada mais é que a menor parte/módulo/função utilizada pelo Átomo.

Nesse caso o Átomo é **um campo** no *Schema* do Mongoose.

```js
const Atom = {
  type: String
, get: require('./../quarks/toUpper')
, set: require('./../quarks/toLower')
, validate: require('./../quarks/notEmptyStringValidate')
, required: true
, index: true
}

module.exports = Atom;
```

E esse campo possui alguns atributos, sendo esses os Quarks:

- type
- get
- set
- validate
- required
- index

Porém iremos nos focar inicialmente apenas nos Quarks de `validate`.

Então vamos ver como é o Quark `notEmptyStringValidate`:

```js
// notEmptyStringValidate
'use strict';

const notEmpty = require('./notEmptyString');

module.exports = {
  validator: (value) => {
    return notEmpty.validate(value);
  }
, message: 'O valor {VALUE} para o campo nome não pode ser vazio!'
};

```

Para facilitar o reuso eu separei os Quarks puros dos especificos para o Mongoose, pois o Quark do Mongose tem uma estrutura diferente do Quarks básico, os nossos Quarks não possuem o campo de mensagem, por exemplo.

Então no caso eu uso o Quark isEmptyString que utiliza os Quarks isEmpty e isString:

```js
// isEmptyString
'use strict';

module.exports = (value) => {
  const isEmpty = require('../isEmpty')(value)
  const isString = require('../../isString/isString')(value)

  if (isEmpty && isString) return true;

  return false;
};
```

Que por sua vez usa 2 outros Quarks:

```js
// isEmpty
module.exports = (value) => {
  const isNull = (value === null);
  const isUndefined = (value === undefined);
  const isEmpty = (value === '');
  if (isNull || isUndefined || isEmpty) return true;
  return false;
}
```

```js
// isString
module.exports = (value) => {
  if (typeof value === 'string' || value instanceof String) return true;
  return false;
}
```

Dessa forma podemos criar Quarks mais complexos apenas agregando Quarks menores.

## Padrão

Basicamente separamos os Quarks em 2 tipos:

- Modificadores: to{Name}
- Respondedores: is{Name}

Porém ainda temos outros tipos especiais como de validação do Mongoose.


### to{Name}

Esse tipo de Quark é aquele que recebe 1 valor como entrada e retorna outro valor modificado.

Por exemplo o `toUpperCase`:

```js
module.exports = (value) => value.toUpperCase();
```


### is{Name}

Um Quark básico para validação deverá retornar **APENAS** 1 valor booleano (ou `true` ou `false`) e deverá receber **APENAS** 1 valor como parâmetro da sua função.

Devemos começar com os Quarks que devem responder alguma pergunta simples, por exemplo:

- isEmpty
- isString
- isNumber
- isDate
- isBool
- etc

Nesse caso o padrão de módulo para esse tipo de Quark é:

```js
'use strict';

module.exports = (value) => {
  if (validação) return true;
  return false;
}
```

Como esses Quarks serão usados como validação sempre iniciaremos retornando `false`, pois caso passe por todos os testes que o validem como verdadeiro a função acabará chegando ao seu final para retornar `false`, com isso **invalidando** o valor passado.

Vamos pegar o exemplo do `isEmpty`:

```js
'use strict';

module.exports = (value) => {
  if (value === null || value === undefined || value === '') return true;
  return false;
}
```

Mas podemos refatorar esse código dessa forma:

```js
// isEmpty
'use strict';

module.exports = (value) => {
  const isNull = (value === null);
  const isUndefined = (value === undefined);
  const isEmpty = (value === '');
  if (isNull || isUndefined || isEmpty) return true;
  return false;
}
```

Agora podemos criar Quarks mais *complexos* reusando esse Quark toda vez que precisemos garantir que um valor não seja nem `null` nem `undefined` nem `''`, ou seja, praticamente em todos os Átomos que definam `required: true`.

Vamos criar, como exemplo, o Quark `isNotEmptyMoney` que além de testar se não é vazio também deve verificar se o valor é maior que `0`, pois se for `0` será nossa definição de `dinheiro vazio`:

```js
'use strict';

module.exports = (value) => {
  // validação base
  const validated = require('./isEmpty')(value)
  if (validated) return true;
  // validação se é Number
  // validação se maior que 0
  return false;
};
```

Você deve se perguntar: por que 2 validações ali sendo que poderia ser 1 só?

Tudo bem agora eu lhe respondo com outra pergunta:

> Quando vc vai validar o valor de qualquer campo numérico, o que você **SEMPRE** terá que fazer?
> - Validar se é numérico

Pronto ta aí sua resposta. :p

Então sabemos que para adicionar outra validação basta fazer a mesma coisa da validação `isEmpty`:

```js
'use strict';

module.exports = (value) => {
  // validação base
  let isEmpty = require('./isEmpty')(value)
  if (isEmpty) return false;
  // validação se é Number
  // validação se maior que 0
  isNumber = require('./isNumber')(value)
  if(!isNumber) return false;
  if(value > 0) return true;
  return false;
};
```

Vizualize comigo a lógica padrão dos nossos testes:

1. **SEMPRE** testar se é vazio
2. Se for vazio já retorna `false` para não precisar testar o resto
3. Se não for você irá testar o tipo do valor
4. Se não for do tipo esperado já pode retornar `false`
5. Caso passe por esses teste você irá validar a regra de negócio
6. Se for verdadeira pode retornar `true`
7. Se não entrar em nenhum `if` finaliza retornando `false`

Agora adicionamos o Quark novo `isNumber` que ainda não existe, então vamos criá-lo:

```js
'use strict';

module.exports = (value) => {
  if(!isNaN(value)) return true;
  return false;
};
```

Criamos uma validação bem simples que testa se o `value` não é um `NaN`, que significa `Not a Number`, logo se for falso para `isNaN(value)` o `value` é um número, porém podemos garantir melhor com mais um teste, verificar se é um número finito:

```js
'use strict';

module.exports = (value) => {
  if(!isNaN(parseFloat(value)) && isFinite(value)) return true;
  return false;
};
```

Pronto agora temos o Quark `isNotEmptyMoney` que iremos utilizar no Quark especifico de validação do Mongoose, `isNotEmptyMoneyValidate`:

```js
'use strict';

module.exports = {
  validator: (value) => {
    return require('./isNotEmptyMoney')(value);
  }
, message: 'O valor {VALUE} não pode ser vazio e precisa ser maior que 0!'
};
```

Dessa forma separamos todas as funções reusáveis do nosso sistema, pois uma vez criada **qualquer função** deverá ser apenas usada.

### {Name}MongooseValidate

Como já visto anteriormente o padrão para o Quark de validação do Mongoose é:

```js
'use strict';

module.exports = {
  validator: (value) => {}
, message: 'O valor {VALUE} para o campo ...'
};
```

Ou seja, é apenas um objeto com 2 atributos:

- validator: função validadora
- message: mensagem de erro

Logo não precisamos criar 1 Quark com toda sua lógica dentro de `validator`, precisamos apenas chamar o Quark dessa função:

```js
'use strict';

module.exports = {
  validator: (value) => {
    return require('./isNotEmptyMoney')(value);
  }
, message: 'O valor {VALUE} não pode ser vazio e precisa ser maior que 0!'
};
```

Não se preocupe que logo mais as mensagens também virarão Quarks. ;)


## Quarks base

Depois de entender como funcionam os Quarks podemos listar alguns que sempre usaremos e que não dependem de outros, como:

- isEmpty
- isNumber
- isString
- isBoolean
- isDate

Depois deles podemos listar alguns Quarks específicos para campos:

- isUserID
- isName
- isEmail
- isDateOfBirth
- isPhone
  + isPhoneDDD
  + isPhoneNumber
- isCPF
- isCPNJ
- isAddress
  + isAddressType //logradouro
  + isAddressName
  + isAddressNumber
  + isAddressCEP
  + isAddressCity
  + isAddressState
  + isAddressCountry

Todos eles usarão os Quarks base internamente.

## Testes

Como devemos testar nossos Quarks?

Para isso vamos utilizar o Chai com `expect` que foi ensinado [na aula 9](https://www.youtube.com/watch?v=OCB7jMZBIas).

Vamos entender como escrever 1 teste com ele:

```js
'use strict';

const expect = require('chai').expect;
const valueTRUE = 'Suissa';
const valueFALSE = 1;

describe('isString', () => {
  describe('é String',  () => {
    it('testando: "'+valueTRUE+'"', () => {
      expect(require('./isString')(valueTRUE)).to.equal(true);
    });
  });
  describe('não é String',  () => {
    it('testando: "'+valueFALSE+'"', () => {
      expect(require('./isString')(valueFALSE)).to.equal(false);
    });
  });
});
```

Então basicamente separamos nossos testes em 2:

- validado: 'é String'
- não validado: 'não é String'

```js
describe('é String',  () => {
  it('testando: '+valueTRUE, () => {
    expect(require('./isString')(valueTRUE)).to.equal(true);
  });
});
describe('não é String',  () => {
  it('testando: '+valueFALSE, () => {
    expect(require('./isString')(valueFALSE)).to.equal(false);
  });
});
```

Para rodar esse teste basta executar `mocha isString/isString.test.js`:

```
mocha isString/isString.test.js


  isString
    é String
      ✓ testando: Suissa
    não é String
      ✓ testando: 1


  2 passing (28ms)
```

Pronto ele não teve erros pois validamos nossos testes corretamente, porém testamos apenas com 1 valor e isso é ridículo né?

Então vamos agora criar um teste que valide vários valores, para fazer isso iniciamos colocando os valores verdadeiros e falsos em *arrays*:

```js
'use strict';

const expect = require('chai').expect;

const valuesTRUE = ['Suissa', '1', '', ' '];
const valuesFALSE = [null, undefined, 1, true, {}, ()=>{}];
```

Certo? Então definimos em `valuesTRUE` todos os valores possíveis que devem ser aceitos como *String* e em `valuesFALSE` todos os valores que não podem ser *String*.

Agora criamos a estrutura para os 2 testes:

```js
'use strict';

const expect = require('chai').expect;

const valuesTRUE = ['Suissa', '1', '', ' '];
const valuesFALSE = [null, undefined, 1, true, {}, ()=>{}];

describe('isString', () => {
  describe('é String',  () => {
  });
  describe('não é String',  () => {
  });
});
```

Bem simples não? Então basta fazer o que?

Criar uma função que itere sobre os valores do *array* e vá executando o `it` que é a função que irá testar realmente os valores:

```js
it('testando: '+valueTRUE, () => {
  expect(require('./isString')(valueTRUE)).to.equal(true);
});
```

Bom então sabemos que precisamos fazer 1 `it` para cada valor do *array* e obviamente não faremos isso manualmente, correto?

**Então como faremos?**

> forEach

**Mas como?**

Dessa forma:

```js
valuesTRUE.forEach( function(element, index) {
  it('testando: '+element,  () => {
    expect(require('./isString')(element)).to.equal(true);
  });
});
```

Percebeu que ele irá criar 1 `it` dinamicamente para cada item do *array* `valuesTRUE`?

Agora basta juntarmos tudo para ficar assim:

```js
'use strict';

const expect = require('chai').expect;

const valuesTRUE = ['Suissa', '1', '', ' '];
const valuesFALSE = [null, undefined, 1, true, {}, ()=>{}];

describe('isString', () => {
  describe('é String',  () => {
    valuesTRUE.forEach( function(element, index) {
      it('testando: '+element,  () => {
        expect(require('./isString')(element)).to.equal(true);
      });
    });
  });
  describe('não é String',  () => {
    valuesFALSE.forEach( (element, index) => {
      it('testando: '+element,  () => {
        expect(require('./isString')(element)).to.equal(false);
      });
    });
  });
});
```

Executando nosso teste ficará assim:

```
mocha isString/isString.test.js


  isString
    é String
      ✓ testando: Suissa
      ✓ testando: 1
      ✓ testando: 
      ✓ testando:  
    não é String
      ✓ testando: null
      ✓ testando: undefined
      ✓ testando: 1
      ✓ testando: true
      ✓ testando: [object Object]
      ✓ testando: ()=>{}


  10 passing (28ms)
```

Mas é óbvio que ainda podemos melhorar esse código refatorando-o, acompanhe comigo pois iremos separar as funções de teste dos `describe`s:

```js
'use strict';

const expect = require('chai').expect;

const valuesTRUE = ['Suissa', '1', '', ' '];
const valuesFALSE = [null, undefined, 1, true, {}, ()=>{}];

const testTRUE = (values) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./isString')(element)).to.equal(true);
    });
  });
};

const testFALSE = (values) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./isString')(element)).to.equal(false);
    });
  });
};

describe('isString', () => {
  describe('é String',  () => testTRUE(valuesTRUE));
  describe('não é String',  () => testFALSE(valuesFALSE));
});
```

**OK! Mas para que isso?**

> Ahhhhhhhh! Você ainda não notou o padrão?

Perceba essas duas funções: `testTRUE` e `testFALSE`.

Conseguiu ver o padrão agora?

> Ainda não? Então vamos analisar!

```js
const testTRUE = (values) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./isString')(element)).to.equal(true);
    });
  });
};

const testFALSE = (values) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./isString')(element)).to.equal(false);
    });
  });
};
```

Vamos retirar apenas o miolo delas:

```js
values.forEach( (element) => {
  it('testando: '+element,  () => {
    expect(require('./isString')(element)).to.equal(true);
  });
});

values.forEach( (element) => {
  it('testando: '+element,  () => {
    expect(require('./isString')(element)).to.equal(false);
  });
});
```

Agora sim você deve ter percebido que o único valor que mudou nas 2 foi... ???

> O valor que passamos para função `to.equal`!

Pronto! Agora basta mudarmos esse valor para uma variável que as 2 funções ficarão iguais:

```js
values.forEach( (element) => {
  it('testando: '+element,  () => {
    expect(require('./isString')(element)).to.equal(valueToTest);
  });
});

values.forEach( (element) => {
  it('testando: '+element,  () => {
    expect(require('./isString')(element)).to.equal(valueToTest);
  });
});
```

Aí você deve se perguntar: 

> De onde vem o valor de `valueToTest`?

Ótima pergunta! Vem pela função genérica que iremos criar:

```js
'use strict';

const expect = require('chai').expect;

const valuesTRUE = ['Suissa', '1', '', ' '];
const valuesFALSE = [null, undefined, 1, true, {}, ()=>{}];

const test = (values, valueToTest) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./isString')(element)).to.equal(valueToTest);
    });
  });
};

describe('isString', () => {
  describe('é String',  () => test(valuesTRUE, true));
  describe('não é String',  () => test(valuesFALSE, false));
});
```

Acho que agora temos um padrão bem simples e claro para utilizar em nossos testes, não?

Bom eu ainda quero refatorar mais um pouco, mas o que podemos fazer então?

Podemos ver que dentro do `describe` *master* `describe('isString'` nós **SEMPRE** teremos apenas 2 `describe`s:

```js
describe('isString', () => {
  describe('é String',  () => test(valuesTRUE, true));
  describe('não é String',  () => test(valuesFALSE, false));
});
```

Agora vamos analisar o padrão deles:

```js
const messageTRUE = 'é String';
const messageFALSE = 'não é String';

describe('isString', () => {
  describe(messageTRUE,  () => test(valuesTRUE, true));
  describe(messageFALSE,  () => test(valuesFALSE, false));
});
```

Sabemos então que o `describe` é formado de:

- mensagem para o teste
- função que executa o teste

O que precisamos fazer é criar um objeto que possa agregar toda essa lógica, por exemplo:

```js
const valuesTRUE = ['Suissa', '1', '', ' '];
const valuesFALSE = [null, undefined, 1, true, {}, ()=>{}];
const test = (values, valueToTest) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./isString')(element)).to.equal(valueToTest);
    });
  });
};
const describes = [
  {type: true, message: 'é String', test: test}
, {type: false, message: 'não é String', test: test}
];
```

Então em 1 objeto nós temos:

- type: tipo do teste
- message: mensagem do teste
- test: função de validação

Estamos usando a mesma função genérica `test` criada anteriormente e agora como faço isso funcionar com o `describe`?

Então aqui precisamos entender que não podemos fazer como no `it`, que deixamos bem genérico, em vez disso precisamos **obrigatoriamente** ter 2 `describe`s separados.

Podemos fazer da seguinte forma:

1. itere no *array* `describes`
2. teste o `type` do `describe`
3. crie o `describe` correto a partir do `type`
4. chame a função `test` corretamente

Fazendo isso nosso código ficará assim:

```js
describe('isString', () => {
  describes.forEach( (element, index) => {
    if(element.type) {
      describe(element.message,  () => {
        test(valuesTRUE, element.type);
      });
    }
    else {
      describe(element.message,  () => {
        test(valuesFALSE, element.type);
      });
    }
  });
});
```

Perceba que quando ele entrar em `if(element.type)` só entrará com o objeto com o `type=true`, nesse caso irá criar o `describe` correto para os teste que devem dar `true` e logo após no `else` cria o `describe` para os valores que devem dar `false`.

Juntando tudo isso nosso código ficou assim:

```js
'use strict';

const expect = require('chai').expect;

const valuesTRUE = ['Suissa', '1', '', ' '];
const valuesFALSE = [null, undefined, 1, true, {}, ()=>{}];
const test = (values, valueToTest) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./isString')(element)).to.equal(valueToTest);
    });
  });
};
const describes = [
  {type: true, message: 'é String', test: test}
, {type: false, message: 'não é String', test: test}
]

describe('isString', () => {
  describes.forEach( (element, index) => {
    if(element.type) {
      describe(element.message,  () => {
        test(valuesTRUE, element.type);
      });
    }
    else {
      describe(element.message,  () => {
        test(valuesFALSE, element.type);
      });
    }
  });
});
```

Agora execute ele no terminal:

```
mocha isString/isString.test.module.js


  isString
    é String
      ✓ testando: Suissa
      ✓ testando: 1
      ✓ testando: 
      ✓ testando:  
    não é String
      ✓ testando: null
      ✓ testando: undefined
      ✓ testando: 1
      ✓ testando: true
      ✓ testando: [object Object]
      ✓ testando: ()=>{}


  10 passing (16ms)
```

Agora sabe o que seria bom?

> Dar uma refatoradinha marota!

**MAS POR QUE CARAIOOOOO!!!??**

Apenas observe:

```js
'use strict';

const expect = require('chai').expect;

const test = (values, valueToTest) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./isString')(element)).to.equal(valueToTest);
    });
  });
};
const describes = [
  { type: true
  , message: 'é String'
  , test: test
  , values: ['Suissa', '1', '', ' ']
  }
, 
  { type: false
  , message: 'não é String'
  , test: test
  , values: [null, undefined, 1, true, {}, ()=>{}]
  }
]

describe('isString', () => {
  describes.forEach( (element, index) => {
    if(element.type) {
      describe(element.message,  () => {
        test(element.values, element.type);
      });
    }
    else {
      describe(element.message,  () => {
        test(element.values, element.type);
      });
    }
  });
});
```

**Ah legal você só mudou os valores para dentro do objeto e aí?**

Tente advinhar o porquê eu fiz isso!

Tá vou te ajudar.

Imagine que você quer transformar agora esse código em um módulo de testes genérico, como você faria? Que possa ser usado dessa forma:

```js
const describes = [
  { type: true
  , message: 'é String'
  , values: ['Suissa', '1', '', ' ']
  }
, 
  { type: false
  , message: 'não é String'
  , values: [null, undefined, 1, true, {}, ()=>{}]
  }
];
require('./index')('isString', describes);
```

Vou lhe falar como eu faria então.

Perceba que não tenho mais a função `test` nesse objeto pois não é da responsabilidade dele conhecer essa função, sua única responsabilidade é ter os dados necessários para testar, nossa função `test` já é genérica para funcionar sem precisar ser definida anteriormente.

Beleza então vamos criar o `testModule/testModule.js`:

```js
'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {
}
```

Agora você entenderá o porquê passamos o `testName` também, antes de refatorarmos vamos analisar a função `test`:

```js
const test = (values, valueToTest) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./isString')(element)).to.equal(valueToTest);
    });
  });
};
```

Percebeu que o únco valor definido diretamente ali é o `'./isString'`?

É exatamente por isso que passamos esse valor para nosso módulo em vez de definir manualmente, para que dessa forma ele possa funcionar com qualquer outro módulo.

Então nossa função refatorada fica assim:

```js
const test = (values, valueToTest) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./../'+testName+'/'+testName)(element)).to.equal(valueToTest);
    });
  });
};
```

Claro que precisamos definir um padrão de pastas para que funcione sem problemas, mas isso é assunto para outra aula :p

Depois disso basta colocar o `testName` no primeiro `describe` e pronto!

```js
'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  const test = (values, valueToTest) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        expect(require('./../'+testName+'/'+testName)(element)).to.equal(valueToTest);
      });
    });
  };

  describe(testName, () => {
    describes.forEach( (element, index) => {
      if(element.type) {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      else {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
    });
  });
};
```

Agora sim você pode testar qualquer *Quark* nosso facilmente dessa forma:

```js
'use strict';

const describes = [
  { type: true
  , message: 'é String'
  , values: ['Suissa', '1', '', ' ']
  }
, 
  { type: false
  , message: 'não é String'
  , values: [null, undefined, 1, true, {}, ()=>{}]
  }
];
require('./testModule')('isString', describes);
```

**BEM MELHOR AGORA NÃO??!!**

Que bom pois esse é o nosso padrão para testes!

Agora chegamos a um impasse, sabe porquê?

### Testes diferentes

Sim imagine que nossa função a ser testada não receba apenas 1 valor, mas sim 2!

Vou pegar um exemplo nosso, o `isInArray`.

```js
'use strict';

module.exports = (value, list) => {

  const isIn = require('./createIsIn')(list)

  const validated = isIn(value);
  if (validated) return true;

  return false;
};
```

Que usa o `createIsIn`:

```js
'use strict';

module.exports = (list) => (value) => !(list.indexOf(value) === -1);
```

> Por que o isInArray recebe 2 valores e não apenas 1 como os outros?

Bom é bem simples, primeiro você precisa entender o que é o `isIn`.

Ele é basicamente uma lista de valores onde para um valor ser aceito ele **precisa obrigatoriamente** existir nessa lista.

Ou seja, para testarmos essa funcionalidade precisamos passar o valor a ser testado e a lista de valores aceitáveis, correto?

Por isso estamos o `createIsIn` que irá receber essa lista, no caso o *array* e irá retornar um valor **booleano** caso o `value` exista em alguma posição de `list`.

Como a função `indexOf` irá retornar a posição em que encontrou o `value` e caso não encontre ele retorna `-1`, por isso testamos se o resultado é igual a `-1`, pois se ele não achar e for igual a `-1` irá resultar em verdadeiro certo?

Por isso que **negamos** esse resultado com `!` para que retorne verdadeiro apenas se esse teste `ist.indexOf(value) === -1` for falso. Simples não?

Com isso podemos usar o retorno desse módulo para validar se um valor se encontra no *array*:

```js
const isIn = require('./createIsIn')(list)

const validated = isIn(value);
if (validated) return true;
```

Mas se você perceber passamos apenas o `list` para esse módulo então como ele consegue testar o `value`?

Analise comigo o `createIsIn`:

```js
module.exports = (list) => (value) => !(list.indexOf(value) === -1);
```

Esse código diz que meu módulo é uma função que recebe `list` como parâmetro para ele ser construido:

```js
module.exports = (list) => {};
```

E essa funçao irá retornar **outra função** que recebe `value` como parâmetro:

```js
(value) => !(list.indexOf(value) === -1)
```

Por isso usamos o módulo dessa forma, primeiramente passando o `list` e recebendo uma função para depois usar essa função passando o `value`:

```js
const isIn = require('./createIsIn')(list)

const validated = isIn(value);
if (validated) return true;
```

Mas não vamos parar por aí, vamos dar aquela refatorada de sempre. :p

Analisando nosso código conseguimos perceber que se o `validated` for `true` ele irá retornar `true` e se for `false` ele não entra no `if` e vai direto para o `return false`.

Sabendo disso refatoramos o código assim:

```js
module.exports = (value, list) => {

  const isIn = require('./createIsIn')(list)

  return isIn(value);
};
```

**Certo?**

Então olha o que ainda podemos fazer com esse maravilhoso JavaScript:

```js
module.exports = (value, list) => {
  return require('./createIsIn')(list)(value);
};
```

**Loco não?**

Pois é aprenderemos mais sobre [Currying](https://github.com/Webschool-io/workshop-js-funcional-free#currying) no módulo sobre JS Funcional logo após o módulo de ES6!

> Só faltou só fazermos o **teste mais básico desse módulo!**

**Qual seria?**

Pense comigo, se o módulo testa se um valor está no *array* então o que ele deve testar antes de verificar se o valor existe no *array*?

**Duas coisas:**

- não é vazio?
- é *array*?

Então bora colocar esses testes no módulo `isInArray`:

```js
module.exports = (value, list) => {
  const isEmptyValue = require('./../isEmpty/isEmpty')(value);
  const isEmptyArray = require('./../isEmpty/isEmpty')(list);
  const isArray = require('./../isArray/isArray')(list);

  if(!isEmptyValue && !isEmptyArray && isArray)
    return require('./createIsIn')(list)(value);
  return false;
};
```

Bom o `isEmpty` já conhecemos porém estamos usando o `isArray` que ainda não existe, logo precisamos criá-lo:

```js
module.exports = (value) => {
  return (value instanceof Array);
}
```

**Super simples né?**

Agora podemos fazer esse teste simples com o `isArray`:

```js
const assert = require('assert');

const valueTRUE = [1, 2];
const valueFALSE = '1';

assert.equal(true, require('./isArray')(valueTRUE));
assert.equal(false, require('./isArray')(valueFALSE));

console.log(valueTRUE + ' é um Array?', require('./isArray')(valueTRUE));
console.log(valueFALSE + ' é um Array?', require('./isArray')(valueFALSE));
```

Podemos agora voltar ao `isInArray` para ver como usamos esse módulo:

```js
const assert = require('assert');

const list = ['suissa', 'itacir'];
const valueTRUE = 'suissa';
const valueFALSE = 'pitchulo';

assert.equal(true, require('./isInArray')(valueTRUE, list));
assert.equal(false, require('./isInArray')(valueFALSE, list));
```

Agora levando para o nosso conceito mais genérico precisamos nos ater ao segundo parâmetro `list` e pensar então como podemos passar esses valores na forma que aprendemos.

Podemos fazer o seguinte, adicionar o `list` no nosso *array* `describes`:

```js
'use strict';

const describes = [
  { list: ['suissa', 'itacir'] }
, { type: true
  , message: 'é ENUM'
  , values: ['suissa', 'itacir']
  }
, { type: false
  , message: 'não é ENUM'
  , values: [null, undefined, 1, true, {}, ()=>{}]
  }
];
require('./testModuleCreate')('isInArray', describes);
```

Perceba que estou usando um módulo diferente, o `testModuleCreate`, pois precisaremos modificar o nosso `testModule` e para não dar merda preferi criar um novo.

A primeira coisa que devemos fazer é a lógica do `list`:

```js
'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  const list = describes.splice(0,1);
};
```

O que fizemos ali em cima foi retirar o primeiro elemento do *array* `describes` que é onde está nosso `list`, porém olhe só o resultado de `describes.splice(0,1)`:

```js
[ { list: [ 'suissa', 'itacir' ] } ]
```

Isso acontece porque o `splice` nos retorna um *array* com os elementos retirados, então vamos ajeitar essa função para pegar apenas:

```js
[ 'suissa', 'itacir' ]
```

Você já deve ter imaginado como né? Isso mesmo assim:

```js
'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  const list = describes.splice(0,1)[0].list;
};
```

Onde `describes.splice(0,1)[0]` irá pegar o primeiro elemento do *array* retornado e depois acessamos a propriedade `list` com `describes.splice(0,1)[0].list`.

Beleza após isso precisamos modificar apenas o `require` do módulo pois precisamos adicionar o parâmetro `list` dessa forma:

```js
const list = describes.splice(0,1)[0].list;
const test = (values, valueToTest) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      expect(require('./../'+testName+'/'+testName)(element, list)).to.equal(valueToTest);
    });
  });
};
```

Ou seja, modificamos apenas essas partes para que o módulo aceite um tipo de teste diferente, ficando assim:

```js
'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  const list = describes.splice(0,1)[0].list;
  const test = (values, valueToTest) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        let validated = require('./../'+testName+'/'+testName)(element, list);
        expect(validated).to.equal(valueToTest);
      });
    });
  };

  describe(testName, () => {
    describes.forEach( (element, index) => {
      if(element.type) {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      else {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      if(element.list) return true;
    });
  });
};

```

Bom você com certeza deve se perguntar:

> Bah teve que criar outro módulo só por causa dessa modificação?

Teve apenas para facilitar nossa visualização do padrão, você já percebeu qual é?

**Simples!**

Em um módulo ele não trabalha com o `list` e no outro trabalha, então precisamos criar uma lógica para que possamos trabalhar com apenas 1 módulo.

**Basta fazer o que?**

Vamos inciar com um simples `if/else`:

```js
let test = () => {};

if(describes[0].list) {
  const list = describes.splice(0,1)[0].list;
  test = (values, valueToTest) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        let validated = require('./../'+testName+'/'+testName)(element, list);
        expect(validated).to.equal(valueToTest);
      });
    });
  };
}
else {
  test = (values, valueToTest) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        let validated = require('./../'+testName+'/'+testName)(element);
        expect(validated).to.equal(valueToTest);
      });
    });
  };
} 
```

Porém não precisamos desse `else`, consegue ver como ficará?

Assim:

```js
let test = (values, valueToTest) => {
  values.forEach( (element) => {
    it('testando: '+element,  () => {
      let validated = require('./../'+testName+'/'+testName)(element);
      expect(validated).to.equal(valueToTest);
    });
  });
};

if(describes[0].list) {
  const list = describes.splice(0,1)[0].list;
  test = (values, valueToTest) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        let validated = require('./../'+testName+'/'+testName)(element, list);
        expect(validated).to.equal(valueToTest);
      });
    });
  };
}
```

**Entendeu o porquê retiramos o `else`?**

Porque definimos a função `test` com o seu padrão no início e depois só sobrescrevemos ela caso o `describes` possua `list` no nosso padrão de objeto.

Pronto com isso finalizamos esse módulo genérico de testes para nossos Quarks.

```js
'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {
  let test = (values, valueToTest) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        let validated = require('./../'+testName+'/'+testName)(element);
        expect(validated).to.equal(valueToTest);
      });
    });
  };
  if(describes[0].list) {
    const list = describes.splice(0,1)[0].list;
    test = (values, valueToTest) => {
      values.forEach( (element) => {
        it('testando: '+element,  () => {
          let validated = require('./../'+testName+'/'+testName)(element, list);
          expect(validated).to.equal(valueToTest);
        });
      });
    };
  }

  describe(testName, () => {
    describes.forEach( (element, index) => {
      if(element.type) {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      else {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      if(element.list) return true;
    });
  });
};

```

Para testar um *Quark is* você fará assim:

```js
const describes = [
  { type: true
  , message: 'é String'
  , values: ['Suissa', '1', '', ' ']
  }
, 
  { type: false
  , message: 'não é String'
  , values: [null, undefined, 1, true, {}, ()=>{}]
  }
];
require('./testModuleGeneric')('isString', describes);
```

Para testar um *Quark isIn* você fará assim:

```js
const describes = [
  { list: ['suissa', 'itacir'] }
, { type: true
  , message: 'está array'
  , values: ['suissa', 'itacir']
  }
, { type: false
  , message: 'não está array'
  , values: ['vai corintia!', null, undefined, 1, true, {}, ()=>{}]
  }
];
require('./testModuleGeneric')('isInArray', describes);
```

### testModuleGenereic

Nós já iniciamos a refatoração desse módulo para aceitar também o teste do *Quark isIn* porém ainda temos os testes para o *Quark to*, como faremos para adicionar mais esse teste?

Primeiramente vamos criar o *array* `describes` que devemos passar para o *Quark*:

```js
const describes = [
  { type: true
  , message: 'to LOWER'
  , values: ['Suissa', 'Itacir']
  , valuesExpected: ['suissa', 'itacir']
  }
, { type: false
  , message: 'não to LOWER'
  , values: ['Suissa', 'Itacir']
  , valuesExpected: ['Suissa', 'Itacir']
  }
];
```

Percebeu que adicionei o *array* `valuesExpected`?

Ele funciona como um espelho do *array* `values` que são os valores que irão entrar no *Quark*, sendo cada cada valor de `valuesExpected` o valor esperado após a transformação.

**Você SEMPRE deve colocar a mesma quantidade de elementos nos 2 *arrays*!**

Para depois chamar assim:

```js
require('./testModuleGeneric')('toLowerCase', describes);
```

Mas é óbvio que esse teste não irá funcionar pois ainda não criamos a lógica para ele em `testModuleGeneric`, se executarmos esse teste seu resultado será:

```

  toLowerCase
    to LOWER
      1) testando: Suissa
      2) testando: Itacir
    não to LOWER
      3) testando: Suissa
      4) testando: Itacir


  0 passing (70ms)
  4 failing

  1) toLowerCase to LOWER testando: Suissa:
     AssertionError: expected 'suissa' to equal true
      at Context.<anonymous> (testModule/testModuleGeneric.js:10:30)

  2) toLowerCase to LOWER testando: Itacir:
     AssertionError: expected 'itacir' to equal true
      at Context.<anonymous> (testModule/testModuleGeneric.js:10:30)

  3) toLowerCase não to LOWER testando: Suissa:
     AssertionError: expected 'suissa' to equal false
      at Context.<anonymous> (testModule/testModuleGeneric.js:10:30)

  4) toLowerCase não to LOWER testando: Itacir:
     AssertionError: expected 'itacir' to equal false
      at Context.<anonymous> (testModule/testModuleGeneric.js:10:30)

```

Isso acontece porque ele está testando os valores transformados com o valor de `describes type` e nós queremos que ele teste com os valores de `valuesExpected`, **então como faremos isso?**

Primeiramente precisamos testar qual o tipo de teste iremos executar, para isso iremos testar o tipo pelo nome do teste, pois o mesmo deve indicar seu tipo.

Para testar esse valor iremos usar o `indexOf` para verificar se o prefixo do teste `to` existe no `testName`:

```js
let test = (values, valueToTest) => {
  if(testName.indexOf('to') > -1){
    
  }
  else {
    values.forEach( (element, index) => {
      it('testando: '+element,  () => {
        let validated = require('./../'+testName+'/'+testName)(element);
        expect(validated).to.equal(valueToTest);
      });
    });
  }
};
```

Tudo bem e agora o que colocamos dentro do `if`?

A mesma coisa do `else`?

**CLARO QUE NÃO NÉ!!!**

Vamos atacar primeiramente a lógica do `forEach`:

```js
 values.forEach( (element, index) => {
  it('testando: '+element,  () => {
    let validated = require('./../'+testName+'/'+testName)(element);
    expect(validated).to.equal(valueToTest);
  });
});
```

Devemos então criar uma lógica para que dentro do `forEach` ele consiga testar o retorno de `validate` contra o valor correto em `valuesExpected`:

```js
values.forEach( (element, index) => {
  it('testando: '+element+' com '+valueConverted,  () => {

    let validated = require('./../'+testName+'/'+testName)(element);
    if(valueToTest) expect(validated).to.equal(VALOR_ESPERADO);

  });
});

```

Sabemos que o `VALOR_ESPERADO` é um *array* com essa estrutura:

```js
['suissa', 'itacir']
```

Sabendo que nosso primeiro teste sempre será verdadeiro, podemos tentar isso:

```js
values.forEach( (element, index) => {
  it('testando: '+element,  () => {
    let validated = require('./../'+testName+'/'+testName)(element);
    console.log('valueToTest', valueToTest);
    console.log('validated', validated);
    console.log('valuesExpected', describes[0].valuesExpected[index]);
    if(valueToTest) expect(validated).to.equal(describes[0].valuesExpected[index]);
  });
});

```

Se você rodar esse teste resultará nisso:

```js
    to LOWER
valueToTest true
validated suissa
valuesExpected suissa
      ✓ testando: Suissa
valueToTest true
validated itacir
valuesExpected itacir
      ✓ testando: Itacir
    não to LOWER
valueToTest false
validated suissa
valuesExpected suissa
      ✓ testando: Suissa
valueToTest false
validated itacir
valuesExpected itacir
      ✓ testando: Itacir


  4 passing (17ms)
```

Todos os testes passaram mesmo estando errado porque ele está testando `validated` com `valuesExpected` sendo que o `validate` possui o valor transformado e como estamos estando apenas o teste verdadeiro, logo ele sempre dará `true`.

Para resolver esse problema precisamos antes de tudo separar os teste de verdadeiro e falso, para isso entenda como a função `test` é chamada dentro do `describes.forEach`:

```js
describes.forEach( (element, index) => {
  if(element.type) {
    describe(element.message,  () => {
      test(element.values, element.type);
    });
  }
  else {
    describe(element.message,  () => {
      test(element.values, element.type);
    });
  }
  if(element.list) return true;
});
```

O valor `element.values` que é passados para a função `test` é o *array* `values` do *array* `describes` e o segundo parâmetro `element.type` é `true` ou `false` apenas.

Sabendo disso podemos definir de qual *array* iremos testar os valores definindo qual o índice dele dessa forma:

```js
let valuesExpectedIndex = 0; //verdadeiro
if(!valueToTest) valuesExpectedIndex = 1; //falso
```

Pois o valor de `valueToTest` será OU `true` OU `false`, então definimos que o `valuesExpectedIndex` será `0`, porém se `valueToTest` for `false` definimos `valuesExpectedIndex` como `1` pois é seu índice em `describes`.

**Agora precisamos resolver a lógica de qual valor será transformado.**

```js
let valueConverted = 0;
values.forEach( (element, index) => {
  valueConverted = describes[valuesExpectedIndex].valuesExpected[index];
  console.log('valueConverted', valueConverted);
});
```

Conferindo nossos valores:

```
valueConverted suissa
valueConverted itacir
valueConverted Suissa
valueConverted Itacir
```

Ok já conseguimos pegar os valores corretos agora vamos para  teste propriamente dito:

```js
if(valueToTest) expect(validated).to.equal(describes[0].valuesExpected[index]);
```

Com esse código testamos apenas o teste verdadeiro, então fica fácil criar o teste falso:

```js
if(valueToTest) expect(validated).to.deep.equal(describes[valuesExpectedIndex].valuesExpected[index]);
else expect(validated).to.deep.not.equal(describes[valuesExpectedIndex].valuesExpected[index]);
```

Usamos o `to.deep.not.equal` pois testamos o `validated`, que é nosso valor transformado, com o valor de `valuesExpected` que não estão em *lowerCase*.

Deixando nosso `if` desse tipo de teste assim:

```js
if(testName.indexOf('to') > -1){

  let valuesExpectedIndex = 0;
  if(!valueToTest) valuesExpectedIndex = 1;
  let valueConverted = 0;
  values.forEach( (element, index) => {
    valueConverted = describes[valuesExpectedIndex].valuesExpected[index];
    it('testando: '+element+' com '+valueConverted,  () => {
      let validated = require('./../'+testName+'/'+testName)(element);

      if(valueToTest) expect(validated).to.deep.equal(describes[valuesExpectedIndex].valuesExpected[index]);

      else expect(validated).to.deep.not.equal(describes[valuesExpectedIndex].valuesExpected[index]);

    });
  });

}
```

O código todo ficou assim:

```js
'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {
  let test = (values, valueToTest) => {
    if(testName.indexOf('to') > -1){

      let valuesExpectedIndex = 0;
      if(!valueToTest) valuesExpectedIndex = 1;
      console.log('values', values)
      let valueConverted = 0;
      values.forEach( (element, index) => {
        valueConverted = describes[valuesExpectedIndex].valuesExpected[index];
        console.log('valueConverted', valueConverted);
        it('testando: '+element+' com '+valueConverted,  () => {
          let validated = require('./../'+testName+'/'+testName)(element);
          if(valueToTest) expect(validated).to.deep.equal(describes[valuesExpectedIndex].valuesExpected[index]);
          else expect(validated).to.deep.not.equal(describes[valuesExpectedIndex].valuesExpected[index]);

        });
      });

    }
    else {
      values.forEach( (element, index) => {
        it('testando: '+element,  () => {
          let validated = require('./../'+testName+'/'+testName)(element);
          expect(validated).to.equal(valueToTest);
        });
      });
    }
  };
  if(describes[0].list) {
    const list = describes.splice(0,1)[0].list;
    test = (values, valueToTest) => {
      values.forEach( (element) => {
        it('testando: '+element,  () => {
          let validated = require('./../'+testName+'/'+testName)(element, list);
          expect(validated).to.equal(valueToTest);
        });
      });
    };
  }

  describe(testName, () => {
    describes.forEach( (element, index) => {
      if(element.type) {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      else {
        console.log('aqui começa')
        describe(element.message,  () => {
          console.log('element.values', element.values)
          console.log('element.type', element.type)
          test(element.values, element.type);
        });
      }
      if(element.list) return true;
    });
  });
};
```


Vamos testar esse módulo forçando um erro no teste falso:

```js
const describes = [
  { type: true
  , message: 'to LOWER'
  , values: ['Suissa', 'Itacir']
  , valuesExpected: ['suissa', 'itacir']
  }
, { type: false
  , message: 'não to LOWER'
  , values: ['Suissa', 'Itacir']
  , valuesExpected: ['suissa', 'Itacir']
  }
];
require('./testModuleGeneric')('toLowerCase', describes);
```

Executando-o nos retornará isso:

```
  toLowerCase
    to LOWER
      ✓ testando: Suissa com suissa
      ✓ testando: Itacir com itacir
    não to LOWER
      1) testando: Suissa com suissa
      ✓ testando: Itacir com Itacir


  3 passing (16ms)
  1 failing

  1) toLowerCase não to LOWER testando: Suissa com suissa:

      AssertionError: expected 'suissa' to not deeply equal 'suissa'
      + expected - actual


      at Assertion.assertEqual (node_modules/chai/lib/chai/core/assertions.js:485:19)
      at Assertion.ctx.(anonymous function) [as equal] (node_modules/chai/lib/chai/utils/addMethod.js:41:25)
      at Context.<anonymous> (testModule/testModuleGeneric.js:19:46)

```

Beleza nosso módulo já está OK para esse tipo de teste, mas **porra como ficou gigantesco!!!**

> Então é hora do que?

![](http://www.vemfestejar.com/Assets/Produtos/SuperZoom/kit-hora-de-aventura-gigante_635610670695592249.jpg)

> **HORA DA REFATORAÇÃO!**


Primeira coisa que devemos fazer é encapuslar as lógicas em funções.

Vamos começar pelo teste do *Quark is*:

```js
else {
  values.forEach( (element, index) => {
    it('testando: '+element,  () => {
      let validated = require('./../'+testName+'/'+testName)(element);
      expect(validated).to.equal(valueToTest);
    });
  });
}
```

Passando essa lógica para a função `testQuarkIs`:

```js
const testQuarkIs = (element, index) => {
  it('testando: '+element,  () => {
    let validated = require('./../'+testName+'/'+testName)(element);
    expect(validated).to.deep.equal(valueToTest);
  });
};
```

Deixando o `else` assim:

```js

else {
  values.forEach( (element, index) => {
    testQuarkIs(element, index);
  });
}
```

Melhorando mais um pouco:

```js
else {
  values.forEach(testQuarkIs);
}
```

**Lindão né?** 

Agora vamos para o teste do *Quark to*:

```js
if(testName.indexOf('to') > -1){

  let valuesExpectedIndex = 0;
  if(!valueToTest) valuesExpectedIndex = 1;
  let valueConverted = 0;
  values.forEach( (element, index) => {
    valueConverted = describes[valuesExpectedIndex].valuesExpected[index];
    console.log('valueConverted', valueConverted);
    it('testando: '+element+' com '+valueConverted,  () => {
      let validated = require('./../'+testName+'/'+testName)(element);
      if(valueToTest) expect(validated).to.deep.equal(describes[valuesExpectedIndex].valuesExpected[index]);
      else expect(validated).to.deep.not.equal(describes[valuesExpectedIndex].valuesExpected[index]);

    });
  });

}
```

Passamos sua lógica inicialmente para a função `itQuarkTo`:

```js
const itQuarkTo = (element, index, valueToTest, valueConverted, valuesExpectedIndex) => {
  it('testando: '+element+' com '+valueConverted,  () => {
    let validated = require('./../'+testName+'/'+testName)(element);
    if(valueToTest) expect(validated).to.deep.equal(describes[valuesExpectedIndex].valuesExpected[index]);
    else expect(validated).to.deep.not.equal(describes[valuesExpectedIndex].valuesExpected[index]);
  });
};
```

Pois dentro do `forEach` não usamos apenas `element, index` por isso ainda não podemos fazer como a função `testQuarkIs`:

```js
if(testName.indexOf('to') > -1){
  let valuesExpectedIndex = 0;
  if(!valueToTest) valuesExpectedIndex = 1;
  let valueConverted = 0;
  values.forEach((element, index) => {
    valueConverted = describes[valuesExpectedIndex].valuesExpected[index];
    itQuarkTo(element, index, valueToTest, valueConverted, valuesExpectedIndex)
  });
}
```

**Tá mas então como faremos para encapsular toda essa lógica e deixar assim?**

```js
if(testName.indexOf('to') > -1){
  testQuarkTo(values, valueToTest);
}
```

**SIMPLES!!!**

Basta encapsular a porra toda passando os mesmos parâmetros que chegam em `test`:

```js
const testQuarkTo = (values, valueToTest) => {
  let valuesExpectedIndex = 0;
  if(!valueToTest) valuesExpectedIndex = 1;
  let valueConverted = 0;
  values.forEach((element, index) => {
    valueConverted = describes[valuesExpectedIndex].valuesExpected[index];
    itQuarkTo(element, index, valueToTest, valueConverted, valuesExpectedIndex)
  });
};
```

**Ridicularmente simples né?**

Bom se fizemos isso com essa lógica podemos facilmente fazer o mesmo para o *Quark is*:

```js
const itQuarkIs = (element, index, valueToTest) => {
  it('testando: '+element,  () => {
    let validated = require('./../'+testName+'/'+testName)(element);
    expect(validated).to.deep.equal(valueToTest);
  });
};
const testQuarkIs = (values, valueToTest) => {
  values.forEach((element, index) => itQuarkIs(element, index, valueToTest));
};
```

***Mudei todos os to.equal para to.deep.equal!***

Olhe como ficou a função `test` agora:

```js
let test = (values, valueToTest) => {
  if(testName.indexOf('to') > -1){
    testQuarkTo(values, valueToTest);
  }
  else {
    testQuarkIs(values, valueToTest);
  }
};
```

Separando a verificação se o teste é do tipo `to`:

```js
let test = (values, valueToTest) => {
  let isQuarkTo = (testName.indexOf('to') > -1);

  if(isQuarkTo) testQuarkTo(values, valueToTest);
  else testQuarkIs(values, valueToTest);
};
```

Já melhorou porém ainda temos uma parte que nao refatoramos nada, o teste do tipo `isIn`:

```js
if(describes[0].list) {
  const list = describes.splice(0,1)[0].list;
  test = (values, valueToTest) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        let validated = require('./../'+testName+'/'+testName)(element, list);
        expect(validated).to.equal(valueToTest);
      });
    });
  };
}
```

Separamos inicialmente seu `it`:

```js
const itQuarkIsIn = (element, index, list, valueToTest) => {
  it('testando: '+element,  () => {
    let validated = require('./../'+testName+'/'+testName)(element, list);
    expect(validated).to.equal(valueToTest);
  });
};
```

Ficando assim:

```js
if(describes[0].list) {
  const list = describes.splice(0,1)[0].list;
  test = (values, valueToTest) => {
    values.forEach( (element, index) => {
      itQuarkIsIn(element, index, list, valueToTest);
    });
  };
}
```

Agora basta encapsular o que tem dentro da função `test`:

```js
const testQuarkIsIn = (values, valueToTest, list) => {
  values.forEach( (element, index) => {
    itQuarkIsIn(element, index, list, valueToTest);
  });
};

if(describes[0].list) {
  const list = describes.splice(0,1)[0].list;
  test = (values, valueToTest) => {
    testQuarkIsIn(values, valueToTest, list);
  };
}
```

**Vai dizer que não ficou BEM MELHOR?**

Porém olhe como está nosso módulo agora:

```js
'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  const itQuarkIs = (element, index, valueToTest) => {
    it('testando: '+element,  () => {
      let validated = require('./../'+testName+'/'+testName)(element);
      expect(validated).to.deep.equal(valueToTest);
    });
  };
  const testQuarkIs = (values, valueToTest) => {
    values.forEach((element, index) => itQuarkIs(element, index, valueToTest));
  };
  const itQuarkTo = (element, index, valueToTest, valueConverted, valuesExpectedIndex) => {
    it('testando: '+element+' com '+valueConverted,  () => {
      let validated = require('./../'+testName+'/'+testName)(element);
      if(valueToTest) expect(validated).to.deep.equal(describes[valuesExpectedIndex].valuesExpected[index]);
      else expect(validated).to.deep.not.equal(describes[valuesExpectedIndex].valuesExpected[index]);
    });
  };

  const testQuarkTo = (values, valueToTest) => {
    let valuesExpectedIndex = 0;
    if(!valueToTest) valuesExpectedIndex = 1;
    let valueConverted = 0;
    values.forEach((element, index) => {
      valueConverted = describes[valuesExpectedIndex].valuesExpected[index];
      itQuarkTo(element, index, valueToTest, valueConverted, valuesExpectedIndex)
    });
  };

  const itQuarkIsIn = (element, index, list, valueToTest) => {
    it('testando: '+element,  () => {
      let validated = require('./../'+testName+'/'+testName)(element, list);
      expect(validated).to.equal(valueToTest);
    });
  };

  let test = (values, valueToTest) => {
    let isQuarkTo = (testName.indexOf('to') > -1);

    if(isQuarkTo) testQuarkTo(values, valueToTest);
    else testQuarkIs(values, valueToTest);
  };


  const testQuarkIsIn = (values, valueToTest, list) => {
    values.forEach( (element, index) => {
      itQuarkIsIn(element, index, list, valueToTest);
    });
  };

  if(describes[0].list) {
    const list = describes.splice(0,1)[0].list;
    test = (values, valueToTest) => {
      testQuarkIsIn(values, valueToTest, list);
    };
  }

  describe(testName, () => {
    describes.forEach( (element, index) => {
      if(element.type) {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      else {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      if(element.list) return true;
    });
  });
};

```

**Parece aqueles módulos Megazord!!!**

Então precisamos fazer o que??

**REFATORAR LÓGICO!!!** :p

Vamos iniciar retirando algumas funções para módulos externos, começando pela `itQuarkIs`:

```js
const expect = require('chai').expect;

module.exports = (element, index, valueToTest, testName) => {
  it('testando: '+element,  () => {
    let validated = require('./../../'+testName+'/'+testName)(element);
    expect(validated).to.deep.equal(valueToTest);
  });
};
```

Utilizando assim:

```js
const itQuarkIs = require('./config/itQuarkIs');
const testQuarkIs = (values, valueToTest) => {
  values.forEach((element, index) => {
    itQuarkIs(element, index, valueToTest, testName)
  });
};
```

Agora vamos para o `itQuarkTo`:

```js
const expect = require('chai').expect;

module.exports = (element, index, valueToTest, valueConverted, valuesExpectedIndex, testName, describes) => {
  it('testando: '+element+' com '+valueConverted,  () => {
    let validated = require('./../../'+testName+'/'+testName)(element);
    if(valueToTest) expect(validated).to.deep.equal(describes[valuesExpectedIndex].valuesExpected[index]);
    else expect(validated).to.deep.not.equal(describes[valuesExpectedIndex].valuesExpected[index]);
  });
}
```

Perceba que preciso passar 2 parâmetros, `testName, describes`, adicionais para funcionar ficando assim sua chamada:

```js
const itQuarkTo = require('./config/itQuarkTo');
const testQuarkTo = (values, valueToTest) => {
  let valuesExpectedIndex = 0;
  if(!valueToTest) valuesExpectedIndex = 1;

  let valueConverted = 0;
  values.forEach((element, index) => {
    valueConverted = describes[valuesExpectedIndex].valuesExpected[index];
    itQuarkTo(element, index, valueToTest, valueConverted, valuesExpectedIndex, testName, describes)
  });
};
```

Agora separamos o `itQuarkIsIn`:

```js
const expect = require('chai').expect;

module.exports = (element, index, list, valueToTest, testName) => {
  it('testando: '+element,  () => {
    let validated = require('./../../'+testName+'/'+testName)(element, list);
    expect(validated).to.equal(valueToTest);
  });
};
```

Ficando assim:

```js
const itQuarkIsIn = require('./config/itQuarkIsIn');
const testQuarkIsIn = (values, valueToTest, list) => {
  values.forEach( (element, index) => {
    itQuarkIsIn(element, index, list, valueToTest, testName);
  });
};
```

Agora vem o mais complicado, iremos modularizar as funções `testQuark` começando pela `testQuarkIs`:

```js
const itQuarkIs = require('./itQuarkIs');

module.exports = (values, valueToTest, testName) => {
  values.forEach((element, index) => {
    itQuarkIs(element, index, valueToTest, testName)
  });
};

// chamada testQuarkIs(values, valueToTest, testName);
```

Agora o `testQuarkTo`:

```js
const itQuarkTo = require('./itQuarkTo');

module.exports = (values, valueToTest, testName, describes) => {
  let valuesExpectedIndex = 0;
  if(!valueToTest) valuesExpectedIndex = 1;
  let valueConverted = 0;
  values.forEach((element, index) => {
    valueConverted = describes[valuesExpectedIndex].valuesExpected[index];
    itQuarkTo(element, index, valueToTest, valueConverted, valuesExpectedIndex, testName, describes)
  });
};
```

Finalizando com o `testQuarkIsIn`:

```js
const itQuarkIsIn = require('./itQuarkIsIn');

module.exports = (values, valueToTest, list, testName) => {
  values.forEach( (element, index) => {
    itQuarkIsIn(element, index, list, valueToTest, testName);
  });
};
```

Deixando nosso código muito mais legível:

```js
'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  const testQuarkIs = require('./config/testQuarkIs');
  const testQuarkTo = require('./config/testQuarkTo');
  const testQuarkIsIn = require('./config/testQuarkIsIn');

  let test = (values, valueToTest) => {
    let isQuarkTo = (testName.indexOf('to') > -1);

    if(isQuarkTo) testQuarkTo(values, valueToTest, testName, describes);
    else testQuarkIs(values, valueToTest, testName);
  };

  if(describes[0].list) {
    const list = describes.splice(0,1)[0].list;
    test = (values, valueToTest) => {
      testQuarkIsIn(values, valueToTest, list, testName);
    };
  }

  describe(testName, () => {
    describes.forEach( (element, index) => {
      if(element.type) {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      else {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      if(element.list) return true;
    });
  });
};
```


## Mais refatoração

O código até que está legal mas eu ainda acho que dá para melhorar, então vamos lá.

Primeira coisa que iremos refatorar é chamada dos *Quarks* de teste:

```js
const testQuarkIs = require('./config/testQuarkIs');
const testQuarkTo = require('./config/testQuarkTo');
const testQuarkIsIn = require('./config/testQuarkIsIn');
```

Então vamos analisar e retirar um padrão desse código:

```js
const testQuark{TYPE} = require('./config/testQuark{TYPE}');
```

Vamos agrupar o `{TYPE}` em um *array* pois assim poderemos adicionar mais tipos de testes futuramente, então já vamos aproveitar e deixar esse array em módulo separado:

```js

module.exports = ['Is', 'IsIn', 'To'];
```

Agora vamos criar a mesma lógica da chamada dos *Quarks* porém de uma forma genérica para que ela fique aberta para expansão e fechada para modificações, remetendo ao *Open Closed Principle (OCP)* do [S.O.L.I.D.](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)).

Como já temos o *array* com os tipos de testes, iremos verificar qual é o teste requisitado, já importando seu módulo:

```js
const testTypes = require('./config/testTypesFactory');
let testQuark = null;

let findTest = (element) => {
  let regex = new RegExp(element, 'i');
  if(!!testName.match(regex)){
    testQuark = require('./config/testQuark'+element);
  }
};

testTypes.forEach(findTest);
```

Na função `findTest`, que é usada no `forEach`, eu crio uma expressão regular, `new RegExp(element, 'i')`, para verificar se esse valor existe no nome do teste,`testName`, passado para o nosso módulo.

Mas perceba que estou usando uma safadeza ali:

```js
!!testName.match(regex)
```

Isso acontece porque o resultado do `match` é esse, caso eu teste *Quark isIn*:

```js
[ 'is', index: 0, input: 'isInArray' ]
[ 'isIn', index: 0, input: 'isInArray' ]
null
```

Então se eu **NEGAR** um *array* ele irá virar `false` então se eu negar novamente ele irá virar o que?

> TRUUUUUUUUUUU!!!

![](https://cldup.com/4-iEGDbDSG-2000x2000.jpeg)

Após isso precisamos refatorar a chamada dos `testQuark{TYPE}`:

```js
let test = (values, valueToTest) => {
  let isQuarkTo = (testName.indexOf('to') > -1);

  if(isQuarkTo) testQuarkTo(values, valueToTest, testName, describes);
  else testQuarkIs(values, valueToTest, testName);
};

if(describes[0].list) {
  const list = describes.splice(0,1)[0].list;
  test = (values, valueToTest) => {
    testQuarkIsIn(values, valueToTest, list, testName);
  };
}
```

**Olhe que malandragem vai rolar agora!!!**

```js
let test = (values, valueToTest) => {
  if(isQuarkTo) testQuark(values, valueToTest, testName, describes);
  else testQuark(values, valueToTest, testName);
};
if(describes[0].list) {
  const list = describes.splice(0,1)[0].list;
  test = (values, valueToTest) => {
    testQuark(values, valueToTest, list, testName);
  };
}
```

Substituimos todas as chamadas dos testes de *Quark* para uma única função: `testQuark`.

Perceba que as funções de `testQuark` possuem interfaces diferentes remetendo a mais um princípio do S.O.L.I.D. o Princípio da Segregação da Interface.

> O princípio de segregação de interface diz o seguinte: se uma interface começa a engordar, devemos parti-la em diversas novas interfaces de tal modo que cada cliente só conheça aquilo que de fato lhe diz respeito.

*fonte: [http://www.itexto.net/devkico/?p=1105](http://www.itexto.net/devkico/?p=1105)*

**Estou citando alguns princípios de S.O.L.I.D. mesmo não estando usando OO clássica, porém estou adaptando-os.** Caso você não concorde eu agradeceria se você me explicasse o porquê.

Mas eu ainda não estou satisfeito, podemos refatorar ainda mais!

> O que você acha que podemos fazer com esse pedaço de código??

```js
const testTypes = require('./config/testTypesFactory');
let testQuark = null;

let findTest = (element) => {
  let regex = new RegExp(element, 'i');
  if(!!testName.match(regex)){
    testQuark = require('./config/testQuark'+element);
  }
};

testTypes.forEach(findTest);
```

![Acerto mizeravi](http://geradormemes.com/media/created/bd1s1x.jpg)

> Refatorar!

Então vamos refatorar o código acima para esse:

```js
let testQuark = require('./config/testFactory')(testName);
```

**Sim você não está enganado! É só isso mesmo.**

Vamos criar um *Factory* para nossos testes de *Quarks*:

```js
module.exports = (testName) => {
  let test = null;
  let findTest = (element) => {
    let regex = new RegExp(element, 'i');
    if(!!testName.match(regex)){
      test = require('./testQuark'+element);
    }
  };

  require('./testTypesFactory').forEach(findTest);
  return test;
}
```

Lembre como está nosso *array* de tipos de testes:

```js
['Is', 'IsIn', 'To']
```

Iremos seguir **SEMPRE** esse padrão do mais básico, `Is`, ao mais complexo.

Agora eu lhe pergunto:

> Analisando esse código você consegue perceber o porquê?

Lembra do resultado do `match` caso seja *Quark isIn*?

```js
[ 'is', index: 0, input: 'isInArray' ]
[ 'isIn', index: 0, input: 'isInArray' ]
null
```

Notou que se tivermos um teste `isIn` ele também da o `match` com `is`?

Porém sabemos que se vier o `isIn` é ele que queremos, por isso fizemos assim no *Factory*:

```js
if(!!testName.match(regex)){
  test = require('./testQuark'+element);
}
```

Dessa forma **sempre** retornaremos o último teste válido.

Nosso módulo de testes genéricos para os *Quarks* ficou assim:

```js
'use strict';

const expect = require('chai').expect;

module.exports = (testName, describes) => {

  let testQuark = require('./config/testFactory')(testName);

  let test = (values, valueToTest) => {
    if(isQuarkTo) testQuark(values, valueToTest, testName, describes);
    else testQuark(values, valueToTest, testName);
  };
  if(describes[0].list) {
    const list = describes.splice(0,1)[0].list;
    test = (values, valueToTest) => {
      testQuark(values, valueToTest, list, testName);
    };
  }

  describe(testName, () => {
    describes.forEach( (element, index) => {
      if(element.type) {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      else {
        describe(element.message,  () => {
          test(element.values, element.type);
        });
      }
      if(element.list) return true;
    });
  });
};
```

**Saímos de um módulo de 78 linhas para um de 35!**
