import React, { useEffect, useRef } from "react";
import OrgChart from "./OrgChart";

const nodesData = [
  { id: "A", x: 100, y: 100, data: { name: "name", job_title: "Chief Commercial Officer", department: "department 1" } },
  { id: "B", x: 300, y: 100, data: { name: "name", job_title: "job_title 2", department: "department 2" } },
  { id: "C", x: 500, y: 100, data: { name: "name", job_title: "job_title 3", department: "department 3" } },
];

const templateHtml = (nodeData) =>
  `
  <div class="position-card" style="left: ${nodeData.x}px; top: ${nodeData.y}px; width: 150px;">
    <div class="position-info">
      <div>${nodeData.id}</div>
      <div class="job-title">${nodeData.data.job_title}</div>
    </div>
		<div class="position-data">
    <div>A</div><div>B</div>
    </div>
  </div>
`;

function buildNode(nodeData, templateHtml) {
  const parser = new DOMParser();
  const templateFilled = templateHtml(nodeData);
  const templateElement = parser.parseFromString(templateFilled, "text/html").querySelector(".position-card");
  const nodeElement = templateElement.cloneNode(true);
  nodeElement.style.left = `${nodeData.x}px`;
  nodeElement.style.top = `${nodeData.y}px`;
  nodeElement.style.width = `160px`;

  return nodeElement;
}

function createLine(svg, x1, y1, x2, y2) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", 2);
  svg.appendChild(line);
}

function App() {
  const chartRef = useRef(null);



  const createNodeContainer = () => {
    const chartElement = chartRef.current;
    console.log(chartElement);

    const orgChart = new OrgChart(chartElement);
    console.log("orgChart", orgChart);
  };

  /* 
  const nodeContainer = document.createElement('div');
  nodeContainer.id = 'node-container';
  chartElement.appendChild(nodeContainer);

  nodesData.forEach(nodeData => {
    const nodeElement = buildNode(nodeData, templateHtml);
    nodeContainer.appendChild(nodeElement);
  });

  //const nodeA = document.getElementById('A');
  //const nodeB = document.getElementById('B');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  document.body.appendChild(svg);
  const  x1=100, y1=100, x2=200, y2=200;
  createLine(svg, x1, y1, x2, y2);
*/
  useEffect(() => {
    createNodeContainer();
  }, []);

  return <div ref={chartRef} className="chart-container"></div>;
}

export default App;
