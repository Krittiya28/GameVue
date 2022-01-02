window.onload=function(){
    var img = document.getElementById("poplaree1");
    var audio = new Audio("meow1.mp3");

    img.addEventListener('mousedown', function(){
        img.src ='img/cat2.png'
        audio.play();

    })
    img.addEventListener('mouseup', function(){
        img.src="img/cat1.png"
        audio.play();
    })

}