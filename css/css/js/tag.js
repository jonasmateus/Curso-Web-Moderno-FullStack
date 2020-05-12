



document.querySelectorAll(".tag").forEach(caixa => {
    let caixaNome = caixa.tagName.toLocaleLowerCase()

    caixa.style.borderColor = "blue"

    if (!caixa.classList.contains("nolable")){

        let label = document.createElement("lable")
        label.style.borderColor = "blue"
        label.innerHTML = caixaNome
        caixa.insertBefore(label, caixa.childNodes[0])
    }
})