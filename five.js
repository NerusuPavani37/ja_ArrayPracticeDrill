let items=require('./items');

let sortedArray = items.sort((a,b) =>{
    let aVitamins = a.contains.split(" ").length;
    let bVitamins = b.contains.split(" ").length;

    return bVitamins-aVitamins;
})

console.log(sortedArray);