import * as el from "./elements.js"
import * as music from "./playMusic.js"
import state from "./state.js"

export function toggleCards() {
  el.cards.classList.toggle("cardBg")
  el.vectors.classList.toggle("cardText")

  state.isMusic = state.isButtonCard
  music.playMusic()
}

export function resetCards() {
  music.stopCurrentMusic()

  el.cards.classList.remove("cardBg")
  el.vectors.classList.remove("cardText")
}