
const observer = new IntersectionObserver((enteries) => {
enteries.forEach((en) => {
    console.log(en);
    if(en.isIntersecting){
        en.target.classList.add('show');
    }else{
        en.target.classList.remove('show');
    }
})
})


const hidden = document.querySelectorAll(".hidden");

hidden.forEach((ele) => observer.observe(ele));