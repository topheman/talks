import React from 'react';

import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

const BarChart = ({
  data: data = [],
  width: width = 400,
  barHeight: barHeight = 20,
  barColor: barColor = 'blue',
  textColor: textColor = 'white'
}) => {
  const x = scaleLinear()
    .domain([0, max(data)])
    .range([0, width]);

  return (
    <svg className="chart" width={width} height={barHeight * data.length}>
      {
        data.map((n, i) =>
          <g key={i} transform={`translate(0,${barHeight*i})`}>
            <rect width={x(n)} height={barHeight-1} fill={barColor}></rect>
            <text x={x(n)-12} y="9.5" dy=".35em" fill={textColor} style={{fontSize: '60%'}}>{n}</text>
          </g>
        )
      }
    </svg>
  );
}

export default BarChart;
