/*
 * @Author: 张鑫鑫 xinxin.zhang@ersoft.cn
 * @Date: 2023-08-25 11:58:37
 * @LastEditors: 张鑫鑫 xinxin.zhang@ersoft.cn
 * @LastEditTime: 2023-08-25 16:44:52
 * @FilePath: /my-map/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import {
  Map,
  APILoader,
  useMap,
  Provider,
  useMapContext,
  ScaleControl,
  NavigationControl,
  PanoramaControl,
  Label,
  Marker,
  InfoWindow,
} from "@uiw/react-baidu-map";
import { addPosUUid } from "../utils/index";
import { IClassify, IPosition } from "../types";


const Demo = ({
  mapData,
  center,
}: {
  mapData: IClassify[],
  center: { lng: number; lat: number; }
}) => {
  const dataList: IClassify[] = useMemo(() => {
    return addPosUUid([...mapData]);
  }, [mapData])
  const [posInfoWindow, setPosInfoWindow] = useState(null as null | IPosition);
  const [openInfoWindow, setOpenInfoWindow] = useState(false);

  const closeInfoWindow = useCallback(() => {
    setOpenInfoWindow(false);
    setPosInfoWindow(null);
  }, []);

  const posMarkerClick = useCallback((item: IPosition) => {
    if (posInfoWindow === item) {
      return closeInfoWindow();
    };
    setOpenInfoWindow(true);
    setPosInfoWindow(item);
  }, [posInfoWindow]);

  console.log('--posInfoWindow', posInfoWindow)
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <APILoader akay="jN6VSkisIALfb0Hhjkz9qWAiWijQZEoD">
        <Provider>
          <Map
            zoom={14}
            ref={(props) => {
              if (props && props.map) {
                // 启用滚轮放大缩小，默认禁用
                props.map.enableScrollWheelZoom();
              }
            }}
            center={center}
            widget={[
              "GeolocationControl",
              "NavigationControl",
              {
                name: "MapTypeControl",
                options: {
                  offset: {
                    width: 60,
                    height: 10,
                  },
                  isOpen: true,
                },
              },
              {
                name: "OverviewMapControl",
                options: {
                  isOpen: true,
                },
              },
            ]}
          >
            {dataList.map((classItem) => {
              return classItem.positions.map((item) => [
                <Marker
                  key="marker"
                  position={item.position}
                  type={classItem.markType}
                  onClick={() => posMarkerClick(item)}
                />,
                <Label
                  key="label"
                  visiable
                  content={item.labelContent}
                  position={item.position}
                  style={classItem.labelStyle}
                  onClick={() => posMarkerClick(item)}
                />,
              ]);
            })}

            <InfoWindow
              visiable={!!posInfoWindow}
              isOpen={openInfoWindow}
              onClose={closeInfoWindow}
              position={posInfoWindow?.position!}
              content={posInfoWindow?.infoContent || posInfoWindow?.labelContent}
              title={posInfoWindow?.infoTitle}
            />
            <ScaleControl anchor={3} offset={{width: 160, height: 10}}/>
            <PanoramaControl />
          </Map>
        </Provider>
      </APILoader>
    </div>
  );
};

export default Demo;
