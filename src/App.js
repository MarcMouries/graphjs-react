const nodesData = [
  { id: 'A', x: 100, y: 100, data : {name : "name", job_title: "Chief Commercial Officer", department: "department 1"}},
  { id: 'B', x: 300, y: 100, data : {name : "name", job_title: "job_title 2", department: "department 2"}},
  { id: 'C', x: 500, y: 100, data : {name : "name", job_title: "job_title 3", department: "department 3"}},
];

const templateHtml = (nodeData) =>
`
  <div class="position-card" style="left: ${nodeData.x}px; top: ${nodeData.y}px; width: 150px;">
    <div>${nodeData.id}</div>
    <div class="job-title">${nodeData.data.job_title}</div>
  </div>
`;

function buildNode(nodeData, templateHtml) {
  const parser = new DOMParser();
  const templateFilled = templateHtml(nodeData);
  const templateElement = parser.parseFromString(templateFilled, 'text/html').querySelector('.position-card');
  const nodeElement = templateElement.cloneNode(true);
  nodeElement.style.left = `${nodeData.x}px`;
  nodeElement.style.top = `${nodeData.y}px`;
  nodeElement.style.width = `160px`;

  return nodeElement;
}

function App() {
  const nodeContainer = document.createElement('div');
  nodeContainer.id = 'node-container';
  document.body.appendChild(nodeContainer);

  nodesData.forEach(nodeData => {
    const nodeElement = buildNode(nodeData, templateHtml);
    nodeContainer.appendChild(nodeElement);
  });

  return <h1>My App</h1>;
}

export default App;
