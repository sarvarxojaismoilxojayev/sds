var i = 0;
text;
text = 'Пицца Ташкента Tashkent'

setTimeout(() => {
    function typing() {
        if (i < text.length) {
            document.querySelector("#text").innerHTML += text.charAt(i)
            i++
            setTimeout(typing, 50)
        }
    }
    typing()
}, 1000);



window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector('.wrea');

    setTimeout(() => {
        loader.style.display = "none"
    }, 800);
})