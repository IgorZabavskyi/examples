/**
 * Created by Ig on 04/07/2016.
 */
/* Теперь ищем простые числа... самый простой и тяжеловесный алгоритм - "в лоб" - берем каждое из чисел и делим на последовательность чисел, которая состоит из корень из N значений.  */
console.time('test');
var simple = [];
var flag = 1;
capasity = 0;
simple[simple.length] = 2;

function isNotSimple(element){
    // ======================
    if (number<element*element) return 0;
    // ======================
    var rez = number % element;
    capasity ++;
    return (!rez);
}
/* Если число не делится нацело на число из простого списка, то оно добавляется в простой список */
for(var number=3; number<1001; number++){
    flag = simple.some(isNotSimple);
    if (!flag){
        simple[simple.length] = number;
    }
}
console.timeEnd('test');
console.log(simple);
console.warn("Made iterations: " + capasity);

