class UserCard extends HTMLElement {
    constructor() {
        // super();
        this.innerHTML = this.skeleton;
        this.preloadAvatar();
    }

    preloadAvatar() {
        const avatarURL = this.getAttribute('avatar') || 'https://avatar.iran.liara.run/public/35';

        const img = new Image();

        img.onload = () => {
            this.renderTemplate();
            this.populate();
        };

        img.onerror = () => {
            console.warn("Avatar failed to load.");
            this.renderTemplate();
            this.populate(true);
        };

        img.src = avatarURL;
    }

    renderTemplate() {
        this.innerHTML = this.template;
    }

    get skeleton() {
        return `
            <article class="h-full max-w-sm bg-white shadow-md rounded-2xl p-6 space-y-4 flex flex-col justify-between animate-pulse">
                <!-- Avatar + Name -->
                <div class="flex items-center space-x-4">
                    <div style="width: 112px; height: 80px" class="skeleton rounded"></div>
                    <div class="flex flex-col space-y-3 w-full">
                        <div class="h-5 w-32 skeleton rounded"></div>
                        <div class="h-4 w-24 skeleton rounded"></div>
                    </div>
                </div>
                <div class="space-y-3">
                    <div class="h-4 skeleton rounded"></div>
                    <div class="h-4 skeleton rounded"></div>
                    <div class="h-4 skeleton rounded"></div>
                    <div class="h-4 skeleton rounded"></div>
                    <div class="h-4 w-2/3 skeleton rounded"></div>
                </div>
                <div class="flex justify-end gap-3">
                    <div class="h-9 w-24 skeleton rounded"></div>
                    <div class="h-9 w-20 skeleton rounded"></div>
                </div>
            </article>
        `;
    }

    get template() {
        return `
            <article class="h-full max-w-sm bg-white shadow-md rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                <div class="flex items-center space-x-4">
                    <img class="w-20 h-20 rounded-full object-cover">
                    <div>
                        <h2 class="text-xl font-semibold text-gray-800"></h2>
                        <p class="text-gray-500 text-sm"></p>
                    </div>
                </div>
                <div>
                    <p class="text-gray-600"></p>
                </div>
                <div class="flex justify-end gap-3">
                    <button class="px-4 py-2 text-sm border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition"></button>
                    <button class="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"></button>
                </div>
            </article>
        `;
    }

    populate(fallback = false) {
        const getAttr = (attr, fallbackText = "") => this.hasAttribute(attr) ? this.getAttribute(attr) : fallbackText;

        const label             = this.querySelector("h2");
        label.textContent       = getAttr("label", "User Card");

        const [role, bio]       = this.getElementsByTagName("p");
        role.textContent        = getAttr("role", "No information given");
        bio.textContent         = getAttr("bio", "Lorem ipsum...");

        const avatar            = this.querySelector("img");
        avatar.alt              = label.textContent;

        avatar.src = fallback ? "fallback-avatar.png" : getAttr("avatar", "https://avatar.iran.liara.run/public/35");

        const [btn1, btn2]      = this.getElementsByTagName("button");
        btn1.textContent        = getAttr("btn1-label", "View Profile");
        btn2.textContent        = getAttr("btn2-label", "Message");

        this.handleFunctionality();
    }

    handleFunctionality() {
        const [button1, button2] = this.getElementsByTagName("button");
        button1.onclick = this.viewProfile.bind(this);
        button2.onclick = this.message.bind(this);
    }

    viewProfile() {
        alert(this.querySelector("h2").textContent + " profile clicked!");
    }

    message() {
        window.prompt("Send a 👋 to " + this.querySelector("h2").textContent);
    }
}

customElements.define("user-card", UserCard);
