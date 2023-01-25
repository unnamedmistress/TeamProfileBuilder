class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email= email;
    }
        getName() {
            return this.name;
          };
          getId () {
            return this.id
    }
        getEmail() {
            return this.email
        };
        getRole(){
            return 'Employee'
        }
    }
// Employee constructor - the other constructors extend this one
module.exports = Employee;