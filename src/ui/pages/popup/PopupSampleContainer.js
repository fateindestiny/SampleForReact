import {FormattedMessage} from 'react-intl';
import {SampleButton} from '../../components/Button';
import ConfirmPopup from '../../components/popup/ConfirmPopup';
import {useMemo, useState} from 'react';
import {useStore} from '../../../hooks';

const PopupSampleContainer = () => {
  const {
    modalStore: {setIsOpenGlobalPopup, setGlobalPopupContent},
  } = useStore();
  const [isOpenConfirmPopup, setIsOpenConfirmPopup] = useState(false);
  const confirmPopupBtnList = useMemo(() => {
    return [
      {
        labelId: 'common.confirm',
        type: 'confirm',
        onClick: () => {
          setIsOpenConfirmPopup(false);
        },
      },
      {
        labelId: 'common.cancel',
        type: 'cancel',
        onClick: () => {
          setIsOpenConfirmPopup(false);
        },
      },
    ];
  }, []);
  const globalPopupContent = {
    type: 'confirm',
    props: {
      title: 'Global popup sample title',
      children: <FormattedMessage id={'popupSample.globalPopupMessage'} />,
      btnList: [
        {
          type: 'confirm',
          labelId: 'common.confirm',
          onClick: () => {
            setIsOpenGlobalPopup(false);
          },
        },
      ],
      isOpen: true,
    },
  };

  return (
    <div className={'wrap'}>
      <div>
        <p className={'title'}>
          <FormattedMessage id={'popupSample.subPageTitle'} />
        </p>
        <SampleButton
          style={{
            marginTop: '10px',
          }}
          onClick={() => {
            setGlobalPopupContent(globalPopupContent);
            setIsOpenGlobalPopup(true);
          }}>
          Global Popup
        </SampleButton>
        <SampleButton
          style={{
            marginTop: '10px',
          }}
          onClick={() => setIsOpenConfirmPopup(true)}>
          Confirm Popup
        </SampleButton>
      </div>
      <ConfirmPopup
        isOpen={isOpenConfirmPopup}
        title={'Confirm Popup Sample Title'}
        btnList={confirmPopupBtnList}>
        Confirm Popup Sample Message
      </ConfirmPopup>
    </div>
  );
};

export default PopupSampleContainer;
