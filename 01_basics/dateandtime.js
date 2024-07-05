//dates

//let myDate=new Date();
//console.log(myDate);
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleDateString())

//let myDateCreated=new Date(2023,1,21)
//console.log(myDateCreated.toDateString())

//let myTimeStamp=Date.now();
//console.log(myTimeStamp)
//console.log(myDate.getTime())

//to convert into seconds
//console.log(Math.floor(Date.now()/1000))

let myDate2 = new Date();
console.log(myDate2.toLocaleDateString('default',{
    weekday:"long"
}))