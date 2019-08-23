import Page from '../superstatic/Page';

class Base extends Page {
  constructor({ name, title, description }) {
    super({name: name, title: title, description: description});
  }

  render() {
    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${ this.props.name ? `${this.props.title.title} | ${this.props.title.site}` : `Motorcycle Club`}</title>
      </head>
      <body>
      </body>
    </html>`;
  }
}

export default Base;