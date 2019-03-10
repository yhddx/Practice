function people( name ){
    var pName = name || "";
    return {
        getName:function(){
            return pName;
        },

        setName:function(a){
            pName = a;
        },

        printName:function(){
            console.log(pName);
        },
        printOriginalName(){
            name = pName;
            console.log(name);
        },
    }
}

p = people("wdd");
p.printName();
p.setName("yyyy");
p.printName();
p.printOriginalName();




var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - b; // this指向obj对象
        return fn();
    }
};
console.log(obj.getAge()); // 25




ajax('http://url-1', data1, function (err, result) {
    if (err) {
        return handle(err);
    }
    ajax('http://url-2', data2, function (err, result) {
        if (err) {
            return handle(err);
        }
        ajax('http://url-3', data3, function (err, result) {
            if (err) {
                return handle(err);
            }
            return success(result);
        });
    });
});

