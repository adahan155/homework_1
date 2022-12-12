const student = "Айдарбеков Адахан Таалайбекович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;
let a = prompt("Введите предпологаемый счёт первой команды")//ввод данных счёта
let b = prompt("Введите предпологаемый счёт вторй команды")//ввод данных счёта
let c = prompt("Введите истиный счёт первой команды ")//ввод данных счёта
let d = prompt("Введите истиный счёт второй команды") //ввод данных счётa
let real_score = [c,d];
let guess_score = [a,b];
if
(a>b) {real_score=0}
else if (a==b) {real_score = 1}
else
real_score = 2
if  
(c>d) {guess_score=0}
else if
(c==d) {guess_score=1}
else 
guess_score=2 
if (b==d,a==c) 
{
    alert( "Счёт и исход были угаданы верно!" );
 }  
else if (real_score==guess_score)
{
    alert( "Счёт не угадали, но исход угадали" );
}
else
{ 
  alert( "Ни счёта, ни исхода не угадали" )
}