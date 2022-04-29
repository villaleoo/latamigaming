window.addEventListener("scroll", function(){
    let headerGlobal = document.querySelector(".navbar-header-global");
    headerGlobal.classList.toggle("bottom-global", window.scrollY>0);
})


    