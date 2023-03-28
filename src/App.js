
const nodesData = [
  { id: 'A', x: 100, y: 100, data : {name : "name", job_title: "", department: ""}},
  { id: 'B', x: 200, y: 100, data : {name : "name", job_title: "", department: ""}},
  { id: 'C', x: 300, y: 100, data : {name : "name", job_title: "", department: ""}},
];

const templateHtml =
 `
  <div class="position-card">
    <p>Node ID</p>
  </div>;
`
function App() {
  //useEffect(() => {

    console.log("in App()");
    const parser = new DOMParser();
    const templateDoc = parser.parseFromString(templateHtml, 'text/html');
    const templateElement = templateDoc.querySelector('.position-card');

    const nodeContainer = document.createElement('div');
    nodeContainer.id = 'node-container';
    document.body.appendChild(nodeContainer);

    nodesData.forEach(node => {
      const clone = templateElement.cloneNode(true);
      clone.querySelector('p').textContent = node.id;
      clone.style.left = `${node.x}px`;
      clone.style.top = `${node.y}px`;
      clone.style.width = `50px`;
      nodeContainer.appendChild(clone);
    });
 // }, [nodesData]);

  return <h1>My App</h1>;

}

export default App;
