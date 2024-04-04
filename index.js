<<<<<<< HEAD
let input = document.querySelector('.input_text')
let button = document.querySelector('.btn')
let par = document.querySelector('.par')
let audio = document.querySelector("#myAudio")
let audio1 = document.querySelector("#wrong")


let arr = ["Cefer", "Ekber", "Cavad", "Ferhad", "Yusif", "Malik"]


let randomIndex = Math.floor(Math.random() * arr.length)
let randomName = arr[randomIndex]
console.log(randomName);

button.addEventListener('click', function(){

if(randomName === input.value){
    par.textContent = "Duz tapdiniz!"
    audio.play()
    par.classList.add('animate')

}else{ par.textContent = "Cavab sehvdir!"
    audio1.play()
    par.classList.add('wrong'); 
=======
let input = document.querySelector('.input_text')
let button = document.querySelector('.btn')
let par = document.querySelector('.par')
let audio = document.querySelector("#myAudio")
let audio1 = document.querySelector("#wrong")


let arr = ["Cefer", "Ekber", "Cavad", "Ferhad", "Yusif", "Malik"]


let randomIndex = Math.floor(Math.random() * arr.length)
let randomName = arr[randomIndex]
console.log(randomName);

button.addEventListener('click', function(){

if(randomName === input.value){
    par.textContent = "Duz tapdiniz!"
    audio.play()
    par.classList.add('animate')

}else{ par.textContent = "Cavab sehvdir!"
    audio1.play()
    par.classList.add('wrong'); 
>>>>>>> 0c3eb7bb15842e941e11f0d7989246b2da11499f
}})