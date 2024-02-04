/* eslint-disable */
import fs from 'fs';

const sourceFolderPath = 'dist/dist';
const destinationFolderPath = 'dist';

try {
  fs.cpSync(sourceFolderPath, destinationFolderPath, {
    recursive: true,
  });
  fs.rmSync(sourceFolderPath, {
    recursive: true,
    force: true,
  });
  console.log('Success build');
} catch (error) {
  console.log(error.message);
}
