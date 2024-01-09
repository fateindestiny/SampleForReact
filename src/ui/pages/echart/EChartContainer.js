import {FormattedMessage} from 'react-intl';
import StackedAreaChartView from './components/StackedAreaChartView';
import StackedColumnChartView from './components/StackedColumnChartView';
import GaugeView from './components/GaugeView';
import ShareDataSetView from './components/ShareDataSetView';

const EChartContainer = () => {
  return (
    <div className="wrap">
      <p className="title">
        <FormattedMessage id={'eChartSample.subPageTitle'} />
      </p>
      <ul>
        <li style={{padding: '10px'}}>
          <p>Stacked area chart</p>
          <StackedAreaChartView />
        </li>
        <li style={{padding: '10px', borderTop: '1px solid blue'}}>
          <p>Stacked column chart</p>
          <StackedColumnChartView />
        </li>
        <li style={{padding: '10px', borderTop: '1px solid blue'}}>
          <p>Gauge chart</p>
          <GaugeView />
        </li>
        <li style={{padding: '10px', borderTop: '1px solid blue'}}>
          <p>Share chart data</p>
          <ShareDataSetView />
        </li>
      </ul>
    </div>
  );
};
export default EChartContainer;
