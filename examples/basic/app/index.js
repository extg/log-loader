
import documentWrite from './documentWrite';
require('./foo');
require('./foo/foo');

documentWrite('Hello, Babel!');
