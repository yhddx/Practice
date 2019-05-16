var fn_detail = async (ctx, next) => {
    var data = {
        status: 0,
        message: "",
        article: {},
    };
    const id = ctx.params.id;
    // console.log(id);
    connection.query(`select * from article where id = ${id}`, (error, results, fields) => {
        if (error) throw error;
        if (results.length == 0) {
            data.status = 1;
            data.message = '无数据';
        }
        else {
            data.article = {
                number: results[0].id,
                title: results[0].title,
                content: results[0].content,
            };
        }
        ctx.response.body = JSON.stringify(data);
        // response.end(JSON.stringify(data));
    });
    return;
}

module.exports = {
    'POST /detail/:id': fn_detail
};