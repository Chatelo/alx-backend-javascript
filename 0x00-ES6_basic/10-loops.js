export default function appendToEachArrayValue(array, appendString) {
  let index = 0;

  for (let value of array) {
    array[index] = appendString + value;
    index++;
  }

  return array;
}
