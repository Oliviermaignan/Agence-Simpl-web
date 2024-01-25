const facebook = document.getElementById("facebook");

facebook.addEventListener("mouseover" , () => {
    facebook.classList.add("zoomed");
});

facebook.addEventListener("mouseout" , () => {
    facebook.classList.remove("zoomed");
});

const twitter = document.getElementById("twitter");

twitter.addEventListener("mouseover" , () => {
    twitter.classList.add("zoomed");
});

twitter.addEventListener("mouseout" , () => {
    twitter.classList.remove("zoomed");
});

const instagram = document.getElementById("instagram");



instagram.addEventListener("mouseover" , () => {
    instagram.classList.add("zoomed");
});

instagram.addEventListener("mouseout" , () => {
    instagram.classList.remove("zoomed");
});