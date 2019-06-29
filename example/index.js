/* alanode example/ */
import koaSessionTest from '../src'

(async () => {
  const res = await koaSessionTest({
    text: 'example',
  })
  console.log(res)
})()