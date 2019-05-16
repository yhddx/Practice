var fn_register = async(ctx, next) =>{
    var data = {
        status: 0,
        message: "",
        regData: {},
    };
    const regData = ctx.request.body;    
    // const regData = JSON.parse(body);
    connection.query(`insert into userinfo set username='${regData.regUsername}', password='${regData.regPassword}', create_time=now(), modify_time=now();`, (error, results, fields) => {
        if (error) throw error;
        data.message = "register success";

        ctx.response.body = JSON.stringify(data);
        // response.end(JSON.stringify(data));
    })
}

module.exports = {
    'POST /register/': fn_register
};