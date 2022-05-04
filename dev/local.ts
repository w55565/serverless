

const func = process.argv[2];

if (!func) {
  throw new Error('请提供函数名');
}
const app = require(`../functions/${func}/dist/app`);
app.listen(3000, () => console.log('Server is listening on port 3000'));
