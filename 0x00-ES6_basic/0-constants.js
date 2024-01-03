export function taskFirst() {
  let task = "I prefer const when I can.";
  return task;
}

export function getLast() {
  return " is okay";
}

export function taskNext() {
  const combination = "But sometimes let";
  combination += getLast();

  return combination;
}
