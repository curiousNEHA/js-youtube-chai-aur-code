 function sumTwo(number1,number2){
    return number1+number2;
 }

 const sum = sumTwo(3,2);
 console.log(sum);
  const sum1 = sumTwo(4,"3");
  console.log(sum1);

  function isLoggedIn(username){
    if(!username){
        return "not logged in.";
    }

    return `${username} has logged in`;
  }

  console.log(isLoggedIn());