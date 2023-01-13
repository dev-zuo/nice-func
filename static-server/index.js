const Koa = require('koa')
const KoaStatic = require('koa-static')
const path = require('path')

const app = new Koa()

console.log(path.resolve(__dirname, '../src/'))
app.use(new KoaStatic(path.resolve(__dirname, '../src/')))

app.listen(8500, () => {
  console.log('服务已开启，端口号8500')
})