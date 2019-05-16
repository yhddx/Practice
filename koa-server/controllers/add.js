var fn_add = async (ctx, next) => {
    var data = {
        status: 0,
        message: "",
        articles: [],
    };
    const editArticle = ctx.request.body;    
    // const editArticle = JSON.parse(body);
    connection.query(`insert into article set title='${editArticle.title}', content='${editArticle.content}', author='yhddx', create_time=now(), modify_time=now();`, (error, results, fields) => {
        if (error) throw error;
        data.message = "update success";
        data.article = {
            number: results.insertId,
            title: '',
            content: '',
        };
        data.articles.number = results.insertId;

        ctx.response.body = JSON.stringify(data);
        // response.end(JSON.stringify(data));
    })
    return;
}

module.exports = {
    'POST /add/': fn_add
};