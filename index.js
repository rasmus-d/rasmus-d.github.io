const links = []
links[0] = "https://github.com/rasmus-d";
links[1] = "https://se.linkedin.com/in/rasmus-danielsson-84607616a?trk=people-guest_people_search-card";
links[2] = "https://example.org";


function newWindow(id) {
    window.open(links[id], "_blank");
}