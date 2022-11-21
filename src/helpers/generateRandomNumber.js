//generateRandomNumber function generates new number,
//checks if the new number is unique it returns new array
//if it is not, generates new one

export const generateRandomNumber = (arr) => {

  let newNumber = Math.round(Math.random() * 1000);

  const arrCopy = [...arr];

  arrCopy.push(newNumber);

  const arrSet = new Set(arrCopy);
  
  if(arrCopy.length === arrSet.size) {
    return arrCopy;
  }else {
    return generateRandomNumber(arr);
  }
}