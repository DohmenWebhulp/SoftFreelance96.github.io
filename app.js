(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    function backgroundChange(){
        var navbar = document.querySelector(".navbar");

        var B = document.body; 
        var D = document.documentElement; 
        D = (D.clientHeight)? D: B;

        if(D.scrollTop != 0){
            if(document.body.classList.contains("light-mode")){
                navbar.style.background = "rgba(255, 255, 255, 1)";
            }else{
                navbar.style.background = "rgba(25, 29, 43, 1)";
            }
        }else{
            navbar.style.background = "rgba(255, 255, 255, 0)";
        }

        return D;
    }

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        backgroundChange();
    });
    document.querySelector(".language-btn").addEventListener("click", () => {
        var activeLanguage = document.querySelectorAll(".active-language");
        var noDisplay = document.querySelectorAll(".no-display");

        activeLanguage.forEach(active => {
            active.classList.remove("active-language");
            active.classList.add("no-display");
        });

        noDisplay.forEach(notActive => {
            notActive.classList.add("active-language");
            notActive.classList.remove("no-display");
        });

        if(document.querySelector(".language").innerText == "EN"){
            document.querySelector(".language").innerText = "NL";
        }else{
            document.querySelector(".language").innerText = "EN";
        }
    });

    document.querySelectorAll(".to-contact").forEach(button => {
        button.addEventListener("click", function(){
            document.querySelector(".active-btn").classList.remove("active-btn");
            document.querySelector(".contact-button").classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.querySelector(".contact").classList.add("active");
        })
    });

    document.querySelectorAll(".to-services").forEach(button => {
        button.addEventListener("click", function(){
            document.querySelector(".active-btn").classList.remove("active-btn");
            document.querySelector(".services-button").classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.querySelector(".services").classList.add("active");
        })
    });


})
();
