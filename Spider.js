const options = {
    rootMargin: '-85px 0px -180px 0px'
}
const observer = new IntersectionObserver((enteries) => {
enteries.forEach((en) => {
    console.log(en);
    if(en.isIntersecting){
        en.target.classList.add('show');
    }else{
        en.target.classList.remove('show');
    }
})
}, options)


const hidden = document.querySelectorAll(".hidden");

hidden.forEach((ele) => observer.observe(ele));