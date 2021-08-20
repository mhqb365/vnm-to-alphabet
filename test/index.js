const vnmToAlphabet = require('../index');

let option = 'capitalize'; // uppercase, lowercase, default
let string1 = 'Dùng để chuyển chuỗi có dấu thành không dấu';
let string2 = vnmToAlphabet(string1, option);
console.log(string2);

let name = 'Tên tìm kiếm';
let newData = {
    name: name,
    nameSearch: vnmToAlphabet(name, 'capitalize')
}
console.log(newData);
// { name: 'Tên tìm kiếm', nameSearch: 'Ten Tim Kiem' }