// import { url } from "inspector";

//  const arg = url.parse(request.url).query;
//  const params = querystring.parse(arg);


var fn_list = async (ctx, next) => {
    const arg =url.parse(ctx.url).query;
    const params = ctx.querystring(arg);
    const numPerPage = 4;
    const page = (params.page !== undefined) ? params.page : 0;
    var data = {
        count: 0,
        status: 0,
        message: "",
        articles: [],
    };


    connection.query(`select * from article limit ${numPerPage} offset ${page * numPerPage}`, (error, results, fields) => {
        if (error) throw error;
        connection.query('select count(*) as cnt from article ;', (cntError, cntResults, cntFields) => {
            if (cntError) throw cntError;
            data.count = cntResults[0].cnt;
            data.articles = results.map(element => {
                return {
                    number: element.id,
                    title: element.title,
                    content: element.content,
                }
            });
            ctx.response.body = JSON.stringify(data);
            // response.end(JSON.stringify(data));
        })

    })
    return;
}

module.exports = {
    'POST /list/:page': fn_list
};