window.codeStore = (function(storage) {

  var storageKey = 'fsPaper_';

  return {
    save: save,
    remove: remove,
    get: get,
    list: list
  };

  function decorateKey(key) {
    return storageKey + key;
  }

  function stripKey(key) {
    return key.slice(storageKey.length);
  }

  function get(key) {
    return list()[key];
  }

  function save(key, scriptHash) {
    return storage.setItem(decorateKey(key), scriptHash);
  }

  function remove(key) {
    return storage.removeItem(decorateKey(key));
  }

  function list() {
    var allScripts = {};
    for(var i = 0; i < storage.length; i++) {
      var key = storage.key(i);
      if(key.indexOf(storageKey) > -1) {
        allScripts[stripKey(key)] = storage.getItem(key);
      }
    }
    return allScripts;
  }

})(window.localStorage)