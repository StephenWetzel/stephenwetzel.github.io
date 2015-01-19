//Some common javascript functions used by my pages


function avg(array)
{//finds the mean of an array of numbers
	var size = array.length;
	var total = 0;
	
	for (var i = 0; i < size; i++)
	{//add them up
		total += array[i];
	}
	return total / (size);
}

function ln(arg)
{//natural log
	return log(arg, 2.7182818284);
}

function lg(arg)
{//common log
	return log(arg, 10);
}

function lb(arg)
{//binary log
	return log(arg, 2);
}

function log(arg, base)
{//finds arbitrary base logs
	//WARNING: Tends to give slightly off answers, eg log(1000,10) = 2.999999999999
	base = typeof base !== 'undefined' ? base : 10; //default to base 10
	return Math.log(arg) / Math.log(base);
}

function roundTo(num, digits)
{//rounds num to #digits past decimal
	digits = typeof digits !== 'undefined' ? digits : 2; //default to 2 digits
	var offset = Math.pow(10,digits);
	var num = Math.round(offset*num)/offset
	return num;	
}

function addCommas(nStr)
{//adds commas to a long number
	//23.11027871912935
	nStr += '';
	x = nStr.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) 
	{//replace the comma here with a different delimiter if you'd like
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function sciNotation(str)
{//converts to a more human readable scientific notation
	str=str.replace(/e\-/,' x 10^-');
	str=str.replace(/e\+/,' x 10^');
	return str;	
}



