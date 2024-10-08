import { budgetRange } from './modules/budgetRange.js';
import * as TLFunc from './modules/functions.js'
import { jqueryTry } from './modules/jqueryTry.js';
import { methodRadio } from './modules/methodRadio.js';
import { openMobMenu } from './modules/openMobMenu.js';
import { openPropCardParag } from './modules/openPropCardParag.js';
import { pricingRange } from './modules/pricingRange.js';
import { createPropertyPage, propBtn } from './modules/propBtn.js';
import { propPhotoSlider } from './modules/propPhotoSlider.js';
import { pushMessage } from './modules/pushMessage.js'
import { ringTextRender } from './modules/ringTextRender.js';
import { setActiveNavLi } from './modules/setActiveNavLi.js';
import { testFetch } from './modules/testFetch.js';
import { testDPF } from './modules/testPDF.js';
import { uniSlider } from './modules/uniSlider.js';

TLFunc.isWebp()

pushMessage();
setActiveNavLi();
ringTextRender();
uniSlider();
openPropCardParag();
pricingRange();
budgetRange();
methodRadio();
openMobMenu();
propBtn();
jqueryTry();
propPhotoSlider();
// testFetch();
testDPF();