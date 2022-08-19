var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(myObj,checkProp) {

  if (myObj.hasOwnProperty(checkProp)){

    //return myObj[checkProp];
    console.log(myObj[checkProp]);
  } 
  //return "Not Found";
  console.log("Not Found");

}

checkObj("gift");
