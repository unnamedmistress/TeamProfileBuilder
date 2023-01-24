const questions = [
    {
      type: 'input',
      message: 'What is your name? (required)',
      name: 'name',
      validate: nameInput => {
          if(nameInput) {
              return true;
          }else {
              console.log('You must provide a name');
              return false;
          }
      }
      
    },
    {
      type: 'input',
      message: 'What is your id (required)',
        name: 'id',
        validate: idInput => {
          if(idInput) {
              return true;
          }else {
              console.log('You must provide a id');
              return false;
          }
      }
    },
    {
      type: 'input',
      message: 'What is your email address? (required)',
      name: 'email',
      validate: emailInput => {
          if(emailInput) {
              return true;
          }else {
              console.log('You must provide an email address');
              return false;
          }
      }
      
    },
    {
      type: 'input',
      message: 'Paste your GitHub URL here',
      name: 'github',
      
    },
    {
      type: 'input',
      message: 'What is your office Number?',
      name: 'officeNumber',
      
    },
    {
      type: 'input',
      message: 'What school do you Attend?',
      name: 'school',
      
    },
  ];
  function init() {
    
  inquirer
  .prompt(questions)
     .then((answers) => {
      const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembers.push(manager);
      promptMenu();
     })
  };

  
  fs.writeFile(filename, JSON.stringify(questions && answers, null, '\t'), (err) => {
    if (err) throw err;
    console.log(answers);
    fs.readFile(filename, (err, data) => {
      if (err) throw err;
      const jsonData = JSON.parse(data);
      let contents = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="/dist/style.css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
          <title>Team Builder</title>
      </head>
      <header>
          <h1>Team builder</h1>
          <h2>Title: ${jsonData.name}'s Portfolio</h2>
     
      </header>
      <body>
           <h3 class = "component">Location: ${jsonData.id} <br>
           ${jsonData.school}\n<br>
          ${jsonData.email}</h3>
      </body>
      </html>`;
     
      fs.writeFile("dist/team.html", contents, (err) => {
          if (err) throw err;
          console.log("HTML file created");});

      })
});
});}
// Function call to initialize app
init();