class Socials extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <ul class="icons">
            <li><a href="https://play.google.com/store/apps/developer?id=Hungryum&hl=en_AU&gl=US" class="icon brands fa-google-play" target="_blank"><span class="label">GooglePlay</span></a></li>
            <li><a href="https://www.facebook.com/Hungryumgames/" class="icon brands fa-facebook-f" target="_blank"><span class="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/in/peter-johnstone-30ba41103/" class="icon brands fa-linkedin-in" target="_blank"><span class="label">LinkedIn</span></a></li>
            <li><a href="http://hungryumgames.blogspot.com/" class="icon brands fa-blogger-b" target="_blank"><span class="label">GitHub</span></a></li>
        </ul>
        `;
    }
}

customElements.define('socials-component', Socials);