import React from 'react';
import { Scene, LineLayer, PointLayer, CanvasLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
// import { mapData } from '../../mock-data';

export const Maps = ({ mapData }) => {
  const sceneRef = React.useRef();
  const asyncFetch = (url) => {
    return new Promise((resolve) => {
      try {
        fetch(url)
          .then((res) => res.json())
          .then((data) => resolve(data));
      } catch (err) {
        resolve([]);
      }
    });
  };

  const fetchData = React.useCallback(async () => {
    const fetchUrlList = [
      'https://gw.alipayobjects.com/os/basement_prod/40ef2173-df66-4154-a8c0-785e93a5f18e.json',
    ];
    const res = await Promise.allSettled(
      fetchUrlList.map((url) => asyncFetch(url)),
    );
    if (res.length) {
      initMap(res.map((item) => item.value));
    }
  }, []);

  React.useEffect(() => {
    fetchData();
    return () => {
      sceneRef.current?.destroy();
    };
  }, [fetchData]);

  const initMap = () => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        // style: 'light',
        mapStyle: "amap://styles/fresh",
        // style: 'light',
        center: [110, 30],
        zoom: 3,
      }),
    });

    sceneRef.current = scene;

    const dotPoint = new PointLayer({ zIndex: 2 })
    .source(mapData)
    .shape('circle')
    // .color('#00FFFF')
    .color('#93420A')
    .animate(true)
    .size(30);

    scene.addLayer(dotPoint);

    const canvasLayer = new CanvasLayer({}).style({
      drawingOnCanvas: (option) => {
        const { size, ctx } = option;
        const [width, height] = size;

        ctx.clearRect(0, 0, width, height);
        // canvas 绘制

        ctx.font = '48px Microsoft YaHei';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';

        // ctx.fillText('诗仙的人生足迹', width / 2, height - 80);
      },
    });
    scene.addLayer(canvasLayer);
  };

  return (
    <div id="map"></div>
  );
};
