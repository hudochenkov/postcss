'use strict'

let Container = require('./container')

let LazyResult, Processor

class Document extends Container {
  constructor (defaults) {
    super(defaults)
    this.type = 'document'

    if (!this.nodes) {
      this.nodes = []
    }
  }

  normalize (child) {
    return [child]
  }

  toResult (opts = {}) {
    let lazy = new LazyResult(new Processor(), this, opts)

    return lazy.stringify()
  }
}

Document.registerLazyResult = dependant => {
  LazyResult = dependant
}

Document.registerProcessor = dependant => {
  Processor = dependant
}

module.exports = Document
Document.default = Document
