'use strict';

require('./test/chunk.js');

// load icons tasks
webpackSvgStore('platform/static/svg/**/*.svg', 'platform/dist/svg/[hash].icons.svg');
