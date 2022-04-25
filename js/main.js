//function to select with class or id
const select=(element,all=false)=>{
    element=element.trim();
    if(all)
    {
        return[...document.querySelectorAll(element)];
    }else
    {
        return document.querySelector(element);
    }
}

//Easy on scroll event listener 

const onscroll=(element,listner)=>
{
    element.addEventListener("scroll",listner)
}
//toggle header-scrolled class to header 

let selectheader=select("#header");
if(selectheader)
{
    const headerScrolled=()=>
    {
        if (window.scrollY>100)
        {
            selectheader.classList.add("header-scrolled");
        }else
        {
            selectheader.classList.remove("header-scrolled");
        }
    }
    window.addEventListener('load',headerScrolled);
    onscroll(document,headerScrolled);
}
/*Testimonials slider*/
new Swiper('.swiper', {
   speed: 600,
   loop:true,
   autoplay:{
       delay:5000,
       disableOnInteraction:false
   },
   slidesPerView:'auto',
    pagination:
    {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
  
        1200: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    }
}
  
   );