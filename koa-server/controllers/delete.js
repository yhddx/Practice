var fn_delete = async(ctx, next) => {
    var data = {
        status: 0,
        message: "",
        articles: [],
    };
    const deleteNum = ctx.request.body;
    // const deleteNum = JSON.parse(body);
    connection.query(`delete from article where id=${deleteNum};`, (error, results, fields) => {
        if (error) throw error;
        data.message = '删除成功';
        ctx.response.body = JSON.stringify(data);
        // response.end(JSON.stringify(data));
    })
    return;
}

module.exports = {
    'POST /delete/': fn_delete
};