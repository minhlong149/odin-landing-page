function add7(num: number) {
  return num+7;
}

function multiply(a, b:number) {
  return a*b;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function lastLetter(str:string) {
  return str.slice(str.length-1);
}

console.log(lastLetter("oH mY GoD"));

// capitalize("oH mY GoD")
