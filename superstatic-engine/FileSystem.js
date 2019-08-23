import fs from 'fs';

class FileSystem {
  constructor({ rootFolder }) {
    this._rootFolder = rootFolder;
  }

  write({ file, content }) {
    fs.writeFile(`${__dirname}/${file}`, content, (err) => {
      if (err) return console.log(err);
      console.log('File saved...');
    });
  }

  get rootFolder() {
    return this._rootFolder;
  }

  set rootFolder({ name }) {
    this._rootFolder = name;
  }
}

export default FileSystem;