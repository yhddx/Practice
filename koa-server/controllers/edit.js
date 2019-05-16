var fn_edit = async(ctx, next) => {
    var data = {
        status: 0,
        message: "",
        articles: [],
    };

    const editArticle = ctx.request.body;    
    // const editArticle = JSON.parse(body);
    connection.query(`update article set title='${editArticle.title}', content='${editArticle.content}' where id=${editArticle.number};`, (error, results, fields) => {
        if (error) throw error;
        data.message = "update success";

        ctx.response.body = JSON.stringify(data);
        // response.end(JSON.stringify(data));
    })
    return;
}

module.exports = {
    'POST /edit/': fn_edit
};