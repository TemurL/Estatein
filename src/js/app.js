import * as TLFunc from './modules/functions.js'
import { pushMessage } from './modules/pushMessage.js'
import { ringTextRender } from './modules/ringTextRender.js';
import { setActiveNavLi } from './modules/setActiveNavLi.js';

TLFunc.isWebp()

pushMessage();
setActiveNavLi();
ringTextRender();