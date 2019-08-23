import Base from './Base';
import Header from './Header';
import { JSDOM } from 'jsdom';

import puppeteer from 'puppeteer';

import Superstatic from '../superstatic-engine/Superstatic';

const title = {
  site: 'Motorcycle Club 🏍 ',
  title: 'Tailor made motorcycles'
}

const base = new Base({ name: 'home', title: title });
console.log(base.props.id);
const render = base.render();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(render)

const header = new Header({ });
let headerMarckup = header.render();

await page.evaluate((headerMarckup) => {
  let headerElement = document.createElement('div');
  headerElement.innerHTML = headerMarckup;
  document.body.appendChild(headerElement);
}, headerMarckup);

 const source = await page.content()

  console.log(source)

  const superstatic = new Superstatic();
  superstatic.write({ path: './tests/render/test.html', data: source });

  await browser.close();
})();