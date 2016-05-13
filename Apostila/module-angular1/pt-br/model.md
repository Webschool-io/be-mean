# Model

//aula 14
## ng-model-options

Permite o ajuste como as atualizações do *Model* será feito. Usando `ngModelOptions` você pode especificar uma lista personalizada de eventos que irão desencadear uma atualização do *Model* e/ou um atraso, *debouncing*,  para que a atualização real só ocorra quando um *timer* expirar.


### updateOn

Vamos atualizar o *Model* com `updateOn`, queremos que o nosso modelo seja atualizado somente depois que o usuário remover o foco do `input`, então iremos definir `ng-model-options="{ updateOn: 'blur' }"`:

```html
<input
  type="text"
  ng-model="nome"
  ng-model-options="{ updateOn: 'blur' }">
<p>Olá {{nome}}!</p>
```

Isso faz com que o modelo não atualize imediatamente após cada tecla pressionada, ele só deve atualizar quando o `input` dispara um evento `onBlur`.

> Por que isso é interessante tio Suissa?

É interessante caso você esteja utilizando uma busca, via AJAX sem um botão para essa ação, apenas na digitação do usuário, nesse caso cada letra irá atualizar o *Model* que se estiver sendo assistido, `$watch`, irá enviar 1 *request* novo para o servidor, com `{ updateOn: 'blur' }` isso só acontecerá quando o usuário sair do campo, evento `blur`.


### debounce

O `debounce` é um atraso na atualização do *Model*, em milissegundos, para ocorrer esseefeito usamos: `ng-model-options="{ debounce: 1000 }".

Por exemplo:

```html
<div>
  <input type="text" name="name" ng-model-options="{ debounce: 1000 }" data-ng-model="User.form.name">
</div>
```

### default

Se nós queremos atualizar o *Model* além dos eventos predefinidos podemos usar um evento especial chamado `default`. O código a seguir atualiza o *Model*, sempre que um usuário digitar, demorando 3 segundo, ou quando acontece o `blur`, esse sendo instantâneo pois foi definido com 0.

```html
ng-model-options="{ updateOn: 'default blur', debounce: {'default': 3000, 'blur': 0} }
```

### Exercício

Criar em cima desse exemplo mais 3 exemplos com outro eventos não mostrados na aula e outros valores.