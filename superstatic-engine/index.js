const fs = require('fs')

const filePath = '/Users/george/Desktop/superstatic/tests/render/';

function write({ data }) {
  fs.writeFile(filePath + 'index.html', data, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!" + data);
  });
}

module.exports = write;



// fs.readFile(__dirname + '/test/index', 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err)

//   }
//   console.log(data)
// })