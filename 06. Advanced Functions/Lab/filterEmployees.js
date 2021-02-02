function filterEmp(data, criteria) {
    const dataArr = JSON.parse(data);
    const [property, value] = criteria.split('-');
    const resultArr = [];
    for (const employee of dataArr) {
        if(employee[property] === value){
            resultArr.push(employee);
        }
    };
    const arrLen = resultArr.length;
    for(let i = 0; i < arrLen; i++){
        resultArr.push(`${i}. ${resultArr[i]['first_name']} ${resultArr[i]['last_name']} - ${resultArr[i].email}`);
    };
    resultArr.splice(0, resultArr.length / 2);
    return resultArr.join('\n');

}
//0. Kaylee Johnson - k0@cnn.com              id. FirstName LastName - email
console.log(filterEmp(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
));