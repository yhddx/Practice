'use strict';
console.log('current js file:'+__filename);
console.log('current js file:'+__filename);

process.name = 'Sample Nodejs';
//process.argv存储了命令行参数
console.log('arguments:'+ JSON.stringify(process.argv));

//process.cwd()返回当前工作目录
console.log('cwd:' + process.cwd());


var d = '/private/tmp';//linux环境下为/
if(process.platform === 'win32'){
    d = 'C:\\Windows\\system32';
}

process.chdir(d);//更改当前目录

console.log('cmd:' + process.cwd());

// process.nextTick()将在下一轮事件循环中调用:
process.nextTick(function(){
    console.log('cwd:' + process.cwd());
})

// 程序即将退出时的回调函数:
process.on('exit', function(code){
    console.log('about to exit with code:' + code);
});

