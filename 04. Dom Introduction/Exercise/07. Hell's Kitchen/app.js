function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const resultBestRestParagparhEl = document.querySelector('#bestRestaurant p');
      const resultBestWorkersParagparhEl = document.querySelector('#workers p');
      let textInput = document.querySelector('#inputs textarea').value;
      const regex = /"(.+?)"/g; 
      const restObj = {};

      let arrEl = regex.exec(textInput); 
      while (arrEl != null) { 
         const restName = arrEl[1].split(' - ')[0];
         const workers = arrEl[1].split(' - ')[1].split(', ');

         let avgSalary = 0;
         let biggestSalary = 0;
         if (restObj[restName] == undefined) {
            restObj[restName] = {};
            restObj[restName].name = restName;
            restObj[restName].workers = {};
         }

         for (const worker of workers) {
            let [name, salary] = worker.split(' ');
            salary = Number(salary);
            restObj[restName].workers[name] = salary;
         }
         
         let sortedWorkers = Object.entries(restObj[restName].workers).sort((a, b) => {
            return b[1] - a[1];
         });

         delete restObj[restName].workers;
         restObj[restName].workers = {};
         sortedWorkers.forEach(worker => {
            restObj[restName].workers[worker[0]] = Number(worker[1]);
            avgSalary += Number(worker[1]);
            if(biggestSalary < Number(worker[1])) {
               biggestSalary = Number(worker[1]);
            }
         });

         avgSalary = avgSalary / sortedWorkers.length;
         restObj[restName].avgSalary = Number(avgSalary.toFixed(2));
         restObj[restName].biggestSalary = Number(biggestSalary.toFixed(2));
         arrEl = regex.exec(textInput);
      }

      function findBestRestaurant(objOfRestaurants) {
         const arr = Object.entries(objOfRestaurants);

         let highestAvgSalary = 0;
         let index = 0;
         for (let i = 0; i < arr.length; i++) {
            if (arr[i][1].avgSalary > highestAvgSalary) {
               highestAvgSalary = arr[i][1].avgSalary;
               index = i;
            }
         }
         return objOfRestaurants[arr[index][0]];

      }
      const bestRestaurant = findBestRestaurant(restObj);
      resultBestRestParagparhEl.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.workers[Object.keys(bestRestaurant.workers)[0]].toFixed(2)}`;
      let workersReturn = '';
      for (const [name, salary] of Object.entries(bestRestaurant.workers)) {
         workersReturn += `Name: ${name} With Salary: ${salary} `;
         ;
         resultBestWorkersParagparhEl.textContent = workersReturn;

      }
   }
}