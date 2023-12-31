let t1 = gsap.timeline()
heading = document.querySelector(".banner>h1")
cart = document.querySelector(".banner>i")
dots = document.querySelectorAll("header>dots>d")
mtn1 = document.querySelector(".mtn1")
mtn2 = document.querySelector(".mtn2")
cld1 = document.querySelector(".cld1")
cld2 = document.querySelector(".cld2")
brd1 = document.querySelector(".brd1")
brd2 = document.querySelector(".brd2")
field = document.querySelector(".field")
msg = document.querySelector(".msg")
anchors = document.getElementsByTagName("a")[0]
advert = document.querySelector(".adverts>img")
advert_array = ['/assets/trending1.png','/assets/trending6.jpg','/assets/trending3.webp','/assets/trending5.png','/assets/trending4.avif']



const showAdverts = ()=>{
    let index = 0;
    
    setInterval(async ()=>{
    
        if(index<advert_array.length){
            
          
            
            advert.classList.remove("fade-out")
            advert.classList.add("fade-in")
            
            advert.src = advert_array[index]
            setTimeout(()=>{
                advert.classList.add("fade-out")
            },5000)
            
            
            index++;
        } else{
            index=0;
        }
    },7000)
}
const timedAnimation = ()=>{
t1.to(heading,{
    y:200,
    duration:1,
    delay:1
})
.to(cart,{
    
    x:928
})
gsap.utils.toArray(".d").forEach(item =>{
    t1.to(item,{
        y:-1000,
        duration:0.3
    })
})
t1.to(heading,{
    rotate:3600,
    scale:0.0,
    opacity:0,
    duration:1
})
t1.to(cart,{
    
    x:-928,
    duration:1
})
setTimeout(()=>{
    new TypeIt("#txt-anim-target", {
        speed:50,
        waitUntilVisible: true,
        loop: true
      })
      .delete()
      .type("From the streats",{delay:500})
      .move(-2)
      .delete(1)
      .type("e")
      .move(null,{to:"END"})
      .type(" of Kashmir,")
      .break()
      .type("To your Doorstep...",{delay:1000})
      .delete()
      .type("Made by the Vendor, the soul",{delay:1000})
      .move(-10)
      .type("s")
      .move(null,{to:"END"})
      .type(" of India!",{delay:1000})
      .delete()
      .type("Best in quality and made with Love",{delay:2000})
      .delete()
      .go()
},7000)
t1.to(cld1,{
    scrollTrigger:{
        trigger:cld1,
        scroller:"body", 
        scrub:4,
        start:"30% 20%",
        end:"200% center"
    },
    x:-650,
    y:1200
})
t1.to(cld2,{
    scrollTrigger:{
        trigger:cld2,
        scroller:"body", 
        scrub:4,
        start:"0% top",
        end:"80% top",
  
    },
    x:700,
    y:800
})
.to(brd1,{
    scrollTrigger:{
        trigger:brd1,
        scroller:"body", 
        scrub:4,
        start:"0% top",
        end:"500% top"
  
    },
    x:-700,
    y:900
})
.to(brd2,{
    scrollTrigger:{
        trigger:brd2,
        scroller:"body", 
        scrub:4,
        start:"0% top",
        end:"500% top"
  
    },
    x:500,
    y:900
})

t1.to(msg,{
    scrollTrigger:{
        trigger:msg,
        scroller:"body", 
        scrub:3,
        start:"-100% top",
        end:"100% top"
  
    },
    scale:0.4,
    y:600
})
t1.to(mtn1,{
    scrollTrigger:{
        trigger:mtn1,
        scroller:"body", 
        scrub:3,
        start:"-40% top",
        end:"170% top",
    },
    ease:"slow",
    x:500,
    y:1100
})

t1.to(mtn2,{
    scrollTrigger:{
        trigger:mtn2,
        scroller:"body", 
        scrub:2,
        start:"-40% top",
        end:"170% top",
    },
    ease:"slow",
    x:-500,
    y:1100
})
.to(field,{
    scrollTrigger:{
        trigger:field,
        scroller:"body", 
        scrub:2,
        start:"-200% top",
        end:"150% center",
    },
    y:250,
    scale:1.2
})
}
window.addEventListener('unload', function(e){
    window.scrollTo(0, 0)
    });
preload = document.querySelector(".preloader")
window.onload=()=>{
    timedAnimation()
    showAdverts()
}
window.addEventListener("load",()=>{
    preload.style.display = "none"
    document.querySelector("body").removeAttribute("style");


 

    slider_img = document.querySelectorAll(".img-wrapper > img")
 
    slider_btn = document.getElementsByClassName("swiper-button-next")[0]
    i=1;


  slider_img.forEach((item)=>{
    
   
 
  

    item.addEventListener("mousemove",(e)=>{
        const height = item.clientHeight
        const width = item.clientWidth
    
        
        const xVal = Math.abs(e.layerX);
        const yVal = Math.abs(e.layerY);
        factor = xVal%width;

        
       
        
        const yRotation = 30 * ((factor - width/2) / width);
        const xRotation = -10 * ((yVal - height/2) / height);
        const string = 'transform: perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
        item.style = string;
      })
    
      item.addEventListener('mouseout', function() {
      item.style = 'transform: perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })

    item.addEventListener('mousedown', function() {
      item.style = 'transform: perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })
    
    item.addEventListener('mouseup', function() {
      item.style = 'transform: perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })
    
  })
})

/*typingInterval= setInterval(()=>{
    new TypeIt("#txt-anim-target", {
        speed:50,
        waitUntilVisible: true,
      })
      .delete()
      .type("From the streats",{delay:500})
      .move(-2)
      .delete(1)
      .type("e")
      .move(null,{to:"END"})
      .type(" of Kashmir,")
      .break()
      .type("To your Doorstep...",{delay:1000})
      .delete()
      .type("Made by the Vendor, the soul",{delay:1000})
      .move(-10)
      .type("s")
      .move(null,{to:"END"})
      .type(" of India!",{delay:1000})
      .delete()
      .type("Best in quality and made with Love",{delay:2000})
      .delete()
      .go()
      clearInterval(typingInterval)

},30000)*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    direction: 'horizontal',
    spaceBetween: 10,
    loop:false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
   
  });




  

console.log("Hii")