

var fn_userinfo = async (ctx, next) => {
    var data = {
        status: 0,
        message: "获取用户信息成功",
        userData: {},
    };
    // const regData = JSON.parse(body);
    // console.log(ctx.cookies.get('userid')) ;
    // let deId = ctx.cookies.get('userid');
    // let deId = util.decypt(ctx.cookies.get('userid'), 'base64', _srvKey, 'hex', true);
    // console.log('deData', deId);
    if (deId <= 0) {
        data.status = 9;
        ctx.response.body = JSON.stringify(data);
        // response.end(JSON.stringify(data));
        return;
    }

    let query = ( sql, values ) => {

        return new Promise(( resolve, reject ) => {
          pool.getConnection( (err, connection) => {
            if (err) {
              reject( err )
            } else {
              connection.query(sql, values, ( err, rows) => {
                if ( err ) {
                  reject( err )
                } else {
                  resolve( rows )
                }
                connection.release()
              })
            }
          })
        })
      
      }

      // 查找用户
    findUserData = ( id ) => {
    let _sql = `select * from users where id="${id}";`
    return query( _sql )
  }
  console.log('new',findUserData(deId));

    // connection.query(`select * from userinfo where id = ${deId}`, (error, results, fields) => {
    //     if (error) throw error;
    //     console.log('mysql');
    //     if (results.length == 0) {
    //         data.status = 9;
    //         data.message = '无此用户';
    //     }
    //     else {
    //         console.log(results[0])
    //         data.userData = {
    //             userId: results[0].id,
    //             userName: results[0].username,
    //             // content: results[0].content,
    //         };
    //     }
    //     ctx.response.body = JSON.stringify(data);
    //     // response.end(JSON.stringify(data));
    // });
}

module.exports = {
    'POST /userinfo/': fn_userinfo
};

