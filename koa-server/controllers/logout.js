var fn_logout = async (ctx, next) => {
    var data = {
        status: 0,
        message: "",
        userData: {},
    };
    ctx.response.writeHead(200, {
        'Set-Cookie': `userid=0;path=/;expires=-1`,
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': ctx.request.headers['origin'],
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'content-type',
    });
    ctx.response.body = JSON.stringify(data);
    // response.end(JSON.stringify(data));
}

module.exports = {
    'POST /logout/': fn_logout
};