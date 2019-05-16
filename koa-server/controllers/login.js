var mysql = require('mysql');


var fn_login = async (ctx, next) => {
    var data = {
        status: 0,
        message: "",
        regData: {},
    };
    const regData = ctx.request.body;
    // const regData = JSON.parse(body);
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'blog',
    })
    console.log('connection');
    connection.connect();

    // console.log(regData);
    connection.query(`select * from userinfo where username = '${regData.regUsername}'`, (error, results, fields) => {
        if (error) throw error;
        console.log('login mysql')
        if (results.length == 0) {
            data.status = 1;
            data.message = '无此用户';
            console.log('login mysql if')
        }
        else {
            if (results[0].password == regData.regPassword) {
                // 加密
                let enId = results[0].id;
                console.log('enId', enId);
                ctx.cookies.set('userid', `${enId}`, {
                    domain: 'localhost',
                    path: '/',   //cookie写入的路径
                    maxAge: 1000 * 60 * 60 * 1,
                    expires: new Date('2020-07-06'),
                    httpOnly: false,
                    overwrite: false
                });
                 ctx.body = 200;
                console.log('setcookie')
                // let enId = util.encrypt(`${results[0].id}`, 'utf8', _srvKey, 'hex', true);


                data.regData = {
                    id: results[0].id,
                    username: results[0].username,
                };
                
               
            }
            else {
                data.status = 2;
                data.message = '密码错误';
            }
        }
        console.log(JSON.stringify(data))
        ctx.response.body = JSON.stringify(data);
        // response.end(JSON.stringify(data));
    });
}

module.exports = {
    'POST /login/': fn_login
};
