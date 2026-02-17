class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <header class="header">
        <div class="header-logo">
            <a href="#">
                <img src="../images/placeholder-image.webp" alt="header logo" class="header-logo-img">
            </a>
        </div>
        <div class="header-nav">
            <a href="./webpages/home.html" class="header-nav-link">Home</a>
            <a href="#" class="header-nav-link">Link</a>
            <a href="#" class="header-nav-link">Link</a>
            <a href="#" class="header-nav-link">Link</a>
            <a href="./webpages/about.html" class="header-nav-link">About</a>
        </div>
        <div class="header-user">
            <div class="cart">
                <img src="../images/icons/shopping-cart-icon.svg" alt="shopping cart button" class="icon cart-icon">
            </div>
            <div class="user-account">
                <img src="../images/icons/account-icon.svg" alt="user account button" class="icon account-icon">
            </div>
            <div class="search">
                <input type="text" placeholder="Search" class="search-textbox">
                <img src="../images/icons/search-icon.svg" alt="search button" class="icon search-icon">
            </div>
        </div>
    </header>
    `
    }
}

customElements.define("header-component", Header);