function employees(arr) {
  for (let employee of arr) {
    let employeeObj = {
      name: employee,
      personalNum: employee.length
    }
    console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNum}`);
  }
}

employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
]);