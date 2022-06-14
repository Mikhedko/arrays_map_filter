const phonesArr = [
	{brand: 'apple', battery: 2200, ram: 4, camera: 12, processor: 'A12'},
	{brand: 'samsung', battery: 3000, ram: 8, camera: 12, processor: 'A16'},
	{brand: 'xiaomi', battery: 1870, ram: 2, camera: 34, processor: 'A14'},
	{brand: 'huawei', battery: 4020, ram: 4, camera: 8, processor: 'A16'}
]

// Создать новый массив, где телефоны с емкостью акумуллятора выше чем 2000 и ram > 4

function reeditArrayOfPhones(arr){
    let newArr = []
    newArr = arr.filter((phonesObject)=> {
        return phonesObject.battery > 2000
    })
    newArr = arr.filter((phonesObject) => {
        return phonesObject.ram > 4
    })
    return newArr
}
console.log(reeditArrayOfPhones(phonesArr));
// 2. с помощью цепочки вызовов, вызвать метод map и добавить диагональ экрана.

function addDiagonalToArrOfPhones(arr, diagonal){
    return {...arr, diagonal}
}

const newPhonesArray = phonesArr.map((phonesArr) => {
    return addDiagonalToArrOfPhones(phonesArr, 8)
})

console.log(newPhonesArray)