export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  get maxStudentsSize() {
    return this._maxStudentsSize;
  }

  set maxStudentsSize(newSize) {
    if (typeof newSize === 'number' && newSize > 0) {
      this._maxStudentsSize = newSize;
    } else {
      console.error(
        'Invalid input. Please provide a positive number for maxStudentsSize.',
      );
    }
  }
}
