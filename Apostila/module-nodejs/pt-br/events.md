# Events

Muitos objetos do Node.js são capazes de emitir eventos, ou seja, eles são “Eventemitters”. Um exemplo é o net.Server, ele pode emitir eventos todas as vezes em que recebe uma nova requisição ou quando termina o processo de uma, o fs.Stream emite eventos toda vez que trabalha com um arquivo, todos objetos que emitem eventos no Node.js são instâncias de events.EventEmitter, esse módulo pode ser acessado através do módulo “require(‘events’)”.

Tradução Livre from (https://nodejs.org/docs/latest/api/events.html#events_events).

Eventos podem ser nominados de acordo com a necessidade de cada função, contudo eles seguem um padrão para emissão (emit) e escuta (listener) de eventos, quanto a transmisão de eventos chama-se a função obj.emit(“event:name”, “action”), para ouvir  um evento chama-se a função obj.on(“event:name”, “action”). Esse padrão se repete em vários locais do mundo javascript, inclusive em frameworks de frontend, como o angularJS.

Vamos ver o primeiro exemplo mais básico de um EventEmiter, onde o primeiro passo será criar um arquivo.js e requerir o módulo events. O Código 01 é um módulo simples que escuta dois eventos, o primeiro evento registrado é o “time:event” e o segundo “mod:three”.


### Código 01
```js
'use strict';

const events  = require('events');
const em      = new events.EventEmitter();

em.on("time:event", timeEvent);
em.on("mod:three", mod3Event);

function timeEvent(interval) {
	console.log('timeEvent '+interval);
}

function mod3Event(mod3) {
	console.log('3 mod %s === 0 ',mod3);
}

module.exports = em;
```
Os eventos criados no código 01, seguem um padrão simples, onde um nome é criado para o evento, e em seguida uma função de callback é executada, transmitindo um poder muito grande ao código do Node.js. Existem maneiras mais interessantes para se usar eventos, e com o tempo fica claro como vários módulos do npm usam a classe events para melhorar seus feedbacks.

Pois bem, o código 02 é onde o módulo de eventos será usado para fechar essa ideia de events emitter, mostrando uma forma simples de como ele funciona.

###  Código 02
```js
'use strict';

const em  = require('./events');

setInterval(( function() {
			let i = 1;
			return function () {
				if(i % 3 === 0) {
					em.emit('mod:three',i++);
				} else {
					em.emit('time:event', i++);
				}
			};
})(),1000);
```
Esse código é muito simples, feito apenas para fins demonstrativos, sobre a criação básica de um EventEmitter. O próximo exemplo é um caso de uso mais efetivo, onde será extendido o comportamento do EventEmiter para um módulo criado pelo desenvolvedor, ou seja, assim como o próprio Node.js usa essa boa prática de emitir eventos em várias classes internas, nós desenvolvedores podemos extender esse comportamento, através de herança.

Será usado o módulo require(‘util’), presente no core do Node.js, para nos ajudar a fazer a herança, e transformar um simples módulo chamado User, em um EventEmiter. O código 03 dá início ao módulo.

###  Código 03
```js
'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User () {
	EventEmitter.call(this);
}

util.inherits(User, EventEmitter);

module.exports = User;
```
Ok, essa é uma forma básica para criar um módulo, que pode emitir e escutar eventos, pois bem agora esse módulo terá um comportamento simples, que receberá dados de um usuário, e ao chamar a sua função save(), ele emitirá um evento(‘save:user’, sendEmail) caso tudo corra bem, esse evento chamará em seu callback uma função que simula o envio de um email, caso contrário emitirá um erro(‘error’,err), que em seu callback chamará uma função que levantará um erro. Vejamos agora o código 04.

###  Código 04
```js
“use strict”;

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User (data) {
	this.data = data;
	this.on('user:save', sendMail);
	this.on('error', sendError);
	EventEmitter.call(this);
}


User.prototype.save = function () {  
	if(this.data.name){
		this.emit('user:save',this.data);
	}
	else {
		this.emit('error', new TypeError('User need an name'));
	}
};

util.inherits(User, EventEmitter);

function sendMail(user) {
	user.pass = Math.floor(Math.random() * (1000000 - 900000)) + 900000;
	util.log(`\n
			\tOla ${user.name}!
			\tbem vindo seu pass é ${user.pass}
			\tvocê tem 24 horas para muda-lo
			\tou tera que pedir reenvio\n`
			);
}

function sendError(err) {
	throw err;
}

module.exports = User;
```
O módulo User, possui algumas particularidades que devem ser explicadas, como o uso do módulo “util”, com ele pode-se fazer muitas coisas legais como herança, inspeção de objetos, logs entre outros. Vale a pena verificar sua documentação em: https://nodejs.org/api/util.html

Essa foi uma breve intrudução a eventos no nodeJS. Agora iremos aprender a usar eventos nos models do mongoose, pois todo model do mongoose é um evento Emitter, ele possui alguns eventos padrões, muito úteis para melhorar a arquitetura de um sistema.

Conhecendo o evento “pre” e “post” do mongoose, veja um model no código 05. Esse model pode executar tarefas antes e/ou quando for executar alguma função, como: save, create, find ou ou  qualquer função interna.

###  Código 05

```js
'use strict';
const mongoose = require('mongoose');
const util = require('util');

function pokemonHandler () {
	let Schema = mongoose.Schema;
	const ObjectId = Schema.ObjectId;         

	const schema = new Schema({
			id          : ObjectId,
			name        : {type : String, trin : true},
			type        : {type : String, trin : true},
			attack      : {type : Number},
			defence     : {type : Number},
			height      : {type : Number},
			description : {type : String, trin : true}
});

schema.pre('find',function (next) {
		this.start = Date.now();
		util.log("finding ...");
		next();
});

schema.post('find', function(result) {
		setTimeout(function(){
				console.log('finding end :P')
				},1000);
		});
	return mongoose.model('Pokemon', schema);
}
module.exports = exports = pokemonHandler();
```

Primeiramente, veremos como funciona o evento “pre”. Basicamente ele é um middleware, que é chamado antes da sua função ser chamada. No exemplo, entretanto, o argumento next() deve ser sempre chamado para que sua função seja executada como o esperado, ou seja, o “pre” KKKK será chamado antes do save, ok?

O evento “post” é muito sugestivo, pois possui exatamente o comportamento de execução posterior, na sua chamada não existe necessidade de usar next() lembre-se disso.	No exemplo do model no código 05, ele será executado 1 segundo após a execução da função find, ou seja, essas duas funções “pre” e “post” são muito úteis e devem ser usadas sempre que necessário.


