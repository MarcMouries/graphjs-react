export default class OrgChart {

    constructor(container) {
        this.container = container;

        const nodeContainer = document.createElement("div");
        nodeContainer.id = "node-container";
        this.container.appendChild(nodeContainer);
    }
}