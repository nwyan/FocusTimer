import { controls, controlsCards } from "./elements.js"
import * as actions from "./actions.js"
import state from "./state.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })

  controlsCards.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    state.isButtonCard = action

    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}