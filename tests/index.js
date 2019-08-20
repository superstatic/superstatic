import Base from './Base';
import Header from './Header';
import { JSDOM } from 'jsdom';

import write from '../superstatic-engine/index';

const info = {
  name: 'Motorcycle Club 🏍 ',
  title: 'Tailor made motorcycles'
}

const base = new Base({ data: info });
const render = base.render();

const dom = new JSDOM(render);

const header = new Header({ data: info });
dom.window.document.body.innerHTML = header.render();

write({data: dom.serialize()})