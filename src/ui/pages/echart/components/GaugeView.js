import EChartsReact from 'echarts-for-react';

const option = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%',
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      progress: {
        show: true,
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}',
      },
      data: [
        {
          value: 50,
          name: 'SCORE',
        },
      ],
    },
  ],
};

const GaugeView = () => {
  return (
    <div style={{marginTop: '20px'}}>
      <EChartsReact option={option} />
    </div>
  );
};

export default GaugeView;
