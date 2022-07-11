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
  /**
   * Easy event listener function
   */

  const on=(type,el,listner,all=false)=>
  {
      let selectel=select(el,all);
      if(selectel)
      {
          if(all)
          {
              selectel.forEach(e=>e.addEventListener(type,listner));
          }else
          {
              selectel.addEventListener(type,listner);
          }
      }
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

//navigation mobile 
on("click",".mobile-nav-toggle",function(e){
select("#navbar").classList.toggle("navbar-mobile")
this.classList.toggle("bi-list")
this.classList.toggle("bi-x")
})
let navbarlinks=select(".navbar .scrollto",true);
const navbarlinksActive=()=>{
    let position=window.scrollY+200;
    navbarlinks.forEach(navbarlink => {
        if(!navbarlink.hash) return;
        let section=select(navbarlink.hash)
        if(position>=section.offsetTop &&position<=section.offsetTop+section.offsetHeight)
        {
            navbarlink.classList.add("active");
        }else
        {
            navbarlink.classList.remove("active");
        }
    });
}
window.addEventListener("load",navbarlinksActive);
onscroll(document,navbarlinksActive);

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
window.addEventListener("load",()=>{
let portfolioContainer=select(".portfolio-container");
if(portfolioContainer)
{
    let portfolioIsotope=new Isotope(".portfolio-container",{
        itemSelector:'.portfolio-item'
    })
    let portfolioFilters=select(".portfolio-filters li",true);

    on('click',".portfolio-filters li",function(e)
    {
        e.preventDefault();
        portfolioFilters.forEach(function(el)
        {
            el.classList.remove("filter-active");
        })
        this.classList.add("filter-active");
        portfolioIsotope.arrange({
            filter:this.getAttribute("data-filter")
        })


    },true)
}

});
/**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox=GLightbox({
      selector:".portfolio-lightbox"
  })

window.addEventListener("load",()=>{
    AOS.init({
        duration:1000,
        easing:'ease-in-out',
        once:true,


    })
})