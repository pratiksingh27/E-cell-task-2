$(window).on("scroll",function(){
    if($(window).scrollTop()) {
        $('nav').addClass('blue');
    }
    else{
        $('nav').removeClass('blue');
    }
})


function myfunction (imgs){
    var expandImg=document.getElementById("expandedImg");

    var imgText=document.getElementById("imgtext");

    expandImg.src = imgs.src;

    imgText.innerHTML = imgs.alt;

    expandImg.parentElement.style.display="inline-block";
    
}