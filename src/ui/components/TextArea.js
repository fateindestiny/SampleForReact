import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import {ErrorMessage} from '@hookform/error-message';
import {ErrorMessageForm} from './CommonView';

const TextArea = ({name, isShowError = true, validateProps, ...restProps}) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={validateProps}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <TextareaAutosize
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            minRows={10}
            maxRows={20}
            {...restProps}
          />
        )}
      />
      {isShowError && (
        <ErrorMessage name={name} errors={errors} as={<ErrorMessageForm />} />
      )}
    </>
  );
};

export default React.memo(TextArea);
