
// the top navigation component
export class Nav {
    constructor($app) {
        let header = document.createElement("header");
        header.className = "masthead mb-auto";

        let inner_div = document.createElement("div");
        inner_div.className = "inner";
        header.append(inner_div);

        let logo = document.createElement("h3");
        logo.className = "masthead-brand";
        logo.innerHTML = "Sailing Freedom Star";
        inner_div.append(logo);

        let right_nav = document.createElement("nav");
        right_nav.className = "nav nav-masthead justify-content-center";

        let home_link = document.createElement("a");
        home_link.href = "/";
        home_link.className = "nav-link active";
        home_link.text = "Home";

        let story_link = document.createElement("a");
        story_link.href = "#story";
        story_link.className = "nav-link";
        story_link.text = "Story";

        let boat_link = document.createElement("a");
        boat_link.href = "#boat";
        boat_link.className = "nav-link";
        boat_link.text = "Boat";

        right_nav.append(home_link, story_link, boat_link);
        inner_div.append(right_nav);

        this.$el = header;
        $app.append(header);
    }
}

export {Nav as default};
