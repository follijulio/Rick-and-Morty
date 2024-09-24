function main() {
    for (let i = 0; i < 826; i++) {
        let URL = `https://rickandmortyapi.com/api/character/${i}`
        fetch(URL).then((response) => response.json())
            .then((data) => {
                const card = document.createElement("div")
                const imagem = document.createElement("img")
                const text = document.createElement("h1")
                const status = document.createElement("span")
                const main_code = document.getElementById("main")

                card.className = "card " + current_status(data.status)
                status.className = "status"
                imagem.src = data.image
                imagem.alt = data.name
                text.textContent = data.name
                card.appendChild(imagem)
                card.appendChild(text)
                card.appendChild(status)
                if(data.name !== "undefined"){
                    main_code.appendChild(card)
                }
            })
            .catch((error) => {
                console.log("erro: :", error)
            })
    }

}

function current_status(status) {

    if (status === "Alive") {
        return "alive"
    } else if (status === "Dead") {
        return "dead"
    }
    return "unknown"
}

main();