class div extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <!-- BG Stickers -->
        <div class="stickers-bg">
            <img src="../images/stickers/ttc-sticker1.png" alt="" class="sticker1">
            <img src="../images/stickers/ttc-sticker2.png" alt="" class="sticker2">
            <img src="../images/stickers/ttc-sticker3.png" alt="" class="sticker3">
        </div>
    `
    }
}

customElements.define("ttc-stickers", div);