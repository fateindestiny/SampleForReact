import React from 'react';
import Input from './Input';
import {useFormContext} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import styled from 'styled-components';

const ErrorMessageForm = styled.p`
  color: red;
`;

const InputWrapper = ({name, isShowError = true, ...restProps}) => {
  const {
    formState: {errors},
  } = useFormContext();
  return (
    <>
      <Input name={name} {...restProps} />
      {isShowError && (
        <ErrorMessage errors={errors} name={name} as={ErrorMessageForm} />
      )}
    </>
  );
};

export default React.memo(InputWrapper);
