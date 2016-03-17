import test from 'ava';

import makeConfig from '../';

const config = makeConfig();

test('Config throws when attempting to get non-existent key', function(t){
    t.plan(3);
    t.throws(config.get.bind(null,'foo'));
    t.throws(config.get.bind(null, undefined));
    t.throws(config.get.bind(null));
});

test('Config allows retrieval of value', function(t){
    config.set('foo','bar');
    t.ok(config.get('foo'));
});

test('Config throws when attempting to reset an existing key', function(t){
    t.throws(config.set.bind(null, 'foo','baz'));
});

test('facade is frozen, and cannot be modified', function(t){
    t.plan(1);
    try {
        config.get = 'foo';
    } catch(e) {
        t.ok(e instanceof TypeError);
    }

});
