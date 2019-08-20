class Header {
  constructor({data}) {
    this.data = data;
  }

  render() {
    return `
    <header class="header">
      <div class="container">
        <div class="header__content">
          <div class="header__logo">
            <h1>${this.data.name}</h1>
          </div>
          <nav class="header__nav">
            <a href="/">Home</a>
          </nav>
        </div>
      </div>
    </header>
    `;
  }
}

export default Header;