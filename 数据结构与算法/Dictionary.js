function Dictionary(){
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.count = count;
    this.clear = clear;
    this.remove = remove; //delete 
    this.showAll = showAll;
}

function add(key,value){
    this.dataStore[key] = value;
}
function find(key){
    return this.dataStore[key];
}
function count(){
    return Object.keys(this.dataStore).length;
}

function remove(key){
    delete this.dataStore[key];
}

function showAll(){
    let keys = Object.keys(this.dataStore);

    keys.forEach(key => {
        console.log(`{${key}:${this.dataStore[key]}}`);
    });
}

function clear(){
    // this.dataStore = new Array();
    //挨个delete
    let keys = Object.keys(this.dataStore);
    keys.forEach(key => {
        delete  this.dataStore[key] ;
    });

}

var test = new Dictionary();
test.add('aa',11);
test.add('bb',11);
test.add('cc',11);
test.showAll();
console.log('=======');
test.remove('bb');
test.showAll();

console.log('===clear====');
test.clear();
test.showAll();

// 排序就是对 showAll 方法中的keys进行排序。