const header = document.querySelector(".inner__menu");
window.addEventListener("scroll", () => {
    if(window.scrollY > 10){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
});