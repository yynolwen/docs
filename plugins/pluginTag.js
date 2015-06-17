
exports.defineTags = function(dictionary) {
  dictionary.defineTag('plugin', {
    mustHaveValue: true,
    //mustNotHaveValue: true,
    isNamespace: false,

    onTagged: function(doclet, tag) {

      //console.error(doclet);
      //console.error(tag);

      doclet.plugin = tag.value;
    }
  })
};
