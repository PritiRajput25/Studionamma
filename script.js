let menus=document.querySelector(".menu-p");
let overlay=document.querySelector(".overlay");
let video=document.querySelector(".video-container");
let boxes=document.querySelectorAll(".box");
let flag=1;
let darks=document.querySelector(".dark");
let wrapper=document.querySelector(".wrapper")
let overlayp=document.querySelector(".overlay-parent")
let detail=document.querySelector(".detail")
let playground=document.querySelector(".playground")
let fl=1;
let imgoverlay=document.querySelectorAll(".overlay-img")
function updateCursorMode(){
    const active = window.scrollY > window.innerHeight * 0.8;
    if(active){
        document.body.classList.add("cursor-dot-active");
    } else {
        document.body.classList.remove("cursor-dot-active");
    }
}

window.addEventListener("scroll", updateCursorMode);
updateCursorMode();

darks.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    if(isDark){
        darks.textContent = "LIGHT MODE";
    } else {
        darks.textContent = "DARK MODE";
    }
})
darks.addEventListener("click",()=>{
    if(fl){
        overlayp.style.backgroundColor="black";
        overlayp.style.color="#E4E4E4"
        darks.textContent="LIGHT MODE"
        fl=0;
    }
    else{
        overlayp.style.backgroundColor="#E4E4E4";
        overlayp.style.color="black"
        darks.textContent="DARK MODE"
    
        fl=1;
    }
})
menus.addEventListener("click",()=>{
    if(flag){
        overlay.style.top="0%";
        overlay.style.transform="rotate(5deg)";
        menus.textContent="CLOSE";
        flag=0
    }
    else{
        overlay.style.top="-120%";
        overlay.style.transform="rotate(0deg)";
        menus.textContent="MENU";
        flag=1
    }
    
});
document.addEventListener("mousemove",(e)=>{
    video.style.top=e.clientY + "px";
    video.style.left=e.clientX + "px";
    video.style.transition="linear 0.3s";
    video.style.transfrom="translate(-50%,-50%)";
})
 boxes.forEach(e => {
    e.addEventListener("mouseenter",()=>{  /// for each hume node list deta h
         e.style.filter = "blur(5px)";
     })
     e.addEventListener("mouseleave",()=>{
        e.style.filter="blur(0px)";
     })
 });
 imgoverlay.forEach(e => {
    e.addEventListener("mouseenter",()=>{
         e.style.opacity = 1;
          e.style.filter="blur(0px)";
     })
     e.addEventListener("mouseleave",()=>{
        e.style.opacity=0;
     })
 });
 let images=document.querySelectorAll(".det img")
 let h1=document.querySelector(".det h1")
 let index=0
 let interval
 h1.addEventListener("mouseenter",()=>{
    interval=setInterval(()=>{
        images.forEach(e=>{
            e.style.opacity=0
             e.style.transform="translate(10%,-90%)"
        })
        images[index].style.opacity=1
        index++;
        if(index>=images.length){
            index=0
        }
    },500)
 })
 h1.addEventListener("mouseleave",()=>{
    clearInterval(interval);

    images.forEach(img=>{
        img.style.opacity = 0;
    });
});
let imgg=document.querySelectorAll(".playground img")
let h11=document.querySelector(".playground h1")
let ind=0
let timer
h11.addEventListener("mouseenter",()=>{
    timer=setInterval(()=>{
        imgg.forEach(e=>{
            e.style.opacity=0
             e.style.transform="translate(10%,-90%)"

        })
        imgg[ind].style.opacity=1;
        ind++
        if(ind>=imgg.length){
            ind=0
        }
    },500)
})
h11.addEventListener("mouseleave",()=>{
    clearInterval(timer);
     imgg.forEach(img=>{
        img.style.opacity=0;
     })
})

 