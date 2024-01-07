import * as TLFunc from './modules/functions.js'
import { pushMessage } from './modules/pushMessage.js'
import { ringTextRender } from './modules/ringTextRender.js';
import { setActiveNavLi } from './modules/setActiveNavLi.js';
import { uniSlider } from './modules/uniSlider.js';

TLFunc.isWebp()

pushMessage();
setActiveNavLi();
ringTextRender();
uniSlider(3);