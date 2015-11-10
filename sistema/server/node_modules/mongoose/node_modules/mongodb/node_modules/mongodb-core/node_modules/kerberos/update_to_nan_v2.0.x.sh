#!/bin/bash

replacements=(
  "NanAsyncWorker/Nan::AsyncWorker"
  "NanAsyncQueueWorker/Nan::AsyncQueueWorker"
  "NanCallback/Nan::Callback"
  "NanSetInternalFieldPointer/Nan::SetInternalFieldPointer"
  "NanGetInternalFieldPointer/Nan::GetInternalFieldPointer"
  "NanNewBufferHandle\\(([^;]+);/Nan::NewBuffer(\\1.ToLocalChecked();"
  "(NanNew(<(v8::)?String>)?\\(\"[^\"]*\"\\))/\\1.ToLocalChecked()"
  "(NanNew<(v8::)?String>\\([^\"][^\;]*);/\\1.ToLocalChecked();"
  "NanNew/Nan::New"
  "NODE_SET_PROTOTYPE_METHOD/Nan::SetPrototypeMethod"
  "NODE_SET_METHOD/Nan::SetMethod"
  "_NAN_METHOD_ARGS_TYPE/Nan::NAN_METHOD_ARGS_TYPE"
  "(\\W)?args(\\W|\\.|\\[)/\\1info\\2"
  "(^|\\s)(v8::)?Persistent/\\1Nan::Persistent"
  "NanAssignPersistent(<\w+>)?\\(([^,]+),\\s*([^)]+)\\)/\\2.Reset(\\3)"
  "NanDisposePersistent\\(([^\\)]+)\\)/\\1.Reset()"
  "NanReturnValue/info.GetReturnValue().Set"
  "NanReturnNull\\(\\)/info.GetReturnValue().Set(Nan::Null())"
  "NanScope\\(\\)/Nan::HandleScope\ scope"
  "NanEscapableScope\\(\\)/Nan::EscapableHandleScope scope"
  "NanEscapeScope/scope.Escape"
  "NanReturnUndefined\\(\\);/return;"
  "NanUtf8String/Nan::Utf8String"
  "NanObjectWrapHandle\\(([^\\)]+)\\)/\\1->handle()"
  "(node::)?ObjectWrap/Nan::ObjectWrap"
  "NanMakeCallback/Nan::MakeCallback"
  "NanNull/Nan::Null"
  "NanUndefined/Nan::Undefined"
  "NanFalse/Nan::False"
  "NanTrue/Nan::True"
  "NanThrow(\w+)?Error/Nan::Throw\\1Error"
  "NanThrowTypeError/Nan::ThrowTypeError"
  "NanError/Nan::Error"
  "NanGetCurrentContext/Nan::GetCurrentContext"
  "([a-zA-Z0-9_]+)->SetAccessor\\(/Nan::SetAccessor(\\1, "
  "NanAdjustExternalMemory/Nan::AdjustExternalMemory"
  "NanSetTemplate/Nan::SetTemplate"
  "NanHasInstance\\(([^,]+),\\s*([^)]+)\\)/Nan::New(\\1)->HasInstance(\\2)"
)

os=`uname`
if [ $os == 'Darwin' ];
then sed_flag='-E'
else sed_flag='-r'
fi

for file in "$@"; do
  echo $file
  for replacement in "${replacements[@]}"; do
    cat $file | sed $sed_flag "s/${replacement}/g" > $file.$$ && mv $file.$$ $file
  done
done
