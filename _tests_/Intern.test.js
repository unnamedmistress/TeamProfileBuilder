const Intern = require("../lib/Intern")
const intern = new Intern ('John', '87', 'email@email.com', 'UCF');
test('should be able to get the objects from the intern constructor', () => {
    expect(intern.name).toEqual('John');
    expect(intern.id).toEqual('87');
    expect(intern.email).toEqual('email@email.com');
    expect(intern.school).toEqual('UCF');
});

test('should be able to get name from getName()', () => {
    expect(intern.getName()).toEqual('John');
});
test('should be able to get ID from getId()', () => {
    expect(intern.getId()).toEqual('87');
});
test('should be able to get email from getEmail()', () => {
    expect(intern.getEmail()).toEqual('email@email.com');
});
test('should be able to get role from getRole()', () => {
    expect(intern.getRole()).toEqual('Intern');
});
test('should be able to get officeNumber from getOfficeNumber()', () => {
    expect(intern.getSchool()).toEqual('UCF');
});