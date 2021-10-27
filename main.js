/**
 * Giới thiệu về 1 số hàm built-in
 * 1. alert
 * 2.console 
 * 3confirm
 * 4.prompt
 * 5.set timeout
 * 6.set interval
 */
alert('xin  chào bae')
var full;
full='mình lại làm ngiu nhé';
alert(full);
console.log('đây là dòng log')
confirm('xác nhận để làm ngiu')
var naame=prompt('xác nhận tên ngiu')
if(naame=='Quyên'||naame=='Bùi Thị Hồng Quyên'||naame=='quyên') alert('ồ đúng rồi')
else {
    alert('sai rồi');
    while(1){
        naame=prompt('xác nhận lại tên ngiu');
        if(naame=='Quyên'||naame=='Bùi Thị Hồng Quyên'||naame=='quyên')
         {
            alert('ồ đúng rồi');
            break;
        }
        else alert('vẫn sai , đây ko phải tên ngiu mình rùi');
    }
} 

setTimeout(function() {
alert('cảm ơn đã làm ngiu')
},1300)
setInterval(function(){
    console.log('đây là lỗi ko phải chức năng'+String.random)
},1000)