const fortunes_array = [

    "Great things are coming your way!",

    "Today is your lucky day.",

    "A surprise awaits you soon.",

    "Be bold. Take the leap.",

    "Your hard work will pay off.",

    "Adventure is just around the corner.",

    "Good things come to those who wait.",

    "Believe in yourself and magic happens.",

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

