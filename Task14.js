var a=2, b=1;
var result = --a - --b + ++b + b--;
document.write('a is 1 <br> b is 0 <br> Result is '+result+'<br><br>');
document.write('Explanation <br>');
document.write('--a is 1 <br>');
document.write('--a - --b is 1 <br>');
document.write('--a - --b + ++b is 2 <br>');
document.write('--a - --b + ++b + b-- is 3 <br>');

document.write('<br>End result of express <br>');
document.write('a is '+a+ ' <br> b is '+b+ '<br> Result is '+result+'<br><br>');


