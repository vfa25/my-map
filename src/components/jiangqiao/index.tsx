
import React from "react";
import Map from '../map';
import dataList from "./contants";

const MAP_CENTER = {
  lng: 121.347272, lat: 31.275083
};

const index = () => {
  return <Map mapData={dataList} center={MAP_CENTER}></Map>;
};

export default index;
