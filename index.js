const navToggle = document.querySelector (".naVtoggle")
const naveMenu = document.querySelector (".estiloLis")

navToggle.addEventListener("click", () => {
    naveMenu.classList.toggle("estiloLis_visible")
})
