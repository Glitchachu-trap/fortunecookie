const fortunes_array = [

    "The world around you continues, cant stop it but oh well",

    "Life is a dream, wake up by now",

    "A surprise awaits you soon, hope you like bugs",

    "Be bold. Take the leap to abstraction",

    "Your hard work ain't gonna turn out well",

    "Adventure is just around the corner, maybe its the haunted mansion",

    "Good things come to those who wait, but you should probably do something",

    "Believe in yourself, but not too much",

];


const cookiebutton = document.getElementById("cookiebutton");
const fortune = document.getElementById("fortune");
const cookie = document.getElementById("cookie");


async function crackTheCookie(){

    cookie.classList.add('shaking');

    fortune.classList.remove("visible");

    try{
        const response = await fetch(
            "https://api.adviceslip.com/advice"
        );
        const date = await response.json();
        fortune.textContent = data.slip.advice;
    } catch(error){
        const index = Math.floor(Math.random() * fortunes_array.length);
        fortune.textContent = fortunes_array[index];
    }

    cookie.addEventListener('animationend', function(){
        cookie.classList.remove('shaking');
    }, {once:true});


    setTimeout(function (){
        fortune.classList.add("visible");
    }, 300);
}


cookiebutton.addEventListener("click", crackTheCookie);

