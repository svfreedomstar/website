import {Nav} from "./nav/nav.js";
import {Body} from "./body.js";
import {Footer} from "./footer.js";

// container for holding the basic components
export class Components {
    constructor($app) {
        this.nav = new Nav($app);
        this.body = new Body($app);
        this.footer = new Footer($app);
    }
}

export {Components as default};
