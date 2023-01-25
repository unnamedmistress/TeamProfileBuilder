const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./src/generate-site.js');
const path = require('path');
const Output = path.resolve(__dirname, 'output');
const outpath = path.join(Output, 'team.html');
const teamMembers = [];

//  array of questions

const promptMenu = () => {
    return inquirer.prompt([{
        type:'list',
        name: 'menu',
        message: 'Please pick an option',
        choices: ['add a Manager', 'add an Engineer', 'add an Intern', 'finish building my team'],
    }])
    .then(user => {
        switch (user.menu){
            case 'add an Engineer':
                promptEngineer();
                break;
                case 'add a Manager':
                    promptManager();
                    break;
                    case 'add an Intern':
                        promptIntern();
                        break;
                        default:
                            buildTeam();
                            


        }
    });
};

const promptEngineer = () => {
console.log('Add a Engineer');
return inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is the name of the Engineer?',
    validate: engineerInput => {
        if(engineerInput) {
            return true;
        }else {
            console.log('You must provide a name');
            return false;
        }
    }

},
{
    type: 'input',
    name: 'id',
    message: 'What is the ID of the Engineer?',
    validate: engineerid => {
        if(engineerid) {
            return true;
        }else {
            console.log('You must provide a ID');
            return false;
        }
    }

},
{
    type: 'input',
    name: 'email',
    message: 'What is the email of the Engineer?',
    validate: engineeremail => {
        if(engineeremail) {
            return true;
        }else {
            console.log('You must provide a email');
            return false;
        }
    }

},
{
    type: 'input',
    name: 'github',
    message: 'What is the URL of your Github?',
    validate: githubInput => {
        if(githubInput) {
            return true;
        }else {
            console.log('You must provide a Github');
            return false;
        }
    }

}


]).then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
    promptMenu();
   })
};

const promptManager = () => {
    console.log('Add a Manager');
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Manager?',
        validate: ManagerInput => {
            if(ManagerInput) {
                return true;
            }else {
                console.log('You must provide a name');
                return false;
            }
        }
    
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the Manager',
        validate: managerid => {
            if(managerid) {
                return true;
            }else {
                console.log('You must provide a ID');
                return false;
            }
        }
    
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the Manager?',
        validate: manageremail => {
            if(manageremail) {
                return true;
            }else {
                console.log('You must provide a email');
                return false;
            }
        }
    
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        validate: numberInput => {
            if(numberInput) {
                return true;
            }else {
                console.log('You must provide a number');
                return false;
            }
        }
    
    },
    
    
    ]).then((answers) => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
       })
    };

    const promptIntern = () => {
        console.log('Add a Intern');
        return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?',
            validate: internInput => {
                if(internInput) {
                    return true;
                }else {
                    console.log('You must provide a name');
                    return false;
                }
            }
        
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Intern?',
            validate: internid => {
                if(internid) {
                    return true;
                }else {
                    console.log('You must provide a ID');
                    return false;
                }
            }
        
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Intern?',
            validate: internemail => {
                if(internemail) {
                    return true;
                }else {
                    console.log('You must provide a email');
                    return false;
                }
            }
        
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of your school?',
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                }else {
                    console.log('You must provide a school name');
                    return false;
                }
            }
        
        },
        
        
        ]).then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(intern);
            promptMenu();
           })
        };
//Build your team by writing to file team.html
        const buildTeam = () => {
            fs.writeFileSync(outpath, generateSite(teamMembers), 'utf-8');
            console.log('Team has been built successfully!');
        }
        promptManager();

       


