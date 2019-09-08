import { should, expect, assert } from 'chai'
import { asArray } from '../src'

should()



describe('@cypherlab/js-utils', () => {

  before(done => done())

  describe('asArray', () => {

    it('asArray("foo, bar, foo")', async () => {
      expect(asArray("foo, bar, foo")).to.have.ordered.members([ 'foo', 'bar' ])
    })

    it('asArray("foo, bar, foo", { uniq: false })', async () => {
      expect(asArray("foo, bar, foo", { uniq: false })).to.have.ordered.members([ 'foo', 'bar', 'foo' ])
    })

    it('asArray("foo / bar / foo", { delim: "/" })', async () => {
      expect(asArray("foo / bar / foo", { delim: "/" })).to.have.ordered.members([ 'foo', 'bar' ])
    })

  })

})


