let images = document.querySelectorAll(".slider")
let button1 = document.querySelector(".left")
let button2 = document.querySelector(".rigth")
let count = 0;

button1.addEventListener("click" , (e) =>{
    if(count !=0){
        count--
    slideImage();
    }
})
button2.addEventListener("click" , (e) =>{
    if(count < images.length-1){
        count++
    slideImage();
    }
})

for(let i = 0; i<images.length; i++){
    images[i].style.left = `${i * 100}%`
}
let slideImage = () =>{
        for(let j= 0; j<images.length; j++){
            images[j].style.transform = `translateX(-${count * 100}%)`
        }
     }

// images.forEach((slide , index) => {
//     slide.style.left = `${index * 100}%`
// });
// let slideImage = () =>{
//     images.forEach((slide) => {
//         slide.style.transform = `translateX(-${count * 100}%)`
//     });
// }

