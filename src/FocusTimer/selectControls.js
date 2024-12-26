import state from "./state.js"
import * as el from "./elements.js"
import { resetCards, toggleCards } from "./toggleCards.js"

export function selectControls(card, vector) {
  if (card === state.SelectCardsBg) {
    return
  } else if (state.SelectCardsBg === "") {
    state.SelectCardsBg = card
    el.selectCards(card, vector)
    toggleCards()
  } else if (card !== state.SelectCardsBg) {
    resetCards()

    el.selectCards(card, vector)
    toggleCards(card, vector)

    state.SelectCardsBg = card
  }
}