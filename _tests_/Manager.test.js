const Manager = require("../lib/Manager")
const manager = new Manager ('John', '87', 'email@email.com', '7275205180');
//Testing Manager constructor
test('should be able to get the objects from the manager constructor', () => {
    expect(manager.name).toEqual('John');
    expect(manager.id).toEqual('87');
    expect(manager.email).toEqual('email@email.com');
    expect(manager.officeNumber).toEqual('7275205180');
});

test('should be able to get name from getName()', () => {
    expect(manager.getName()).toEqual('John');
});
test('should be able to get ID from getId()', () => {
    expect(manager.getId()).toEqual('87');
});
test('should be able to get email from getEmail()', () => {
    expect(manager.getEmail()).toEqual('email@email.com');
});
test('should be able to get role from getRole()', () => {
    expect(manager.getRole()).toEqual('Manager');
});
test('should be able to get officeNumber from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toEqual('7275205180');
});