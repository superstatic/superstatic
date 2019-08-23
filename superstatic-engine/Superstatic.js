import fs from 'fs';

class Superstatic {
  constructor() {
    this.props = {
      headless: true
    };
  }

  render() {

  }

  write({ path, data }) {
    fs.writeFile(path, data, (err) => {
      if(err) return console.log(err);
      console.log('File saved...');
    })
  }
}

export default Superstatic;