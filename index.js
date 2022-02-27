const fs = require('fs');
const path = require('path');

// Name of the folder that will be searched by the algorithm
const FOLDER_NAME_DELETE = "node_modules";

// Directory path where all your repositories are 
const rootFolderPath = path.resolve(__dirname, '..', 'js-type');

// Messages for you not to despair
instructions();

// Function that will read the main directory and call the function 
// to delete all the "node_modules"
readAllFiles(rootFolderPath);

async function readAllFiles(dirPath) {
  try {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        console.log(err);
      }

      files.forEach(async (file) => {
        if (file === FOLDER_NAME_DELETE) {
          var pathNodeModules = path.join(dirPath, file);

          // Whenever a node_modules folder is found it will be deleted
          await removeNodeModules(pathNodeModules);

        } else if (fs.statSync(dirPath + "/" + file).isDirectory()) {
          readAllFiles(dirPath + "/" + file);
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
}

async function removeNodeModules(dirName) {
  fs.rmdir(dirName, { recursive: true }, (err) => {
    if (err) {
      throw err;
    }

    console.log(`${dirName} is deleted!`);
  });
}

function instructions() {
  setTimeout(() => {
    console.log("\nSearching for the node_modules...\n\n");
  }, 1500);

  console.log("Reading the directories and subdirectories.");
  console.log("ATTENTION...");
  console.log("This process can take time!");
}