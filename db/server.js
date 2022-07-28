const inquirer = require('inquirer')
const connection = require('./connection')
function init() {  
    inquirer 
        .prompt([
            {
                type: 'list',
                name: 'Explore_Database',
                choices: 
                ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'add an employee',
                'Update an employee role',
                'Quit']
            },
        ])
        .then((choice) => {
            switch (choice.Explore_Database) {
                case 'View all departments':
                    viewDepartments()
                    break;
                case 'View all roles':
                    viewRoles()
                    break;
                case 'View all employees':
                    viewEmployees()
                    break;
                case 'Add a department':
                    addDepartments()
                    break;
                case 'Add a role':
                    addRole()
                    break;
                case 'add an employee':
                    addEmployee()
                    break;
                case 'Update an employee role':
                    updateEmployee()
                    break;
                case 'Quit':
                    WantToExit
                default: 'No value was Inputted'
                    break;

            }
        })

    function viewDepartments() {
        connection.query('SELECT * FROM department;', (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.table([result])
            }
        });
        // connection.getDepartment()
        //     .then(([databases]) => {
        //         console.log(databases)
        //     })
        //     .then(() => init());
    }
    function viewRoles() {
        connection.query('SELECT * FROM ;', (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.table([result])
            }
            init();
        });
        
    }
    function viewEmployees() {
        connection.query('SELECT * FROM ;', (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.table([result])
            }
        });
    }
    function addDepartments() {
        inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'DepartmentName',
                    message: 'What is the name of the department you would like to add?'
                }
                .then((answer) => {
                })
            ])
    }
    function addRole() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'RoleName',
                    message: 'What it the name of the role?'
                },
                {
                    type: 'input',
                    name: 'RoleSalary',
                    message: 'What is the salary for this role?'
                },
                {
                    type: 'input',
                    name: 'DepartmentName',
                    message: 'What department does this role work in?'
                }
            ])
            .then((answers) => {

            })
    }
    function addEmployee() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstname',
                    message: 'What is the first name of this employee?'
                },
                {
                    type: 'input',
                    name: 'lastname',
                    message: 'What is the last name of this employee?'
                },
                {
                    type: 'input',
                    name: 'role',
                    message: 'What is this employees role?'
                },
                {
                    type: 'input',
                    name: 'manager',
                    message: 'Who is this employees manager?'
                }
            ])
            .then((answers) => {

            })
    }
    function updateEmployee() {

    }
    const WantToExit = () => {
        return init();
    }
}
init();
