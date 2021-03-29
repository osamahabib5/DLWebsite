import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faYoutube, faInstagram);
}
export default initFontAwesome;