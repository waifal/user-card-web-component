import CompositeBase from "./CompositeBase.js";
import '../component/UserCard.js';

class TeamSection extends CompositeBase {
    get template() {
        return `
            <section class="py-12 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Meet the Team</h2>
                    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <user-card 
                            label   =   "John Miller"
                            role    =   "Software Engineer"
                            avatar  =   "https://avatar.iran.liara.run/public/12"
                            bio     =   "Focused on building clean, scalable, and user-centered applications. I love transforming ideas into seamless digital experiences and solving complex problems with elegant code."
                        ></user-card>
                        <user-card 
                            label   =   "Sarah Collins"
                            role    =   "Network Engineer"
                            avatar  =   "https://avatar.iran.liara.run/public/girl"
                            bio     =   "Specializing in designing, optimizing, and maintaining high-performance, reliable infrastructures. I thrive on improving connectivity, reducing downtime, and keeping systems running smoothly."
                        ></user-card>
                        <user-card 
                            label   =   "Daniel Brooks"
                            role    =   "Daniel Brooks"
                            avatar  =   "https://avatar.iran.liara.run/public/18"
                            bio     =   "Cybersecurity professional dedicated to protecting systems, data, and users from modern threats. I’m passionate about threat analysis, secure architecture, and staying ahead in an ever-evolving security landscape."
                        ></user-card>
                    </div>
                </div>
            </section>
        `;
    }

    populate() {
        // Example: you could dynamically fetch team data and insert user-cards here
    }
}

window.customElements.define('team-section', TeamSection);