import EChartsReact from 'echarts-for-react';
import {useCallback, useEffect, useRef} from 'react';

const option = {
  legend: {},
  tooltip: {
    trigger: 'axis',
    showContent: false,
  },
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
      ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
      ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
      ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
      ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
    ],
  },
  xAxis: {type: 'category'},
  yAxis: {gridIndex: 0},
  grid: {top: '55%'},
  series: [
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: {focus: 'series'},
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: {focus: 'series'},
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: {focus: 'series'},
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: {focus: 'series'},
    },
    {
      type: 'pie',
      id: 'pie',
      radius: '30%',
      center: ['50%', '25%'],
      emphasis: {
        focus: 'self',
      },
      label: {
        formatter: '{b}: {@2012} ({d}%)',
      },
      encode: {
        itemName: 'product',
        value: '2012',
        tooltip: '2012',
      },
    },
  ],
};

const ShareDataSetView = () => {
  const chartRef = useRef();

  useEffect(() => {
    console.log(chartRef.current);
    if (chartRef.current) {
      console.log('chartRef current:', chartRef.current);
      // console.log('test:', chartRef.current.ele.addEventListener);
      // chartRef.current.ele.addEventListener('updateAxisPointer', event => {
      //   console.log('updateAxisPointer:', event);
      // });
    }
  }, [chartRef]);

  const updateAxisPointerHandler = useCallback(
    event => {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        chartRef.current?.getEchartsInstance()?.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)',
            },
            encode: {
              value: dimension,
              tooltip: dimension,
            },
          },
        });
      }
    },
    [chartRef.current],
  );

  return (
    <div style={{marginTop: '20px'}}>
      <EChartsReact
        style={{height: '400px'}}
        ref={chartRef}
        option={option}
        onEvents={{
          updateAxisPointer: updateAxisPointerHandler,
        }}
      />
    </div>
  );
};

export default ShareDataSetView;
