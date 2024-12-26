import { controlsCards } from "./elements.js"

export function activeSounds() {
  controlsCards.addEventListener("click", (event) => {
    const actionSon = event.target.dataset.action
    console.log("passei aqui activeSounds" + actionSon)
  })
}

export const musicForest = new Audio("./assets/Floresta.wav")
musicForest.loop = true // o audio fica em loop sem parar

export const musicRain = new Audio("./assets/Chuva.wav")
musicRain.loop = true

export const musicCafe = new Audio("./assets/Cafeteria.wav")
musicCafe.loop = true

export const musicFirePlace = new Audio("./assets/Lareira.wav")
musicCafe.loop = true