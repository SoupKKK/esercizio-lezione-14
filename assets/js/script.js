const numeriDellaTombola = 76
const casella = document.getElementById("tombola")
const casellaCartella = document.getElementById("cartella")
const numeriEstratti = []

const randomNumber = function() {
    return Math.floor(Math.random() * numeriDellaTombola) + 1
}

const tabellatombola = function() {
    for (let i = 1; i <= numeriDellaTombola; i++) {
        const num = document.createElement("div")
        num.textContent = i
        casella.appendChild(num)
    }
}
tabellatombola();



const cartellagiocatore = function() {
    const selectedNumbers = []

    for (let i = 0; i < 24; i++) {
        let randomNum

        do {
            randomNum = randomNumber()
        } while (selectedNumbers.includes(randomNum))

        selectedNumbers.push(randomNum)
    }

    selectedNumbers.sort((a, b) => a - b)

    for (const number of selectedNumbers) {
        const num = document.createElement("div")
        num.textContent = number
        num.addEventListener("click", function() {
            if (!num.classList.contains("selected")) {
                num.classList.add("selected")
            } else {
                num.classList.remove("selected")
            }
        })
        casellaCartella.appendChild(num)
    }
}

cartellagiocatore()



const mostraCaselleSelezionate = function() {
    const caselleSelezionate = document.querySelectorAll(".selected")
    const caselleSelezionateDiv = document.getElementById("caselleSelezionate")

    const contenutoCaselle = []

    caselleSelezionate.forEach(function(casella) {
        contenutoCaselle.push(casella.textContent)
    })

    caselleSelezionateDiv.innerHTML = "<h2>Caselle selezionate:</h2>" + contenutoCaselle.join(", ")
    cartella.style.display = "none"
}


const NumberCall = function() {
    let randomNum
    do {
        randomNum = randomNumber()
    } while (numeriEstratti.includes(randomNum))

    numeriEstratti.push(randomNum)
    const divs = casella.getElementsByTagName("div")
    const num = divs[randomNum - 1]

    if (parseInt(num.textContent) === randomNum) {
        num.style.backgroundColor = "red"
        const numeroEstratto = document.getElementById("numeroEstratto")
        numeroEstratto.textContent = "Il numero estratto è: " + randomNum
    } else {
        return false
    }
    
    }

