/**
 * Giới thiệu về 1 số hàm built-in
 * 1. alert
 * 2.console 
 * 3confirm
 * 4.prompt
 * 5.set timeout
 * 6.set interval
 */
alert('xin  chào ngiu')
var full;
full='spacenema';
alert(full);
console.log('đây là dòng log')
confirm('xác nhận là ngiu')
prompt('xác nhận tên ngiu')
setTimeout(function() {
alert('cảm ơn ngiu đã đợi')
},1300)
setInterval(function(){
    console.log('đây là lỗi ko phải chức năng'+String.random)
},1000)