import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import koaSessionTest from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof koaSessionTest, 'function')
  },
  async 'calls package without error'() {
    await koaSessionTest()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await koaSessionTest({
      text,
    })
    ok(res, text)
  },
}

export default T