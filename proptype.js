function abcd(){
  console.log(this);

  this.username='khan'
  this.age=300
  
}

const val = new abcd

//lets see highrt order function aisa koiw bhi function joki ak function ko parameter mai accept krai aur ak function koo return krdai 


function hof (){
return function hj(){
console.log('retuen this value');

}

}
hof()