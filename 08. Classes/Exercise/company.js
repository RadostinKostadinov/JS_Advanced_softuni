class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        for (const argument of arguments) {
            if (argument == '' || argument == undefined || argument == null) {
                throw Error('Invalid input!');
            }
        }

        if (Number(salary) < 0) {
            throw Error('Invalid input!');
        }

        const employee = {
            username,
            salary: Number(salary),
            position,
        };

        let isAlreadyInArray = false;
        for (let i = 0; i < this.departments.length; i++) {
            if (this.departments[i][0] == department) {
                this.departments[i].push(employee);
                isAlreadyInArray = true;
                return `New employee is hired. Name: ${username}. Position: ${position}`;
            }
        }

        if (!isAlreadyInArray) {
            this.departments.push([department, employee]);
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        }
    }

    bestDepartment() {
        const myObj = {};

        for (const department of this.departments) {
            let avgSalary = 0;
            for (let i = 1; i < department.length; i++) {
                avgSalary += department[i].salary;
            }
            avgSalary = avgSalary / (department.length - 1);
            myObj[department[0]] = avgSalary;
        }

        const sorted = Object.entries(myObj);
        const bestDep = sorted.sort(
            (a, b) => {
                return b[1] - a[1];
            })[0][0];

        let myStr = [];
        for (const department of this.departments) {
            if (department[0] === bestDep) {
                myStr.push(`Best Department is: ${bestDep}`);
                myStr.push(`Average salary: ${myObj[bestDep].toFixed(2)}`);
                department.sort((empA, empB) => {
                    if (empB.salary - empA.salary != 0) {
                        return  empB.salary - empA.salary;
                    } else {
                        return empA.username.localeCompare(empB.username);
                    }
                });
                for (let i = 1; i < department.length; i++) {
                    myStr.push(`${department[i].username} ${department[i].salary} ${department[i].position}`);
                }
            }
        }
        return myStr.join('\n');
    }

}


let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
