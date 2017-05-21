 var fs = require('fs');
 // Get 7 segment number by this function.
 function get7segment(ascii) {
  return ascii.
  split('\n').
  reduce(function (r, a, i) {
    a.match(/.../g).forEach(function (b, j) {
          r[j] = r[j] || [];// get empty array if undefined or null
          r[j][i] = b;// Three rows here
        });
    return r;
    }, []). // return array r with type [](array empty on no element)
  map(function (a) {
      return a.join(''); // remove quotes
    }).
  map(function (a) {
    var bits = { 63: 0, 6: 1, 91: 2, 79: 3, 102: 4, 109: 5, 125: 6, 7: 7, 127: 8, 111: 9, 0: ' ' },
    myvar = '909561432'.split('').reduce(function (r, v, i) {
      return r + (a[i] !== ' ' && 1 << v);
    }, 0);
      return myvar in bits ? bits[myvar] : '?'; // ? is an ILLEGAL character
    }).
    join('');  // remove quotes
  }
  
  // Print invoice function.
  function printInvoice(ascii) {
    var data = get7segment(ascii);
    console.log(data)
    data+= '\n'
    fs.appendFile('output_user_story_1.txt', data, function (err, data) {
      if (err) {
        return console.error(err);
      }
      return true;
      //console.log('The "data to append" was appended to file!');
    });
    return true;
  }

  // User Story function.
  module.exports.user_story = function(req, res) {
    // read input from txt file.
    fs.readFile('./input_user_story_1.txt', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      var lines = data.split("\n");
      var strr0 = "";
      // clear data from output file on start.
      fs.writeFile('output_user_story_1.txt', '', function(){console.log('file cleared')});
      for(var i = 0; i<lines.length; i++){
        var strr0 = lines[i+0] + '\n' + lines[i+1] + '\n' + lines[i+2]
        // Call print invoice function.
        if(printInvoice(strr0)){
          strr0 = "";
          i = i+3;
        }else{
          break;
        }
      }
     // res.end(`handled by process ${pid}`);
      res.end("Data appended to file output_user_story_1.txt");
    });
  };