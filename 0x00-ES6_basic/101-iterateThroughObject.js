export default function iterateThroughObject(reportWithIterator) {
  const iterator = reportWithIterator;

  let result = iterator.next();
  let employeesString = "";

  while (!result.done) {
    employeesString += result.value;

    result = iterator.next();

    if (!result.done) {
      employeesString += " | ";
    }
  }

  return employeesString;
}
