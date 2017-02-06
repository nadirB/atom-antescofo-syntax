'use babel'

module.exports = {
  activate() {
    // replace the example argument 'linter-ruby' with the name of this Atom package
    require('atom-package-deps').install('atom-antescofo')
      .then(function() {
        console.log('All dependencies installed, good to go')
      })
  }
}
