let togglerBtn = document.querySelector(".toggler");
let mylinks = document.querySelector(".links");
togglerBtn.addEventListener("click", function() {
    if (togglerBtn.classList.contains("toggler")) togglerBtn.classList.replace("toggler", "toggled");
    else togglerBtn.classList.replace("toggled", "toggler");
    mylinks.classList.toggle("expandable");
});

//# sourceMappingURL=index.cadabcde.js.map
