import { should, expect, assert } from 'chai'
import { _ , asArray } from '../src'



should()



describe('@cypherlab/js-utils', () => {

  before(done => done())


  describe('_', () => {

    it('_.filter()', async () => {
      expect(_.filter(["foo", "bar"], i => i === "foo")).to.have.ordered.members([ 'foo' ])
    })

    it('_.uniq()', async () => {
      expect(_.uniq(["foo", "foo"])).to.have.ordered.members([ 'foo' ])
    })

    it('_.compact()', async () => {
      expect(_.compact(["foo", undefined, "", "bar"], i => i === "foo")).to.have.ordered.members([ 'foo', 'bar' ])
    })

    it('_.get()', async () => {
      expect(_.get({ foo: { bar: 'baz' } }, "foo.bar")).to.equal('baz')
      expect(_.get({ foo: { bar: 'baz' } }, "foo[bar]")).to.equal('baz')
    })

  })


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


