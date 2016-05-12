# Model

//aula 14
## ng-model-options

Permite o ajuste como as atualizações do *Model* será feito. Usando `ngModelOptions` você pode especificar uma lista personalizada de eventos que irão desencadear uma atualização do *Model* e/ou um atraso, *debouncing*,  para que a atualização real só ocorra quando um *timer* expirar.

Dada a natureza do `ngModelOptions`, o valor exibido nos `inputs` na *View* pode ser diferente do valor no modelo atual. Isto significa que se você atualizar o modelo você também deve chamar `$rollbackViewValue` no `input`, a fim de se certificar de que está sincronizado com o *Model*.

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


### $rollbackViewValue