import React from 'react';

export const AntvChart = ({renderChart, data, dataType }) => {
    const chartRef = React.useRef();
  
    React.useEffect(() => {
      let chart;
      if (typeof renderChart === 'function' && chartRef.current) {
        const { clientWidth, clientHeight } = chartRef.current;
        chart = renderChart({
          container: chartRef.current,
          width: clientWidth,
          height: clientHeight,
          data: data,
          dataType:dataType
        });
      }
      return () => {
        chart?.destroy();
      };
    }, [renderChart]);
  
    return (
        <div ref={chartRef} />
    );
  };
  