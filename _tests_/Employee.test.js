const Employee = require("../lib/Employee")
const employee = new Employee ('John', '87', 'email@email.com');
test('should be able to get the objects from the employee constructor', () => {
    expect(employee.name).toEqual('John');
    expect(employee.id).toEqual('87');
    expect(employee.email).toEqual('email@email.com');
});

test('should be able to get name from getName()', () => {
    expect(employee.getName()).toEqual('John');
});
test('should be able to get ID from getId()', () => {
    expect(employee.getId()).toEqual('87');
});
test('should be able to get email from getEmail()', () => {
    expect(employee.getEmail()).toEqual('email@email.com');
});
test('should be able to get role from getRole()', () => {
    expect(employee.getRole()).toEqual('Employee');
});