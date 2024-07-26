const getjokes=async()=>{


try{
const res= await fetch(`https://api.chucknorris.io/jokes/random`);
const data=await res.json();
const myjoke=document.querySelector("#myjoke");
myjoke.innerHTML=data.value;
}
catch(err){

}



};
window.addEventListener('load',()=>{

getjokes();



})