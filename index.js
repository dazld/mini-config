
module.exports = function makeGuardedMap() {

    const cache = new Map();

    const facade = {
        get(key){
            if(cache.has(key)){
                return cache.get(key);
            } else {
                throw new Error(`Missing config key ${key}`);
            }
        },
        set(key, value){
            if (cache.has(key)) {
                throw new Error(`Trying to redefine config key ${key} as ${value}`);
            } else {
                cache.set(key, value);
            }
        }
    };

    Object.freeze(facade);

    return facade;
};
