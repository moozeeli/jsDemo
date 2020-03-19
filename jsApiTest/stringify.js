var book = [{
    name: [{ name: 11, parent: 1 },
    { name: 2 }
    ],
    age:30
}];

var book ={name:1,age:2,child:{name:2,age:1},height:100};

var invokeCount = 0;
function filter(key, value) {
    console.log(`第${++invokeCount}次调用 filter`)
    console.log("key is :", key ,key===''?'key是空格':'')
    console.log("value is :", value)
    return value;
}
var bookStr= JSON.stringify(book,filter )

var bookStr2 = JSON.stringify(book, ['name'])


console.log('bookStr1',bookStr1)
console.log('bookStr2',bookStr2)


var book = [{name:[
    {name:11,parent:1},
    {name:2}
    ]
},{
age:20
}];