const fs = require('fs');

const msgFile = "at Object.<anonymous> (/home/suissa/www/be-mean-instagram/Apostila/module-nodejs/src/mongoose/schemas/teste.js:1:80)";

var error = "module.js:341"+
"    throw err;"+
"    ^"+

"Error: Cannot find module 'mongoose'"+
"    at Function.Module._resolveFilename (module.js:339:15)"+
"    at Function.Module._load (module.js:290:25)"+
"    at Module.require (module.js:367:17)"+
"    at require (internal/module.js:16:19)"+
"    at Object.<anonymous> (/home/suissa/www/be-mean-instagram/Apostila/module-nodejs/src/mongoose/schemas/teste.js:1:80)"+
"    at Module._compile (module.js:413:34)"+
"    at Object.Module._extensions..js (module.js:422:10)"+
"    at Module.load (module.js:357:32)"+
"    at Function.Module._load (module.js:314:12)"+
"    at Function.Module.runMain (module.js:447:10)"+
";";

const AnalyzeErrorMissingModule = (ErrorMessage, ErrorType, ErrorObject, ErrorFile) => {
	// Analisa se o módulo ja foi instalado localmente
	// Analisa se existe a chamada pra o módulo no arquivo
	// Executa uma função para cada teste
	// Retorna um objeto formato com seus erros
	// Chama a função de correção
	
	Error.newFile = OpenErrorFile(ErrorFile);
	CorrectErrorFile(Error.newFile);
	const Saved = SaveErrorFile(Error.newFile);
};

const AnalyzeError = (ErrorMessage, ErrorType, ErrorObject, ErrorFile) => {
	// o type já será algo mais especifico como: MissingModule
	const type = 'MissingModule';
	switch(type){
		case 'MissingModule':
			return AnalyzeErrorMissingModule(ErrorMessage, ErrorType, ErrorObject, ErrorFile);
			break;
		default: return false;
	}
}

const ReadErrorMessage = (error) => {

	// como se tivesse lido corretamente
	const ErrorMessage = "Error: Cannot find module 'mongoose'";
	const ErrorType = ReadErrorType(ErrorMessage);
	const ErrorObject = ReadErrorObject(ErrorMessage);
	const ErrorFile = ReadErrorFile(ErrorMessage);

	AnalyzeError(ErrorMessage, ErrorType, ErrorObject, ErrorFile)
	// console.log('antes');
	// Error.newFile = OpenErrorFile(ErrorFile);
	// const Saved = SaveErrorFile(Error.newFile);
	// console.log('depois', Saved);
};

const ReadErrorType = (error) => {

	// Testando apenas erro de modulo faltante
	const types = ['Error'];
	const type_index = error.indexOf('Error: '); 
	if(type_index)
		return 'MissingModule';
	return false;

};
const ReadErrorObject = (error) => {
	return 'mongoose';
};

const ReadErrorFile = (msgFile) => {
 	const file = '/home/suissa/www/be-mean-instagram/Apostila/module-nodejs/src/mongoose/schemas/teste.js';
 	Error.path = file;
 	if(file)
 		return file;
 	return false;

};
const OpenErrorFile = (file) => {
	const _file = fs.readFileSync(file, 'UTF-8');
	// console.log('_file: ', _file);
	var newFile = CorrectErrorFile(_file);
	// var _fileNew = '' + _file;
	// console.log('open', newFile);
	return newFile;
};
const CorrectErrorFile = (_file) => {

	// Verificar antes se já nao existe essa linha que será adicionada
	// Se existir é pq o móodulo só não foi instalado
	// Nesse caso pode pular esse passo
	const module = 'mongoose';
	const correction = "const mongoose = require('"+ module +"');";

	if(_file.indexOf(correction) >= 0) {
		// não adiciona o código
		// apenas instala localmente o modulo caso esse ainda nao tenha sido instalado
		return _file;
	} 
	const FileCorrected = correction+"\r\n"+_file;
	console.log('corrigido', FileCorrected);
	return FileCorrected;
};
const SaveErrorFile = (_file) => {
	console.log('SaveErrorFile');
	console.log(Error.path);
	console.log(_file);
	fs.writeFile(Error.path, _file, (err, saved) => {
		if(err)
			return "MERDA!";
		console.log('saved');
		return true;
	});
};
const RestartServer = () => {};

const Error = (error) => {
	ReadErrorMessage
, ReadErrorType
, ReadErrorObject
, ReadErrorFile
, OpenErrorFile
, CorrectErrorFile
,	SaveErrorFile
, RestartServer
};


ReadErrorMessage(error);