


    
// let obj = [
//     {
//         name: "Ali",
//         surname: "Aliyev",
//         age: 10,
//         driving: true
//     }, {
//         name: "Veli",
//         surname: "Aliyev",
//         age: 17,
//         driving: false,
//     }, {
//         name: "Mehman",
//         surname: "Aliyev",
//         age: 25,
//         driving: true,
//     },{
//         name: "Nicat",
//         surname: "Aliyev",
//         age:26,
//         driving: false
//     },{
//         name: "Ayxan",
//         surname: "Aliyev",
//         age:15,
//         driving: true
//     }
// ]


// // bu arrayde driving (suruculuk vesiqesi) true olanlari ve yasi 18+ olanlari secib bir 
// // arrayde loga cixardacaqsiz 
// // soyadi Aliyev olanlari ve yasi 18 den asagi olanlari  secib bir arrayde geri qaytarin

// // 1. driving: true ve age >= 18 olanları seç
// let driving = obj.filter(person => person.driving && person.age >= 18);
// console.log(driving);

// // 2. soyadı "Aliyev" olan ve age < 18 olanları seç
// let surname = obj.filter(person => person.surname === "Aliyev" && person.age < 18);
// console.log(surname);