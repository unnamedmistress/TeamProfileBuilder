const Engineer = require("../lib/Engineer")
const engineer = new Engineer ('John', '87', 'email@email.com', 'www.github.com');
test('should be able to get the objects from the engineer constructor', () => {
    expect(engineer.name).toEqual('John');
    expect(engineer.id).toEqual('87');
    expect(engineer.email).toEqual('email@email.com');
    expect(engineer.github).toEqual('www.github.com');
});

test('should be able to get name from getName()', () => {
    expect(engineer.getName()).toEqual('John');
});
test('should be able to get ID from getId()', () => {
    expect(engineer.getId()).toEqual('87');
});
test('should be able to get email from getEmail()', () => {
    expect(engineer.getEmail()).toEqual('email@email.com');
});
test('should be able to get role from getRole()', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});
test('should be able to get officeNumber from getOfficeNumber()', () => {
    expect(engineer.getGithub()).toEqual('www.github.com');
});