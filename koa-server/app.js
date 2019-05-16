const Koa = require('koa');

var url = require('url');

const util = require('./util');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

var mysql = require('mysql');

const _srvKey = Buffer.from('11111111111111111111111111111111', 'utf8').toString('hex');






// parse request body:
app.use(bodyParser());


app.use(async (ctx, next) => {
    ctx.set('Content-Type', 'application/json;charset=UTF-8');
    ctx.set('Access-Control-Allow-Origin', ctx.headers['origin']);
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Allow-Headers', 'content-type');
    console.log('app option', ctx.method);
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
        return;
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {


    const p = url.parse(ctx.url, true).path;
    if (p !== '/login/' && !ctx.cookies.get('userid')) {
        ctx.cookies.get('userid')
        var data = {
            status: 9,
            message: "未登录",
            article: {},
        };
        ctx.response.body = JSON.stringify(data);
        return;
    } else {
        console.log('登录检测');
        await next();
    }
})

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add controllers:
app.use(controller());

app.listen(8888);
console.log('app started at port 8888...');