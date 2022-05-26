
const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')

    it('entry', () => {

        assert.equal(baseConfig.entry.index, 'D:/projectTest/webpack/webpack/geektime-webpack-course/code/chapter04/study-my-project/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.search, 'D:/projectTest/webpack/webpack/geektime-webpack-course/code/chapter04/study-my-project/test/smoke/template/src/search/index.js');
    });
});