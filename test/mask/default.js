import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import koaSessionTest from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await koaSessionTest({
      text: this.input,
    })
    return res
  },
  context: Context,
})