var hours = process.argv[2];
var minutes = process.argv[3];

function changeIfNulle(num)
{
	num = num === '' ? '-' : num;
	return num;
}

function printTime(hours, minutes)
{
	console.log(hours + ':' + minutes);
}

function convertToRoman(num)
{
	var units = ['', 'I', 'II','III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
	var decade = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
	
	var integerPart = Math.floor(num/10);
	var fractionalPart = num%10;
	var romanTime = decade[integerPart] + units[fractionalPart];
	
	return changeIfNulle(romanTime);
}

if(hours >= 0 || hours <= 23 || minutes >= 0 || minutes <= 59)
{
	var romanHours = convertToRoman(hours);
	var romanMinutes = convertToRoman(minutes);
	printTime(romanHours, romanMinutes);
}
else
{
	console.log('ОШИБКА! Время указано не верно.\nНа вход подается два числа, разделенных пробелом: часы и минуты.\nЧасы - число от 0 до 23.\nМинуты - число от 0 до 59.');	
}
