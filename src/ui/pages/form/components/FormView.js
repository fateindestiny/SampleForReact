import React from 'react';
import Form from '../../../components/Form';
import {RippleButton} from '../../../components/Button';
import {FormattedMessage, useIntl} from 'react-intl';
import InputWrapper from '../../../components/InputWrapper';
import TextArea from '../../../components/TextArea';
import {isEmpty} from 'lodash';

const MIN_LENGTH = 10;
const FormView = ({onSubmitHandler}) => {
  const {formatMessage} = useIntl();
  return (
    <Form onSubmit={onSubmitHandler}>
      <ul>
        <li style={{marginTop: '10px', padding: '5px'}}>
          <label htmlFor="email">
            <FormattedMessage id={'common.email'} />{' '}
            <span style={{color: 'red', fontSize: '14px'}}>
              (
              <FormattedMessage id={'common.required'} />
              ).
            </span>
          </label>
          <InputWrapper
            style={{
              height: '30px',
              width: '100%',
              paddingLeft: '5px',
              paddingRight: '5px',
              borderBottom: '1px solid blue',
            }}
            required
            validateProps={{
              required: formatMessage({id: 'formSample.requiredEmail'}),
              validate: value =>
                /^[\w][a-zA-Z0-9'+-./,()!#%\s]+@[a-zA-Z0-9'+-./,()!#%\s]+$/g.test(
                  value,
                ) || formatMessage({id: 'formSample.invalidEmail'}),
            }}
            name="email"
            type="text"
          />
        </li>
        <li style={{marginTop: '10px', padding: '5px'}}>
          <label htmlFor="userName">
            <FormattedMessage id={'common.name'} />
          </label>
          <InputWrapper
            style={{
              height: '30px',
              width: '100%',
              paddingLeft: '5px',
              paddingRight: '5px',
              borderBottom: '1px solid blue',
            }}
            name="userName"
            type="text"
          />
        </li>
        <li style={{marginTop: '10px', padding: '5px'}}>
          <label htmlFor="description">
            <FormattedMessage id={'common.description'} />
          </label>
          <TextArea
            name="description"
            style={{
              height: '50px',
              width: '100%',
              marginTop: '5px',
              border: '1px solid darkBlue',
            }}
            validateProps={{
              validate: value =>
                isEmpty(value) ||
                value.length > MIN_LENGTH ||
                formatMessage(
                  {id: 'formSample.descMinLength'},
                  {min: MIN_LENGTH},
                ),
            }}
          />
        </li>
        <li style={{marginTop: '10px'}}>
          <RippleButton type="submit">
            <FormattedMessage id={'common.submit'} />
          </RippleButton>
        </li>
      </ul>
    </Form>
  );
};

export default React.memo(FormView);
