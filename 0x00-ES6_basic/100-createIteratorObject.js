export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;

  const iterator = {
    departments: Object.keys(allEmployees),
    currentDepartmentIndex: 0,
    currentEmployeeIndex: 0,

    next() {
      if (this.currentDepartmentIndex < this.departments.length) {
        const currentDepartment = this.departments[this.currentDepartmentIndex];
        const employeesInCurrentDepartment = allEmployees[currentDepartment];

        if (this.currentEmployeeIndex < employeesInCurrentDepartment.length) {
          const currentEmployee =
            employeesInCurrentDepartment[this.currentEmployeeIndex];
          this.currentEmployeeIndex++;
          return { value: currentEmployee, done: false };
        } else {
          // Move to the next department
          this.currentDepartmentIndex++;
          this.currentEmployeeIndex = 0;
          return this.next();
        }
      } else {
        // No more departments or employees
        return { done: true };
      }
    },
  };

  return iterator;
}
