
const d = document;

export default function openMenu (btn, menu, menuLink)  {

    d.addEventListener("click", e => {
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)){
            d.querySelector(menu).classList.toggle("is-active")
            d.querySelector(btn).classList.toggle("is-active")
        }

        if(e.target.matches(menuLink)){
            console.log("menu tocado")
            d.querySelector(menu).classList.remove("is-active")
            d.querySelector(btn).classList.remove("is-active")
        }
    })

}