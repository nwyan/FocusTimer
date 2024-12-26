export const controls = document.getElementById("controls")

export const minutes = document.getElementById("minutes")
export const seconds = document.getElementById("seconds")

export const controlsCards = document.getElementById("environmentCard")

let cards
let vectors

export function selectCards(card, vector) {
  cards = document.getElementById(card)
  vectors = document.getElementById(vector)
}

export { cards, vectors }