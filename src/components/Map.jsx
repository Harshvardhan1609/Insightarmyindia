import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        rotate: [-0.0, 20.0, -20],
        center: [80,10.0, 0.0],
        scale: 2000,
      }}
    >
      <Geographies
       geography="https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json"
        fill="black"
        stroke="white"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[9565,92]}
        dx={90000}
        dy={94000}
        connectorProps={{
          stroke: "black",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Jodhpur"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
