// // console.log('Hello World')

// let numberA = Math.abs(100)
// let pangkat = Math.pow(4, 2)
// let akar = Math.sqrt(90)

// let findMax = Math.max(10, 1, -10, 100, 3);
// let findMin = Math.min(10, 1, -10, 100, 3);

// let pembulatanBawah = Math.floor(9.9)
// let pembulatanAtas = Math.ceil(2.1)

// let pembulatanDefault = Math.round(2.5)
// let randomNumber = Math.floor(Math.random() * 5)
// let randomNumberRange = Math.floor(Math.random() * 4) + 20




// console.log(randomNumberRange)



// const btnConvert = document.getElementById('button-convert');

// btnConvert.addEventListener("click", function () {
//     convertAngka()
// })

// function convertAngka() {
//     const inputElm = document.getElementById('inputAngka').value
//     const convAbs = Math.abs(inputElm)
//     console.log(convAbs)


// }


// let negara = "INDONESIA"
// let variabel = "RAYA"

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// let string = "Saya suka makan nasi goreng nasi"
// console.log(capitalizeFirstLetter(string), 'capitalize')


// console.log(negara.concat(variabel))
// console.log(negara + variabel)
// console.log(`${negara} ${variabel}`) 
// const search = "nasi";
// const startFind = string.indexOf(search);
// const endFind = startFind + search.length;

// const endText = string[string.length - 1];
// console.log(string.replace(search, "bakso"))

// const replaceText = string.replaceAll(search, "bakso")
// const replaceText2 = replaceText.replaceAll("goreng", "rebus")
// const getIndex = string.slice(2, 10)

// console.log(getIndex)

// console.log(`kata ${search} muncul dari index ${startFind} sampai ${endFind}`)
// const elemenInput = document.getElementById('inputHuruf')
// const elemenHasil = document.getElementById('hasil')
// const username = "username "

// function convertUpper() {
//     const hasil = elemenInput.value.toUpperCase()

//     elemenHasil.innerHTML = hasil

// }


// function convertLower() {
//     const hasil = elemenInput.value.toLowerCase()

//     elemenHasil.innerHTML = hasil

// }
// console.log(username, 'no trim')

// console.log(username.length, 'no trim')

// console.log(username.trim(), 'trim')

// console.log(username.trim().length, 'trim')


const mobil = {
    merk: "Honda",
    warna: "Merah",
    tipe: "Jazz",
    "seri mobil": "r12378",
    seri_mobil: "RYQEE",
    // berjalan() {
    //     console.log('run')
    // }
}

const user = {
    id: 123,
    nama: "user1",
}

console.log(user)

const buah = ['mangga', 'apel', 'semangka'];

const showRoom = [
    {
        id: 123,
        nama: "user1",

    }, {
        id: 567,
        nama: "user2",
    },

]

// console.log(mobil.warna)
// console.log(mobil['merk'])
// console.log(mobil["seri mobil"])
// console.log(showRoom[2]['merk'])
// mobil.berjalan()

const findId = showRoom.find(item => item.id == 567)
console.log(findId.nama, 'find')







