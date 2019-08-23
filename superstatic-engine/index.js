import Page from '../superstatic/Page';
import fs from 'fs';
import Engine from './Engine';
import EnginePage from './EnginePage';

const page = new Page({ name: 'home', title: 'Homepage' });

console.log(`Id: ${page.props.id} | Title: ${page.props.title}`);

// function createDir({ dir }) {
//   try {
//     if (!fs.existsSync(dir)){
//       fs.mkdirSync(dir)
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }

// function createFile({ file, path }) {
//   fs.writeFile(`${path}/${file}`, '', (err) => {
//     if(err) return console.log(err);
//     console.log('File saved...');
//   })
// }

// function entry() {
//   const entry = 'dist';
//   createDir({ dir: entry });
//   createDir({ dir: `${entry}/${page.props.name}`});

//   createFile({ file: 'index.html', path: `${entry}/${page.props.name}`});
// }

// entry();