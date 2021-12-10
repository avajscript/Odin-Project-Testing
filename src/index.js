function capitalize(str) {
  let newStr = str.toLowerCase().split("");
  let letter = newStr.shift();
  letter = letter.toUpperCase();
  newStr.unshift(letter);
  return newStr.join("");
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }
};

const dict = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5],
  ["f", 6],
  ["g", 7],
  ["h", 8],
  ["i", 9],
  ["j", 10],
  ["k", 11],
  ["l", 12],
  ["m", 13],
  ["n", 14],
  ["o", 15],
  ["p", 16],
  ["q", 17],
  ["r", 18],
  ["s", 19],
  ["t", 20],
  ["u", 21],
  ["v", 22],
  ["w", 23],
  ["x", 24],
  ["y", 25],
  ["z", 26]
];

const caesarCipher = (str) => {
  if (str.length === 1) {
    return str;
  }
  let upperCase;
  str = str.split("").map((letter) => {
    if (letter === letter.toUpperCase()) {
      upperCase = true;
    } else {
      upperCase = false;
    }
    letter = letter.toLowerCase();
    let index = dict.findIndex((pair) => {
      return letter === pair[0];
    });
    if (index === -1) {
      return letter;
    } else {
      if (dict[index][1] == 26) {
        if (upperCase) {
          return "A";
        } else {
          return "a";
        }
      }
    }
    if (upperCase) {
      return dict[index + 1][0].toUpperCase();
    } else {
      return dict[index + 1][0];
    }
  });
  return str.join("");
};

const analyzeArray = (arr) => {
  const min = Math.round(Math.min(...arr));
  const max = Math.round(Math.max(...arr));
  const total = arr.reduce((prev, current) => {
    return prev + current;
  });
  const length = arr.length;
  const average = Math.round(total / length);

  return {
    average,
    min,
    max,
    length
  };
};

console.log(analyzeArray([2, 4, 6, 8]));
export { capitalize, reverseStr, calculator, caesarCipher, analyzeArray, dict };
