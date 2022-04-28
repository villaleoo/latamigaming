
    window.addEventListener("scroll", function(){
        let header = document.querySelector(".navbar-header");
        header.classList.toggle("bottom", window.scrollY>0);
    })
