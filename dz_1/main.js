	 var str = "*";

while (str.length<=7){

     console.log(str);

     str+="*";

}


var num = 1;

for ( ; num < 100; num++ ) {

    if ( num % 5 === 0 && num % 3 === 0 ){

       document.write( num, " = FizzBuzz <br />" )

    }else if ( num%5 === 0 ){

       document.write( num, " = Buzz <br />" );

    }else if ( num%3 === 0 ){

       document.write( num, " = Fizz <br/ >" );

    }else{

       document.write( num, "<br/ >" );

    }

}
for (q = 1; q <= 4; q ++) {
var l = "#";
for (var cont = 1; cont < 4; cont ++)
l += ' #';
console.log(l);
var m ='';
for (var cont = 0; cont < 4; cont ++)
m += ' #';
console.log(m);
}


