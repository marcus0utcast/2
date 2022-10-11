const button = document.querySelector(".random");
const image = document.querySelector(".pic");
const url = "https://api.waifu.pics/nsfw/waifu";

async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.url;
    } catch (error) {
        console.log(error);
    }
}

button,addEventListener("click", () => {
    fetchHandler();
})