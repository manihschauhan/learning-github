let bnt1 = document.querySelector("#category")
let bnt2 = document.querySelector("#price")
let ol = document.querySelector("#menu")
let list = document.querySelectorAll(".l1")
let h2 = document.querySelectorAll(".pr")
let result = document.querySelector("#result")

list.forEach((element) => {
    element.addEventListener("click" , (e) =>{
        result.style.display = "block"
        result.innerHTML = `you have chosen :- ${e.target.textContent} !`
    })
});
h2.forEach((element2) => {
    element2.addEventListener("click" , (e) =>{
        result.style.display = "block"
        result.innerHTML = `you have chosen :- ${e.target.textContent} !`
    })
});

bnt1.addEventListener("click" , (e) =>{
     ol.style.display = "block"
     h2.forEach((p) =>{
     p.style.display = "none"
     });
     result.style.display = "none"
});

bnt2.addEventListener("click" , (e) =>{
    ol.style.display = "none"
    h2.forEach((p) =>{
        p.style.display = "block"
        });
    result.style.display = "none"
});

