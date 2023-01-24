const generateTeam = (team) => {
    console.log(team);
    const html = [];
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card"><div class = 'card-header'> 
        <i class = 'fas fa-mug-hot'></i> <strong> ${manager.name} Manager</strong> </div>
        <ul class = 'list-group list-group-flush'>
        <li class = 'list-group-item'> <strong>ID: </strong>${manager.id}</li>
        <li class = 'list-group-item'> <strong>email:</strong> <a href = "mailto:${manager.email}">${manager.email}</a> </li>
        <li class = 'list-group-item'> <strong>Office Number:</strong> ${manager.officeNumber} </li>
        </ul>
        </div></div>
        `
        html.push(managerHtml);
}
const generateEngineer = (engineer) => {
    let engineerHtml = `
    <div class="card"><div class = 'card-header'>
    <i class='fas fa-briefcase'></i> <strong> ${engineer.name} Engineer</strong> </div>
    
    <ul class = 'list-group list-group-flush'>
    <li class = 'list-group-item'><strong> ID: </strong>${engineer.id}</li>
    <li class = 'list-group-item'><strong> email:</strong> <a href = "mailto:${engineer.email}">${engineer.email}</a> </li>
    <li class = 'list-group-item'> <strong> Github: </strong> <a href = "https://${engineer.github}">${engineer.github}</a> </li>
    </ul>
    </div></div>
    `
    html.push(engineerHtml);
}
const generateIntern = (intern) => {
    let internHtml = `
    <div class="card"><div class = 'card-header'>
    <i class='fas fa-glasses'></i><strong> ${intern.name}  Intern </strong> </div>
    <ul class = 'list-group list-group-flush'>
    <li class = 'list-group-item'><strong> ID:</strong> ${intern.id}</li>
    <li class = 'list-group-item'> <strong>email:</strong> <a href = "mailto:${intern.email}">${intern.email} </a> </li>
    <li class = 'list-group-item'> <strong>School:</strong> ${intern.school} </li>
    </ul>
    </div> </div>
    `
    html.push(internHtml);
}
for (let i = 0; i < team.length; i++) {
    if(team[i].getRole() === 'Manager'){
        generateManager(team[i]);
    }  if(team[i].getRole() === 'Engineer'){
        generateEngineer(team[i]);
    }  if(team[i].getRole() === 'Intern'){
        generateIntern(team[i]);
    }
}

return html.join('');
}
module.exports = team => {
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="/dist/style.css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
          <link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
          <title>Team Builder</title>
      </head>
      <header>
          <h1>Team builder</h1>
     
      </header>
      <body>
        <main> ${generateTeam(team)}  </main>
      </body>
      </html>
    `
}