# Model

//aula 14
## ngModelOptions

Permite o ajuste como as atualizações do *Model* será feito. Usando `ngModelOptions` você pode especificar uma lista personalizada de eventos que irão desencadear uma atualização do *Model* e/ou um atraso, *debouncing*,  para que a atualização real só ocorra quando um *timer* expirar.

Dada a natureza do `ngModelOptions`, o valor exibido nos `inputs` na *View* pode ser diferente do valor no modelo atual. Isto significa que se você atualizar o modelo você também deve chamar `$rollbackViewValue` no `input`, a fim de se certificar de que está sincronizado com o *Model*.

### updateOn

Vamos atualizar o *Model* com `updateOn`

we want our model to be updated only after the user removed the focus of our input element, we can simply do so by applying the ngModelOptions with the following configuration:

```html
<input
  type="text"
  ng-model="nome"
  ng-model-options="{ updateOn: 'blur' }">
<p>Olá {{nome}}!</p>
```


### $rollbackViewValue