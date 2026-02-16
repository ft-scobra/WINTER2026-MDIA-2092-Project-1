class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <footer class="footer">
        <div class="top-footer">
            <!-- Contact Us -->
            <div class="contact-us">
                <h5>Contact Us</h5>
                <p>Email: support@posers.com</p>
                <p>Phone: +1 123 456 7890</p>
            </div>
            <!-- Social Media Tray -->
            <div class="social-media-tray">
                <div class="social-media-icon">
                    <a href="" class="social-media-icon-link">
                        <i class="ci ci-instagram ci-2x"></i>
                    </a>
                </div>
                <div class="social-media-icon">
                    <a href="" class="social-media-icon-link">
                        <i class="ci ci-youtube ci-2x"></i>
                    </a>
                </div>
                <div class="social-media-icon">
                    <a href="" class="social-media-icon-link">
                        <i class="ci ci-tiktok-circle ci-2x"></i>
                    </a>
                </div>
                <div class="social-media-icon">
                    <a href="" class="social-media-icon-link">
                        <i class="ci ci-twitter ci-2x"></i>
                    </a>
                </div>
                <div class="social-media-icon">
                    <a href="" class="social-media-icon-link">
                        <i class="ci ci-whatsapp ci-2x"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
            <!-- Copyright -->
            <p>&copy;POSERS 2026</p>
        </div>
    </footer>
    `
    }
}

customElements.define("footer-component", Footer);