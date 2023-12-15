import fs from 'fs';
import path from 'path';

export const writeFile = async (pathName, data) => {
  console.log('writeFile: preparing to write to', pathName);
  const dataToWrite = JSON.stringify(data);
  console.log('writeFile: data prepared to write', dataToWrite);

  await fs.mkdir(
    path.dirname(pathName),
    { recursive: true },
    async function (err) {
      // if (err) return cb(err);

      await fs.writeFile(pathName, dataToWrite, (err) => {
        if (err) {
          console.log('Uh oh...');
          console.error(err);
        } else {
          console.log('file saved', pathName);
        }
      });

      // await fs.writeFile(path, contents, cb);
    }
  );
};

export const fileExists = (pathName) => {
  console.log('checking if file exists at', pathName, fs.existsSync(pathName));
  return fs.existsSync(pathName);
};

export const readFile = async (pathName) => {
  console.log('reading file', pathName);
  return new Promise((resolve, reject) => {
    console.log('reading file', pathName);
    fs.readFile(pathName, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(JSON.parse(data));
    });
  });
};
