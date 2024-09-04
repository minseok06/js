let my, title;
window.onload=function() {
    title=document.querySelector(".title");
    my=document.querySelector(".my");
    title.onclick=function() {
        $(".music").hide();
        my.style.display="block";
        $(".my").animate({"left":"70%"},{duration:500, easing:"easeOutElastic"} );
        $(".myName").delay(1000).animate({"left":"250px"},{duration:500, easing:"easeInSine"} );
        $(".myTel").delay(1500).animate({"left":"250px"},{duration:500, easing:"easeInSine"} );
        $(".myFm").delay(2000).animate({"left":"250px"},{duration:500, easing:"easeInSine"} );
    }    
}