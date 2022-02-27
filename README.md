 ## SEEK AND DELETE
 
Periodically it is important to delete files that take up a lot of space and are of little use.
For this, a script was created that manipulates folders and files from a specific directory (*ex the directory where you put all your projects*) in search of node_modules to delete them.


## Technologies 
 
Technologies used in the project.  
 
* Node
 
## Services Used
 
* Node.js File System (or **fs**)
 
## Dependences
 You will not need of extra dependences. Only the native libs of Node.
 
## Starting
 
- You will need to configure two commands to define which is the path of the **root directory** that the script `will search for` and the **name of directory** you `want to exclude`.

```js
  const FOLDER_NAME_DELETE = "node_modules";

  // Example of root path
  const rootFolderPath = path.resolve(__dirname, 'my-repos-js');
```
- Now, you can use `yarn dev` or `npm run dev` to execute the script

*ATTENTION: The script can take time to process the datas. This will depend on the size of the root directory*
 
## Updates
 
  - Suggestions:
    - Create an electron application to receive inputs

    - Put filters to not delete all node_modules always
 
 
## Links
 
  - Repository: https://github.com/Jackie098/seek_and_delete
    - In case of doubts or suggestions, feel free to get in touch and/or request **pull requests**. 
 
 
## Creator
 
* **Carlos Augusto M**: @Jackie098 (https://github.com/Jackie098)