/**
 * Created by Ig on 07/20/2016. Created for Git
 */
var simple_rez = [];
var rez;
var count = 0;
simple_rez[simple_rez.length] = 2;
for (var i=3; i<1001; i++){
    rez = 1;
    //console.log(i);
    for (var j=0; (simple_rez[j]*simple_rez[j]) <= i;j++){
        count++;
        rez = i%simple_rez[j];
        if (!rez){
            break;
        }
    }
    if (rez){
        simple_rez[simple_rez.length] = i;
    }
        // Перебираем существующий массив простых чисел... Если находим хотя бы одно число, на которое наше число делится нацело - прекращаем перебор, если же не нашли, то добавляем это число в массив
}
console.log(count);
console.log(simple_rez);