import React, {useEffect, useMemo} from 'react';
import {useFormContext} from 'react-hook-form';

const Input = ({name, required, validateProps, onChange, ...restProps}) => {
  const {register, unregister} = useFormContext();

  const newValidate = useMemo(() => {
    const newProps = {...validateProps};
    if (required) {
      if (!newProps.required) {
        newProps.required = 'Required value';
      }
    }

    return newProps;
  }, [validateProps, required]);

  const {
    name: rgName,
    onBlur,
    ref,
    onChange: onChangeHandler,
  } = register(name, newValidate);

  useEffect(() => {
    return () => {
      console.log('unmount');
      unregister(name);
    }
  }, []);

  return (
    <input
      onChange={event => {
        onChangeHandler(event);
        if (onChange) {
          onChange(event);
        }
      }}
      name={rgName}
      ref={ref}
      onBlur={onBlur}
      {...restProps}
    />
  );
};

export default React.memo(Input);
