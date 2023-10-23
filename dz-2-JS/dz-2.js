//задание 1  
let func = (function() {
  
    let sum = 0;
      
    let res = function(number) {
    sum += number;
    return res;
    };
    
    res.valueOf = function() {
    return sum;
    };
    
    return res;
    })();
    
    func(2)(3)(5).valueOf();


//задание 2

    const str = 'one.two.three.four.five';

function getObj(str) {
    
str = str.split('.').reverse();

let result = str.reduce((acc, a) => {
let obj = {};
obj[a] = acc;

return obj;
}, {});
  
return result;
}

getObj(str);
