import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

const Form = ({onSubmit, onReset, children, ...restProps}) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        onSubmit={methods.handleSubmit(onSubmit)}
        onReset={() => {
          methods.reset();
          if (onReset) {
            onReset();
          }
        }}
        {...restProps}>
        {Array.isArray(children)
          ? children.map(child => {
              return child.props?.name
                ? React.createElement(child.type, {
                    ...{
                      ...child.props,
                      register: methods.register,
                      key: child.props.name,
                    },
                  })
                : child;
            })
          : children}
      </form>
    </FormProvider>
  );
};

export default React.memo(Form);
