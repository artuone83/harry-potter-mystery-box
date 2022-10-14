This folder works very similarly to the `pages` folder. Instead of grouping by page we are grouping by feature.

The actual structure of this folder follows the pages structure in that there are individual folders for each feature (authentication, todos, projects, etc.) and inside those folders are all the files for that feature. The biggest difference you will notice between the pages folder and the features folder, though, is that within each feature you have another set of folders. This folder structure for each feature is a complete copy of all the folders inside the src folder (other than the features folder obviously) and an index.js file. This means that within your feature all your code can be organized by type (context, hook, etc.) while still be collocated together.

example:

| &darr; authentication |                  |
| --------------------- | ---------------- |
| &darr; components     |                  |
|                       | sign-up-form.tsx |
|                       | login-form.tsx   |
| &darr; hooks          |                  |
|                       | use-login.tsx    |
|                       | use-sign-up.tsx  |
| &darr; services       |                  |
|                       | login.tsx        |
|                       | sign-up.tsx      |
| index.ts              |                  |
