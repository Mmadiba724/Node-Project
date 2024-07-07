const assert = require('assert');
const { multiply } = require('../multiply'); 

describe('multiply', function(){
    it('mulitiplying 1 by 1 and should be equal to 1',function(){
        assert.equal(multiply(1, 1), 1);
    })
    it('mulitiplying 3 by 3 and should be equal to 9',function(){
        assert.equal(multiply(3, 3), 9);
    })
    it('mulitiplying 4 by 4 and should be equal to 16',function(){
        assert.equal(multiply(4, 4), 16);
    })
   
    it('mulitiplying 23 by 45 and should be equal to 1035',function(){
        assert.equal(multiply(23, 45), 1035);
    })
   
   
   

})

