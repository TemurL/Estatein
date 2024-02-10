import { budgetRange } from './modules/budgetRange.js';
import * as TLFunc from './modules/functions.js'
import { methodRadio } from './modules/methodRadio.js';
import { openMobMenu } from './modules/openMobMenu.js';
import { openPropCardParag } from './modules/openPropCardParag.js';
import { pricingRange } from './modules/pricingRange.js';
import { createPropertyPage, propBtn } from './modules/propBtn.js';
import { pushMessage } from './modules/pushMessage.js'
import { ringTextRender } from './modules/ringTextRender.js';
import { setActiveNavLi } from './modules/setActiveNavLi.js';
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
