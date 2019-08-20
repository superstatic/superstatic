class Base {
  constructor({ data }) {
    this.data = data;
  }

  render() {
    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${ this.data ? `${this.data.title} | ${this.data.name}` : `Motorcycle Club`}</title>
      </head>
      <body>
      </body>
    </html>`;
  }
}

export default Base;