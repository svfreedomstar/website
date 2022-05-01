import {Components} from "./components/components.js"

export class App {
    constructor() {
        // create the basic component tree
        let $app = document.getElementById("application");
        $app.className = "cover-container d-flex h-100 p-3 mx-auto flex-column";
        const components = new Components($app);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.app = new App();
});
