import crypto from 'crypto';

class Page {
  constructor({ name, title, description }) {
    this.props = {
      id: this._id({ length: 12 }),
      name: name ? name : '',
      title: title ? title : '',
      description: description ? description : ''
    };
  }

  _id({ length }) {
    return crypto
           .randomBytes(Math.ceil((length * 3) / 4))
           .toString('base64')
           .slice(0, length)
           .replace(/\+/g, '0')
           .replace(/\//g, '0');
  }
}

export default Page;