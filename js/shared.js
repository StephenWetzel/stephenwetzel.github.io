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

function gcd(a, b)
{//Euclid's algorithm to find the greatest common denominator
  if (b == 0) { return a; }
  else { return gcd(b, a % b); }
}

function price(p)
{//format a price
  var whole = Math.floor(p);
  var cents = Math.floor((p-whole) * 100);
  var formatted;
  formatted = ('    '+whole).slice(-4) + '.' +('00'+cents).slice(-2);
  return formatted;
}


// exampleJson = [
//   {"qty": 1, "slice": false, "diameter": 16, "price": 12},
//   {"qty": 2, "slice": false, "diameter": 14, "price": 18},
//   {"qty": 1, "slice": true,  "diameter": 16, "price": 2.5}
// ];

// exampleQueryParams = {
//   diameter: [16, 14, 16],
//   qty: [1, 2, 1],
//   price: [12, 18, 2.5],
//   slice: [false, false, true]
// }

// We want to convert between these two styles

function getQueryParams()
{
  outArray = []
  params = new URLSearchParams(location.search);
  for (const key of params.keys())
  {
    ii = 0;
    for (let value of params.get(key).split(','))
    {
      outArray[ii] = outArray[ii] ?? {};
      if (value === 'true') value = true
      if (value === 'false') value = false
      outArray[ii][key] = value;
      ii++;
    }
  }
  return outArray
}

function setQueryParams(inArray)
{
  queryParams = {}
  for (row of inArray)
  {
    for (key of Object.keys(row))
    {
      queryParams[key] = queryParams[key] ?? []
      queryParams[key].push(row[key])
    }
  }
  queryString = new URLSearchParams(queryParams).toString();
  let url = window.location.protocol + "//" + window.location.host + window.location.pathname + new URLSearchParams(queryParams).toString();
  window.history.replaceState(null, null, decodeURIComponent(`${window.location.pathname}?${queryString}`));
}
