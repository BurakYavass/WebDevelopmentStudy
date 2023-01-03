const array = [1,2,3,4]

const kareDizisi = []

array.forEach(number => {
    kareDizisi.push(number*number)
})


console.log(kareDizisi)

//map

const mapDizi = array.map(number =>  number * 3)

console.log(mapDizi)

//filter

const filtreDizi = array.filter(number => number>2)

console.log(filtreDizi)

//reduce

const summit = array.reduce((acc,number)=>{
    return acc +number
},10)


console.log(summit)