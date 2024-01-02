let items=require('./items');


let arr=items.reduce(function(acc ,cv){
    if(cv.contains){
        let vitaminArr=cv.contains.split(",");

        vitaminArr.forEach(vitamin =>{
          if(acc.hasOwnProperty(vitamin)){
              acc[vitamin].push(cv.name);
          }
        });
    }
    return acc;
},{
    "Vitamin C": [],
    "Vitamin K": [],
    "Vitamin A": [],
    "Vitamin B": [],
    "Vitamin D": [],
})

console.log(arr);