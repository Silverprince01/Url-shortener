const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".ham");
let longLink = document.getElementById("longLink");
let shorten = document.querySelector(".shorten");
const myShortUrl = "https://api.shrtco.de/v2/shorten?url=";
const linkExtension = "/very/long/link.html"
let result = document.querySelector(".result");
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});


shorten.addEventListener('click', async function getShortLink(){   
    let newLink =   myShortUrl + longLink.value + linkExtension;
    let response = await fetch(newLink);
    let linkData = await response.json();
    console.log(linkData);
    const lonLink = document.createElement("p");
    const shortLinkbox = document.createElement("div");
    const newShortLink = document.createElement("div");
    const shortLink = document.createElement("p");
    const copybtn = document.createElement("button");
    const line = document.createElement("hr");

    copybtn.textContent = "Copy";

    shortLinkbox.classList.add("box")
    lonLink.classList.add("longLink");
    newShortLink.classList.add("newShortLink");
    shortLink.classList.add("ShortLink");
    copybtn.classList.add("cop");
    line.classList.add("hrline");
    lonLink.textContent = linkData.result.original_link;
    shortLink.textContent = linkData.result.short_link;
if(longLink.value == ""){
    alert("Enter a valid link")
}else{
shortLinkbox.appendChild(lonLink);
    shortLinkbox.appendChild(line);
    newShortLink.appendChild(shortLink);
    newShortLink.appendChild(copybtn);
    shortLinkbox.appendChild(newShortLink);
    shortLinkbox.appendChild(newShortLink);
    result.appendChild(shortLinkbox);

    
    copybtn.addEventListener('click', ()=>{
        navigator.clipboard.writeText(shortLink.textContent);
        copybtn.textContent = "Copied!";
        copybtn.style.background = "hsl(257, 27%, 26%)"

    })
}   
});


