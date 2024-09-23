function arrayAdditionByIndex(array){
    let sumOfIndex = []
    if(array.length % 2 ==0){
    for(let index = 0; index < array.length; index+=2){
        let sum = array[index] + array[index+1];
        sumOfIndex.push(sum);

        }
    }
    return sumOfIndex;
}  
module.exports = {arrayAdditionByIndex};