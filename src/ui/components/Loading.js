import {observer} from 'mobx-react-lite';
import {Portal} from 'react-portal';
import {useStore} from '../../hooks';
import {useEffect, useRef} from 'react';
import {FormattedMessage} from 'react-intl';

const LoadingContainer = ({onClickDismissLoading}) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1002,
      }}>
      Loading...
      <p>
        <button onClick={onClickDismissLoading}>
          <FormattedMessage id={'loadingSample.dismissLoading'} />
        </button>
      </p>
    </div>
  );
};

export default observer(() => {
  const {
    portalStore: {isOpen},
    sampleStore: {dismissLoading},
  } = useStore();

  // 로딩시 뒷 컨텐츠 화면이 스크롤 되는 것을 막기 위한 용도.
  const bodyEl = useRef();
  useEffect(() => {
    console.log('loading : ', isOpen, bodyEl);
    if (!bodyEl.current) {
      bodyEl.current = document.querySelector('body');
    }
    if (bodyEl.current) {
      bodyEl.current.style.overflow = isOpen ? 'hidden' : 'unset';
    }
  }, [isOpen, bodyEl.current]);

  return (
    <>
      {isOpen && (
        <Portal>
          <LoadingContainer onClickDismissLoading={() => dismissLoading()} />
        </Portal>
      )}
    </>
  );
});
