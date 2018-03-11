// Import Fontawesome
import fontawesome from '@fortawesome/fontawesome';
// Fontawesome configuration
fontawesome.config = {
    familyPrefix: 'fa',
    autoReplaceSvg: true,
}

// Import each icons families
// import '@fortawesome/fontawesome-free-brands';
// import '@fortawesome/fontawesome-free-solid';
// import '@fortawesome/fontawesome-free-regular';


// Import only the icons we use
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faFacebookMessenger from '@fortawesome/fontawesome-free-brands/faFacebookMessenger';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faSignal from '@fortawesome/fontawesome-free-solid/faSignal';

fontawesome.library.add(faFacebook, faFacebookF, faFacebookMessenger, faFacebookSquare, faTwitter, faGlobe, faAngleRight, faSignal);
