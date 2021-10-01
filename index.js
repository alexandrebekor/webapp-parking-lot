function reserved(items, item) {
    const result = items[item]
    items.splice(item, 1)
    return result
}

function randomItem(items) {
    const randomIndex = Math.floor(
        Math.random() * items.length
    )
    
    if(items.length > 0) {
        const result = reserved(items, randomIndex)
        return result
    }
}

const vagas = ["15", "30", "20", "25", "32"]
const ap = ["44", "12", "22", "32"]

const sorteio = ap.map(num => {
    return {
        apartamento: num,
        vaga: randomItem(vagas)
    }
})

const apartamento = {
    id: 44,
    status: 0,
    flag: false
}

console.log(sorteio)