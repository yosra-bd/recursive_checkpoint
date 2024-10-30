function isLeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0 
}

function ticketPrice(age) {
    return (age  <=12 )? 10 : (age>=13 && age<=17)? 15 :  20   
}

function clothing(rain) {
    return (rain)?'wear more clothing and bring an umbrella' : 'wear just a jacket'
    
}

const isPalindrome = (ch) => {
    const n = ch.length;
    if(ch[0].test(' ,./*')){
        return isPalindrome(ch.substring(1,n))
    }
    if(ch[n-1].test(' ,./*')){
        return isPalindrome(ch.substring(0,n-1))
    }

    if (n <= 1) {
        return true;
    }
    if (ch[0] !== ch[n - 1]) {
        return false;
    }
    return isPalindrome(ch.substring(1, n - 1));
};

function power(n) {
    if (n == 1){
        return 1
    }else{
        return n * power(n-1)
    }
}

function Fibonacci(n) {
    if ( n <= 1){
        return 1
    }else{
        return Fibonacci(n-1) + Fibonacci(n-2)
    }
    
}
console.log(clothing(false))
