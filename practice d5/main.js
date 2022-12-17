
document.getElementById("start").addEventListener("click", function(){
    document.addEventListener("mouseover", function(event){
        console.log(event);
    });
})

document.getElementById("stop").addEventListener("click", function(){
    document.removeEventListener("mouseover", function(event){
        console.log(event);
    });
})