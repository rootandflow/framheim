
  WebFont.load({
    google: {
      families: ['Ovo', 'Muli']
    }
  });

var foundation = require('foundation-sites');

  $(document).ready(function($) {
      $(document).foundation();
  });

console.log('vendor script loaded');
