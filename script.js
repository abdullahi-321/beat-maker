const boom = document.querySelector(".boom"),
 clap = document.querySelector(".clap"),
 hihat = document.querySelector(".hihat"),
 kick = document.querySelector(".kick"),
 openhat = document.querySelector(".openhat"),
 ride = document.querySelector(".ride"),
 snare = document.querySelector(".snare"),
 tink = document.querySelector(".tink"),
 tom = document.querySelector(".tom"),
 div1 = document.querySelector("#div-1"),
 div2 = document.querySelector("#div-2"),
 div3 = document.querySelector("#div-3"),
 div4 = document.querySelector("#div-4"),
 div5 = document.querySelector("#div-5"),
 div6 = document.querySelector("#div-6"),
 div7 = document.querySelector("#div-7"),
 div8 = document.querySelector("#div-8"),
 div9 = document.querySelector("#div-9");

window.addEventListener("keypress", (event) => {
    console.log(event);
    if (event.key == "a") {
        div1.classList.add("class2");
        boom.currentTime= 0;
        boom.play();
        setTimeout(() => {
            div1.classList.remove("class2");
        }, 300);

    } else if (event.key == "s") {
        div2.classList.add("class2");
        clap.currentTime = 0;
        clap.play();
        setTimeout(() => {
            div2.classList.remove("class2");
        }, 300);
    } else if (event.key == "d") {
        div3.classList.add("class2");
        hihat.currentTime = 0;
        hihat.play();
        setTimeout(() => {
            div3.classList.remove("class2");
        }, 300);
    } else if (event.key == "f") {
        div4.classList.add("class2");
        kick.currentTime = 0;
        kick.play();
        setTimeout(() => {
            div4.classList.remove("class2");
        }, 300);
    } else if (event.key == "g") {
        div5.classList.add("class2");
        openhat.currentTime = 0;
        openhat.play();
        setTimeout(() => {
            div5.classList.remove("class2");
        }, 300);
    } else if (event.key == "h") {
        div6.classList.add("class2");
        ride.currentTime = 0;
        ride.play();
        setTimeout(() => {
            div6.classList.remove("class2");
        }, 300);
    } else if (event.key == "j") {
        div7.classList.add("class2");
        snare.currentTime = 0;
        snare.play();
        setTimeout(() => {
            div7.classList.remove("class2");
        }, 300);
    } else if (event.key == "k") {
        div8.classList.add("class2");
        tink.currentTime = 0;
        tink.play();
        setTimeout(() => {
            div8.classList.remove("class2");
        }, 300);
    } else if (event.key == "l") {
        div9.classList.add("class2");
        tom.currentTime = 0;
        tom.play();
        setTimeout(() => {
            div9.classList.remove("class2");
        }, 300);
    }
});

const input = document.querySelector(".input");
const root = document.querySelector(":root");

input.addEventListener("input", setColor);
function setColor() {
    setInterval(()=>{root.style.setProperty("--base", input.value)}, 10)
}

