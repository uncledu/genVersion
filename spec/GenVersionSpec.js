'use strict'

import GenVersion from '../lib/index.js'

describe('Test Suite', () => {
  var genVersion = new GenVersion()
  it('should be a instance of GenVersion', () => {
    expect(genVersion instanceof GenVersion).toBeTruthy()
  })
  it('should generate version correct', done => {
    //todo
  })
})
