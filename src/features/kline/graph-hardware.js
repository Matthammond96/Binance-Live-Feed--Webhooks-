import React, { useEffect, useRef } from 'react'
import data from '../../store/data.json' 
import * as d3 from 'd3'

export function KlineGraphHardware () { 
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    var margin = {top: 20, right: 20, bottom: 30, left: 100},
    width = canvas.width - margin.left - margin.right,
    height = canvas.height - margin.top - margin.bottom;

    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
      return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
    }

    var line = d3.line()
      .x(d => x(d.date))
      .y(d => scaleBetween(d.close, height, 0, 0, 70000))
      .curve(d3.curveStep)
      .context(context);

    context.translate(margin.left, margin.top);

    const series = data.map((i) => ({date: new Date(i[0]), close: i[4]}))

    x.domain(d3.extent(series, function(d) { return d.date; }));
    y.domain(d3.extent(series, function(d) { return d.close; }));


    xAxis();
    // yAxis();

    context.beginPath();
    line(series);
    context.lineWidth = 1.5;
    context.strokeStyle = "steelblue";
    context.stroke();
 

    function xAxis() {
      var tickCount = 10,
        tickSize = 6,
        ticks = x.ticks(tickCount),
        tickFormat = x.tickFormat();
  
      context.beginPath();
      ticks.forEach(function(d) {
        context.moveTo(x(d), height);
        context.lineTo(x(d), height + tickSize);
      });
      context.strokeStyle = "black";
      context.stroke();
  
      context.textAlign = "center";
      context.textBaseline = "top";

      ticks.forEach(function(d) {
        context.fillText(tickFormat(d), x(d), height + tickSize);
      });
    }
  
    function yAxis() {
      var tickCount = 10,
        tickSize = 1,
        tickPadding = 3,
        ticks = y.ticks(tickCount),
        tickFormat = y.tickFormat(tickCount);
  
      context.beginPath();
      ticks.forEach(function(d) {
        context.moveTo(0, y(d));
        context.lineTo(-6, y(d));
      });
      context.strokeStyle = "black";
      context.stroke();
  
      context.beginPath();
      context.moveTo(-tickSize, 0);
      context.lineTo(0.5, 0);
      context.lineTo(0.5, height);
      context.lineTo(-tickSize, height);
      context.strokeStyle = "black";
      context.stroke();
      
      context.textAlign = "right";
      context.textBaseline = "middle";
      ticks.forEach(function(d) {
        context.fillText(tickFormat(d), -tickSize - tickPadding, y(d));
      });
  
      context.save();
      context.restore();
    }


  }, [])

  return (   
    <div name="graph" className="graph">
      <canvas ref={canvasRef} width={800} height={600} />
    </div>
  )
}