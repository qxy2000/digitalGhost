import React from 'react';
import { RadialBar } from '@antv/g2plot';
import bookIcon from '../assets/doubanpage/bookIcon.png'
import movieIcon from '../assets/doubanpage/movieIcon.png'
import musicIcon from '../assets/doubanpage/musicIcon.png'

// const data = [
//   { name: 'X6', star: 297 },
//   { name: 'G', star: 506 },
//   { name: 'AVA', star: 805 },
//   { name: 'G2Plot', star: 1478 },
//   { name: 'L7', star: 2029 },
//   { name: 'G6', star: 7100 },
//   { name: 'F2', star: 7346 },
//   { name: 'G2', star: 10178 },
// ];

export const ChartRadialBar = ({ container, width, height, data, dataType }) => {
  const bar = new RadialBar(container, {
        // container,
        // width,
        // height,
    // });
    // const bar = new RadialBar({
        data,
        xField: 'type',
        yField: 'num',
        maxAngle: 270, //最大旋转角度,
        radius: 0.8,
        innerRadius: 0.2,
        tooltip: {
          formatter: (datum) => {
            console.log(data)
            console.log(datum)
            return { value: datum.list };
          },
        },
        color: "#A77719",
        // colorField: 'type',
        // color: ({ type }) => {
        //   if ((type === "读过")||(type === "看过")||(type === "听过")) {
        //     return '#36c361';
        //   } else if (type === "想读")||(type === "想看")||(type === "想听")) {
        //     return '#2194ff';
        //   }
        //   return '#ff4d4f';
        // },
        barBackground: {},
        barStyle: { lineCap: 'round' },
        // annotations: [
        //     {
        //     type: 'html',
        //     position: ['50%', '50%'],
        //     html: (container, view) => {
        //         const coord = view.getCoordinate();
        //         const w = coord.polarRadius * coord.innerRadius * 1.15;
        //         if(dataType === 'Read'){
        //             return `<div style="transform:translate(-50%,-46%)">
        //                 <img width="${
        //                     (w / 203) * 231
        //                 }" height="${w}" alt="" src={bookIcon}>
        //                 </div>`;
        //         }
        //         else if(dataType == 'Watch'){
        //             return `<div style="transform:translate(-50%,-46%)">
        //                 <img width="${
        //                     (w / 203) * 231
        //                 }" height="${w}" alt="" src={movieIcon}>
        //                 </div>`;
        //         }
        //         else{
        //             return `<div style="transform:translate(-50%,-46%)">
        //                 <img width="${
        //                     (w / 203) * 231
        //                 }" height="${w}" alt="" src={musicIcon}>
        //                 </div>`;
        //         }
        //     },
        //     },
        // ],
        annotations: [
          {
            type: 'text',
            position: ['50%', '50%'],
            content: dataType,
            style: {
              textAlign: 'center',
              fontSize: 10,
            },
          },
        ],
      });
      
      bar.render();
      return bar;

      // const chartRef = React.useRef();

      // React.useEffect(() => {
      //   let chart;
      //   if (typeof renderChart === 'function' && chartRef.current) {
      //     const { clientWidth, clientHeight } = chartRef.current;
      //     chart = bar({
      //       container: chartRef.current,
      //       width: clientWidth,
      //       height: clientHeight,
      //     });
      //   }
      //   return () => {
      //     chart?.destroy();
      //   };
      // }, [bar]);
      // return (
      //   <div id="like"></div>
      // );
};
