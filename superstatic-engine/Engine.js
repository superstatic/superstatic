import puppeteer from 'puppeteer';

import Error from './error/Error';

class Engine {
  /**
   * Superstatic engine. The engine is responsible of initializing
   * a Puppeteer Browser instance and renders the templates defined
   * to a static site.
   * 
   * @param {Object} props - A properties object containing various options 
   * e.g. headless: true - Runs the engine's browser in headless mode.
   */
  constructor({ props }) {
    this._class = 'Engine';
    this._engine = null;
    this._props = props || {};
  }

  /**
   * Initialize an engine instance. A Puppeteer Browser instance launches
   * in the background, in order to render the static page.
   * 
   * @return An instance of the Puppeteer Browser created.
   */
  async init() {
    try {
      this._engine = await puppeteer.launch({ headless: this._props.headless });
    } catch (error) {
      throw new Error({
        error: error,
        message: `[${this._class}]: Unable to start Puppeteer. Consult your local mechanic 👷‍♂️.`
      });
    }

    return this._engine;
  }

  /**
   * Destroy the current running engine in a gracefull manner.
   */
  async destroy() {
    await this._engine.close();
  }

  /**
   * The instance of the running engine. Engine is powered 
   * through Puppeteer.
   * 
   * @return An instance of the Puppeteer Browser running.
   */
  get instance() {
    return this._engine;
  }
}

export default Engine;