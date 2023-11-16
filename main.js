let homeLnk = document.getElementById("home");
let blogLnk = document.getElementById("blog");
let aboutLnk = document.getElementById("about");
let contactLnk = document.getElementById("contact");
let data = document.getElementById("data");
homeLnk.addEventListener("click", ()=> {
    data.textContent = "Home";
    data.classList.add("link-doc-js");
})
blogLnk.addEventListener("click", ()=> {
    data.textContent = "Blog";
    data.classList.add("link-doc-js");
})
aboutLnk.addEventListener("click", ()=> {
    data.textContent = "About";
    data.classList.add("link-doc-js");
})
contactLnk.addEventListener("click", ()=> {
    data.textContent = "Contact";
    data.classList.add("link-doc-js");
})