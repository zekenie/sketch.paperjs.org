window.manageScriptName = (function($) {
  return function(scriptObj, updateHash) {
    $(function() {
      var $scriptName = $('#script-name');
      var $scriptNameSave = $('#script-name-save');
      var $delete = $('#delete');

      $scriptName.val(scriptObj.saveName);
      $scriptNameSave.prop('disabled', true);

      $scriptName.on('input', function() {
        scriptObj.saveName = this.value;
        $scriptNameSave.prop('disabled', false);
      });


      $scriptNameSave.on('click', function() {
        updateHash();
        $(this).prop('disabled', true);
      });

      $delete.on('click', function() {
        if(confirm('are you SURE you want to completely destroy this sketch')) {
          codeStore.remove(scriptObj.saveName);
          window.location = 'index.html';
        }
      })
    });
  };
})($);