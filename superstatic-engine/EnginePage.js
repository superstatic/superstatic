class EnginePage {
  constructor({ engine, page }) {
    this._engine = engine;
    this._page = page;
  }

  async construct() {
    const page = await this._engine.newPage();
    await page.setContent(this._page.render());
    const source = await page.content();
    return source;
  }
  
}

export default EnginePage;