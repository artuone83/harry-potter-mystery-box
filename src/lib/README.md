This folder contains facades for the various different libraries you use in your project. For example, if you use the axios library then this folder would contain a file for that axios library that creates your own API overtop of the axios API which you then use in your application. This means that instead of importing axios directly in your project you would import the file from this folder associated with axios.

Doing this makes is much easier to update, and replace libraries since all the library specific code is in one place in your application. It also makes it easier to customize third party libraries to your own need. This pattern is called the _Facade Pattern_

```js
import axios from "axios";

export function get(url, params = {}) {
  return axios({ url, params }).then((res) => res.data);
}
```
