function userProfile(name,one){
 console.log(`Hello ${name}`);
  //  console.log(`Hello ${name}`);
    setTimeout(() => {
      //  console.log(`Hello ${name}`);
        one()
    }, 3000);
}

const double1= (a) => a*2
function getUserData(){
    console.log("Call Back Function")
}
userProfile("Name",getUserData)
console.log(double1(23));


