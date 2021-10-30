import './generic.template.scss';

// ABSTRACTS
import '../../abstracts/abstracts.scss';

// BASE rules
import '../../base/base.scss';

// ATOMS
import '../../components/atoms/acfMap/acfMap.atom.scss';
import '../../components/atoms/button/button.atom.scss';
import '../../components/atoms/headline/headline.atom.scss';

// // MOLECULES
import '../../components/molecules/card/professor-card.molecule.scss';
import '../../components/molecules/eventSummary/eventSummary.molecule.scss';
import '../../components/molecules/fullWidthSplit/fullWidthSplit.molecule.scss';
import '../../components/molecules/linkList/linkList.molecule.scss';
import '../../components/molecules/metabox/metabox.molecule.scss';
import '../../components/molecules/pageBanner/pageBanner.molecule.scss';
import '../../components/molecules/pageLinks/pageLinks.molecule.scss';
import '../../components/molecules/postItem/postItem.molecule.scss';

// // ORGANISMS
import '../../components/organisms/footer/footer.organism.scss';
import '../../components/organisms/header/header.organism.scss';
import '../../components/organisms/heroSlider/heroSlider.organism.scss';
import '../../components/organisms/login/login.organism.scss';
import '../../components/organisms/navigation/navigation.organism.scss';
import '../../components/organisms/search/search.organism.scss';

// // UPDATES that were not implemented correctly in course
import '../../components/atoms/shame.scss';
import '../../components/organisms/my-notes.scss';

import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';

import MobileMenu from "../../components/organisms/mobileMenu/mobileMenu.organism";
import HeroSlider from "../../components/organisms/heroSlider/heroSlider.organism";

var mobileMenu = new MobileMenu()
var heroSlider = new HeroSlider()