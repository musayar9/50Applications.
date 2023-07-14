const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1686665078350-7ee514a07769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=210&q=80"/>'
    title.innerHTML="Lorem İpsum dolor sit amet"
    excerpt.innerHTML ="Helena  ReactJs, Javascript, Jquery, Bootstarp , Git biliyor"
    profile_img.innerHTML=`<img src="https://randomuser.me/api/portraits/women/12.jpg"/>`
    name.innerHTML = "Helane Street"
    date.innerHTML="June 15, 2023"

    animated_bgs.forEach((bg)=>bg.classList.remove("animated-bg"))
    animated_bg_texts.forEach((bg)=>bg.classList.remove("animated-bg-text"))
}