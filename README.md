### About
Dùng để chuyển chuỗi có dấu thành không dấu (có tùy chọn)
```javascript
const vnmToAlphabet = require('vnm-to-alphabet');

let name = 'Tên tìm kiếm';
let newData = {
    name: name,
    nameSearch: vnmToAlphabet(name, 'capitalize')
}
console.log(newData);
// { name: 'Tên tìm kiếm', nameSearch: 'Ten Tim Kiem' }
```
### Install
```
npm i -s vnm-to-alphabet
```
### Usage

```javascript
const vnmToAlphabet = require('vnm-to-alphabet');
```
or
```javascript
import vnmToAlphabet from 'vnm-to-alphabet';
```
```javascript
let option = 'capitalize'; // uppercase, lowercase, default
let string1 = 'Dùng để chuyển chuỗi có dấu thành không dấu';
let string2 = vnmToAlphabet(string1, option);
console.log(string2);
// Dung De Chuyen Chuoi Co Dau Thanh Khong Dau
```
