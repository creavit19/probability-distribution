function tilWhileNot(a){
	/*
	Функция возвращает false, но
	в редких случаях возвращает truse,
	При помощи необязательного параметра а, можно
	регулировать частоту выдачи функцией значения truse,
	задавая значения от 0 до 100 (процент распределения вероятности).
	*/
	if(a === undefined) a = 97;
	a = a/100;
	return Math.random() >= a;
}
// end of function tilWhileNot ----------------------

var outf = document.getElementById('outf');
var outt = document.getElementById('outt');
research();
function research(){
	var inp = parseInt(document.getElementById('itr').value);
	var f = 0;
	var t = 0;
	var i = 0;
	var til = false;
	do{
		til = tilWhileNot();
		f += til ? 0 : 1;
		t += til ? 1 : 0;
		i++;
	}while(i < inp);
	outf.innerText = 'Значений false: ' + Math.round(f*100/inp) + '%';
	outt.innerText = 'Значений true: ' + Math.round(t*100/inp) + '%';
}