import {expect} from 'chai'
import module from '../src/index.js'

describe('my module', () => {
  it('should return the answer to life', () => {
    let result = module('hello')
    expect(result).to.equal('42!')
  })

  it('should return the answer to life', () => {
    let result = module('test', '?')
    expect(result).to.equal('42?')
  })
})
