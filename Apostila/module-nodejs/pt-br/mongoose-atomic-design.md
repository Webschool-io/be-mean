## Atomic Design

Essa estrutura que eu utilizo é baseada no [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) que utilizo no *front-end*, porém eu modifiquei um pouco essa metodologia para adicionar a parte de **Comportamento** para que eu pudesse extender ela com novas funcionalidades.

[Essa palestra está gravada aqui na InfoQ](http://www.infoq.com/br/presentations/atomic-design-behavior).

Nesse caso cada átomo possuirá um comportamento padrão que pode ser sobrescrito quando adicionado em uma molécula, também podendo mudar quando adicionado em um organismo.

Então vamos entender quais são suas partes.

### Átomo

O Átomo é a menor parte indivisível do Mongoose.

**Sabe qual é?**

![](https://media.giphy.com/media/uwZhzLqlV0cZq/giphy.gif)

Como visto anteriormente a parte *indivisível* da nossa arquitetura é o *Field* o qual possui seus atributos, os quais podem ser [quarks](http://nomadev.com.br/atomic-design-b%C3%B3sons-e-quarks-extended/).

Vamos analisar o *Field* `name`:

```js
const _get = (v) => v.toUpperCase();
const _set = (v) => v.toLowerCase();
const _validate = (v) => v.length > 3;

const Field = {
    type: String
  , get: _get
  , set: _set
  , validate: [_validate, 'Nome precisa ser maior que 3 caracteres']
  , required: true
  , index: true
}

module.exports = Field;
```

#### Quarks

Levando isso em consideração podemos dizer que as partes que formam nosso átomo são os quarks:

- type
- get
- set
- validate
- required
- index

Vamos refatorar o código, para reorganizar e refatorar o `validate` para objeto:

```js
// quarks
const quark_get = (v) => v.toUpperCase();
const quark_set = (v) => v.toLowerCase();
const quark_validate = {
        validator: (v) => v >= 3
      , message: 'Nome {VALUE} precisa ser maior que 3 caracteres'
      };

const Atom = {
  type: String
, get: quark_get
, set: quark_set
, validate: quark_validate
, required: true
, index: true
}

module.exports = Atom;
```

Vamos separar em arquivos os quarks que são funções ou objetos, pois podemos reaproveitá-las futuramente:

```js
// quark-toUpper.js
module.exports = (v) => v.toUpperCase();
```

```js
// quark-toLower.js
module.exports = (v) => v.toLowerCase();
```

```js
// quark-validate-string-lengthGTE3
module.exports = {
  validator: (v) => v >= 18
, message: 'Nome {VALUE} precisa ser maior que 3 caracteres'
};
```

Com isso o arquivo do átomo ficou assim:

```js
const Atom = {
  type: String
, get: require('./../quarks/quark-toUpper')
, set: require('./../quarks/quark-toLower')
, validate: require('./../quarks/quark-validate-string-lengthGTE3')
, required: true
, index: true
}

module.exports = Atom;
```

### Molécula

Sabendo que o *Field* é o Átomo logicamente a Molécula será o *Schema*, então vamos utilizar o seguinte *Schema*:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  name: require('./fields/field-name')
}

module.exports = new Schema(Molecule);
```

### Organismo

Para finalizar esse conceito o o Organismo será o *Model*:

```js
const url = require('url');
const querystring = require('querystring');
const Schema = require('./schema');
const User = mongoose.model('User', Schema);

const callback = (err, data, res) => {
    if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};

const getQuery = (_url) => {
  const url_parts = url.parse(_url);
  return querystring.parse(url_parts.query);
};

const create = (req, res) => {

  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const obj = querystring.parse(queryData);
    User.create(obj, (err, data) => callback(err, data, res));
  });
};

const find = (req, res) => {
  const query = getQuery(req.url);
  User.find(query, (err, data) => callback(err, data, res));
};

const findOne = (req, res) => {
  const query = getQuery(req.url);
  User.findOne(query, (err, data) => callback(err, data, res));
};

const update = (req, res) => {
  let queryData = '';

  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const mod = querystring.parse(queryData);
    const query = getQuery(req.url);
    User.update(query, mod, (err, data) => callback(err, data, res));
  });
};

const remove = (req, res) => {
  const query = getQuery(req.url);
  User.remove(query, (err, data) => callback(err, data, res));
};

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;
```

Como o Organismo possui seu próprio comportamento(*Behavior*), podemos separar suas funções desse arquivo ficando:

```js
'use strict';

const mongoose = require('mongoose');
const url = require('url');
const querystring = require('querystring');
const Schema = require('./schema');
const User = mongoose.model('User', Schema);

const callback = (err, data, res) => {
    if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};

const getQuery = (_url) => {
  const url_parts = url.parse(_url);
  return querystring.parse(url_parts.query);
};

const create = require('./actions/action-create');
const find = require('./actions/action-find');
const findOne = require('./actions/action-findOne');
const update = require('./actions/action-update');
const remove = require('./actions/action-remove');

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;
```

Porém perceba que as *Actions* necessitam do `callback`e do `getQuery`, por isso vamos separá-los também:

```js
// action-get-query-http.js
module.exports = (_url) => {
  return require('querystring').parse(require('url').parse(_url).query);
};
```

```js
// action-response-200-json.js
module.exports = (err, data, res) => {
    if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};
```

Agora as *Actions* do *Field* ficam assim:

```js
// action-create.js
const callback = require('./action-response-200-json');

module.exports = (Model) => {
  return (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const obj = require('querystring').parse(queryData);
      Model.create(obj, (err, data) => callback(err, data, res));
    });
  };
};
```

```js
// action-find.js
const callback = require('./action-response-200-json');
const getQuery = require('./action-get-query-http');

module.exports = (Model) => {
  return (req, res) => {
    const query = getQuery(req.url);
    Model.find(query, (err, data) => callback(err, data, res));
  };
};
```

```js
// action-findOne
const callback = require('./action-response-200-json');
const getQuery = require('./action-get-query-http');

module.exports = (Model) => {
  return (req, res) => {
    const query = getQuery(req.url);
    Model.findOne(query, (err, data) => callback(err, data, res));
  };
};
```

```js
// action-update
const callback = require('./action-response-200-json');
const getQuery = require('./action-get-query-http');

module.exports = (Model) => {
  return (req, res) => {
    let queryData = '';

    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const mod = require('querystring').parse(queryData);
      const query = getQuery(req.url);
      Model.update(query, mod, (err, data) => callback(err, data, res));
    });
  };
};
```

```js
// action-remove
const callback = require('./action-response-200-json');
const getQuery = require('./action-get-query-http');

module.exports = (Model) => {
  return (req, res) => {
    const query = getQuery(req.url);
    User.remove(query, (err, data) => callback(err, data, res));
  };
};
```

Logo atomizamos as 4 funções do CRUD para que possa ser reaproveitado em todos nossos futuros sistemas.

Agora o Organismo ficou assim:

```js
require('./db/config');
const mongoose = require('mongoose');
const Schema = require('./schema');
const Model = mongoose.model('User', Schema);

// Precisa passar o Model para as ações
const create = require('./actions/action-create')(Model);
const find = require('./actions/action-find')(Model);
const findOne = require('./actions/action-findOne')(Model);
const update = require('./actions/action-update')(Model);
const remove = require('./actions/action-remove')(Model);

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;
```

**Muito melhor não?**

![](https://media.giphy.com/media/LYDNZAzOqrez6/giphy.gif)