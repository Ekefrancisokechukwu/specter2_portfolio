https://github.com/Ekefrancisokechukwu/x3-codes

#####

space-id:kang3wxr2que
acess-token:CJD2aAnn10aaUp_LDfJKmeNxhG7dX35PMXuTI51VFX4

const contentful = require('contentful')

```js
const client = contentful.createClient({
  space: "<space_id>",
  environment: "<environment_id>", // defaults to 'master' if not set
  accessToken: "<content_delivery_api_key>",
});

client
  .getEntries({
    content_type: "<content_type_id>",
  })
  .then((response) => console.log(response.items))
  .catch(console.error);
```
