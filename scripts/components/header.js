class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <header class="header">
        <nav>
            <a href="#">Home</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
        </nav>
    </header>
    `
    }
}

customElements.define("header-component", Header);