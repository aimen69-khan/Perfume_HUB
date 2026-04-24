var fruite = ['orange', 'mango', 'grape'];
var userOutput = prompt("What your fav perfume??");
var flag = false;
for(var j=0; j<fruite.length; j++){
  if(fruite[j] === userOutput){
    console.log("I Also like " +userOutput +".");
    flag= true;
    break;
  }
}
if(!flag){
  console.log(userOutput+ " :Not found!");
}

alert("We Will keep that in mind!");