


function colorgiving () {
    console.log( document.getElementById("green").style.color = "green");
    document.getElementById("green").style.color = "green";

    document.getElementById("blue").style.color = "blue";
   
}

// if(i=0; i<10; i++) {
// console.log("this message is shown a lot");
// } 

function buttoncolor () {
document.getElementById("myBtn").addEventListener("click", function(){
    this.style.backgroundColor = "red";
});
}