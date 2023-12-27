import BasePopup from './BasePopup';
import styled from 'styled-components';
import {isEmpty} from 'lodash';
import {FormattedMessage} from 'react-intl';

const PopupTitleWrapper = styled.div`
    display: flex;
    font-size: 20px;
    padding: 10px;
`;
const PopupContentWrapper = styled.div`
    display: flex;
    font-size: 14px;
    padding: 10px;
`;
const PopupButtonListWrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
`;
const PopupButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    z-index: 11;
    background: ${props => (props.type === 'confirm' ? 'dodgerblue' : '#999')};
    color: ${props => (props.type === 'confirm' ? '#fff' : '#000')};
`;

const ConfirmPopup = ({
  isOpen,
  btnList,
  onAfterOpen,
  closeModal,
  title,
  children,
  ...restProps
}) => {
  return (
    <BasePopup
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      closeModal={closeModal}
      {...restProps}>
      {isEmpty(title) ? <></> : <PopupTitleWrapper>{title}</PopupTitleWrapper>}
      <PopupContentWrapper>{children}</PopupContentWrapper>
      <PopupButtonListWrapper>
        {btnList.length > 0 &&
          btnList.map((item, index) => (
            <PopupButtonWrapper
              key={`Confirm-popup-btn-${index}`}
              type={item.type}
              onClick={item.onClick}>
              <FormattedMessage id={item.labelId} />
            </PopupButtonWrapper>
          ))}
      </PopupButtonListWrapper>
    </BasePopup>
  );
};

export default ConfirmPopup;
