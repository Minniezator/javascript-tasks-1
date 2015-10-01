var hours = process.argv[2];
var minutes = process.argv[3];

function isNull(num)
{
	num = num==='' ? '-':num;
	return num;
}

function printTime(hours, minutes)
{
	hours = isNull(hours);
	minutes = isNull(minutes);
	console.log(hours + ':' + minutes);
}

function convertTime(num)
{
	var units = ['', 'I', 'II','III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
	var decade = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
	
	var integerPart = Math.floor(num/10);
	var fractionalPart = num%10;
	var romanTime = decade[integerPart] + units[fractionalPart];
	
	return romanTime;
}

if(hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || isNaN(hours) || isNaN(minutes) || hours === undefined === minutes)
{
	console.log('Время указано не верно');
}
else
{
	var romanHours = convertTime(hours);
	var romanMinutes = convertTime(minutes);
	printTime(romanHours, romanMinutes);
}
