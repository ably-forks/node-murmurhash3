var mmh3 = require('./lib/murmurhash3');
var assert = require('assert');

var test_data = [["Hello", 0x12da77c8, [0x2360ae46, 0x5e6336c6, 0xad45b3f4, 0xad45b3f4]], ["Hello1", 0x6357e0a6, [0x8eb0cf41, 0x641b2401, 0xbc4c0dfc, 0xbc4c0dfc]], ["Hello2", 0xe5ce223e, [0xd3bcfc45, 0x66782162, 0x4beab2d1, 0x4beab2d1]]];

for( i = 0; i < test_data.length; i++) {(function() {
    var val = test_data[i];
    var res;
    res = mmh3.murmur32(val[0]);
    assert.equal(res, val[1], 'murmur32-' + i);
    res = mmh3.murmur32Hex(val[0]);
    assert.equal(res, val[1].toString(16), 'murmur32Hex-' + i);
    res = mmh3.murmur128(val[0]);
    assert.deepEqual(res, val[2], 'murmur128-' + i);
    res = mmh3.murmur128Hex(val[0]);
    var expect = '';
    for(var j = 0; j < 4; j++) {
      expect += val[2][j].toString(16);
    }
    assert.equal(res, expect, 'murmur128Hex-' + i);

  })();
}