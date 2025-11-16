export default class CompositeBase extends HTMLElement {
    constructor() {
        super();
    }

    get template() {
        return `<div></div>`;
    }

    render() {
        this.innerHTML = this.template;
        this.populate();
    }

    populate() {
        // Default does nothing
    }

    connectedCallback() {
        this.render();
    }
}
