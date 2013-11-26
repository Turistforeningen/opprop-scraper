Screen Scraper for opprop.net
=============================

## Usage

```javascript
var opprop = require('opprop');

opprop('jatilstillenatur', function(err, count) {
  if (err) return console.error(err);
  console.log(count);
});
```

