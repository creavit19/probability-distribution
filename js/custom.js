function tilWhileNot(a){
	/*
	Функция возвращает false, но
	в редких случаях возвращает truse,
	При помощи необязательного параметра а, можно
	регулировать частоту выдачи функцией значения truse,
	задавая значения от 0 до 100 (процент распределения вероятности).
	*/
	if(a == 'unefined') a = 97;
	a = a/100;
	return Math.random() >= a;
}
var out = document.getElementById('out');
out.innerText = tilWhileNot();
