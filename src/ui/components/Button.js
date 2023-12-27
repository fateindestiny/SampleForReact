import styled, {css} from 'styled-components';
import Ripples from 'react-ripples';

export const SampleButton = styled.button`
  width: 100%;
  height: 30px;
`;

const SampleRippleWrapper = styled(Ripples)`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    ${props =>
            props.marginTop &&
            css`
                margin-top: ${props.marginTop};
            `};
    ${props =>
            props.marginBottom &&
            css`
                margin-bottom: ${props.marginBottom};
            `};
`;

export const RippleButton = ({children, wrapperStyle, ...restProps}) => {
  return (
    <SampleRippleWrapper {...{color: '#999', during: 1000}} {...restProps}>
      <SampleButton>{children}</SampleButton>
    </SampleRippleWrapper>
  );
};
