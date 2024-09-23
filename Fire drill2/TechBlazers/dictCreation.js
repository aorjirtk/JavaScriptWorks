function dictObjectCreation(array){
    let countAt = {};
    array.forEach(element => {
        if(countAt[element]){
            countAt[element] += 1;
        }else
            countAt[element] = 1;
    });
            return countAt   
    }
    console.log(dictObjectCreation([1,1,2,2,3]))
    module.exports = {dictObjectCreation};
    
