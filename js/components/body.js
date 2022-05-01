
// the page body component
//
// all pages are "attached" to this component
// and appended and removed as needed.
export class Body {
    constructor($app) {
        let main = document.createElement("main");
        main.setAttribute("role", "main");
        main.className = "inner cover";

        this.$el = main;
        $app.append(main);
    }
}

export { Body as default };
