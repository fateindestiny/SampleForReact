import {FormattedMessage} from 'react-intl';
import {Swiper, SwiperSlide} from 'swiper/react';
import ItemView from './components/ItemView';
import {observer} from 'mobx-react-lite';

import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

const list = [
  {
    title: 'swiper item 1',
    bgColor: '#ff0',
  },
  {
    title: 'swiper item 2',
    bgColor: '#0f0',
  },
  {
    title: 'swiper item 3',
    bgColor: '#f0f',
  },
  {
    title: 'swiper item 4',
    bgColor: '#0ff',
  },
];
const SwiperContainer = () => {
  return (
    <div className="wrap">
      <p className="title">
        <FormattedMessage id={'swiperSample.subPageTitle'} />
      </p>
      <div
        style={{
          height: '100vh',
          marginTop: '10px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}>
        <Swiper
          style={{height: '180px'}}
          modules={[Pagination]}
          pagination={{dynamicBullets: true}}
          spaceBetween={10}
          slidesPerView={1}>
          {list.map((item, index) => (
            <SwiperSlide key={`swiper-item-${index}`}>
              <ItemView data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default observer(SwiperContainer);
