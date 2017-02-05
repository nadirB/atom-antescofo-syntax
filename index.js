'use babel'

module.exports = {
  activate() {
    // replace the example argument 'linter-ruby' with the name of this Atom package
    require('atom-package-deps').install('atom-antescofo@1.0.5-beta')
      .then(function() {
        console.log('All dependencies installed, good to go')
      })
  }
}
