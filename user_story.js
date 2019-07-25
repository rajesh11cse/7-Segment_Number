var fs = require('fs');

// Get 7 segment number by this function.
function get7segment(ascii) {

  // var ddd = ' _  _  _        _     _  _ '.match(/.../g)
  // console.log(ddd)
  // console.log(ascii)
  // console.log('======')
  return ascii.
    split('\n').
    reduce(function (r, a, i) {
      // console.log(r, a, i)
      // a.match(/.../g) spli up string by 3 characters like [ ' _ ', ' _ ', ' _ ', '   ', '   ', ' _ ', '   ', ' _ ', ' _ ' ]
      a.match(/.../g).forEach(function (b, j) {
        // console.log(b, j)
        r[j] = r[j] || [];// get empty array if undefined or null
        r[j][i] = b;// 2D array
      });
      // console.log(r)
      return r;
    }, []). // return array r with type [](array empty on no element)
    map(function (a) {
      // console.log(a)
      // a is an array of 2D array
      a = a.join('') //  array to single string.
// console.log(a)
      //   _0_    
      // |5   1|
      //   _6_  
      // |4   2|
      //   _3_


      var bits = {
        63: 0,
        6: 1,
        91: 2,
        79: 3,
        102: 4,
        109: 5,
        125: 6,
        7: 7,
        127: 8,
        111: 9,
        0: ' '
      },
        myvar = '909561432'.split('').reduce(function (r, v, i) {
            return r + (a[i] !== ' ' && 1 << v); // Left shift(v square of 2)
        }, 0);
        console.log(myvar)
      return myvar in bits ? bits[myvar] : '?'; // ? is an ILLEGAL character
    }).
    join('');  // remove quotes
}

// Print invoice function.
function printInvoice(ascii) {
  var data = get7segment(ascii);
  console.log(data)
  data += '\n'
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
module.exports.user_story = function (req, res) {
  // read input from txt file.
  fs.readFile('./input_user_story_1.txt', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    var lines = data.split("\n");
    var strr0 = "";
    // clear data from output file on start.
    fs.writeFile('output_user_story_1.txt', '', function () { console.log('file cleared') });
    for (var i = 0; i < lines.length; i++) {
      // Select top 3 lines
      var strr0 = lines[i + 0] + '\n' + lines[i + 1] + '\n' + lines[i + 2]
      // Call print invoice function.
      if (printInvoice(strr0)) {
        strr0 = "";
        i = i + 3; // Move to 3+1 line
      } else {
        break;
      }
    }
    // res.end(`handled by process ${pid}`);
    res.end("Data appended to file output_user_story_1.txt");
  });
};
