'use strict';

require('../common');
const fixtures = require('../common/fixtures');
const assert = require('assert');

// This test ensures that the module can be resolved
// even if the path given to createRequire contains multibyte characters.

const { createRequire } = require('module');

const u = fixtures.fileURL('あ.js');

const reqToo = createRequire(u);
assert.deepStrictEqual(reqToo('./experimental'), { ofLife: 42 });
