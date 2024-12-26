import state from "./state.js"
import * as timer from "./timer.js"
import { selectControls } from "./selectControls.js"

// Controls

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()
}
export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
}
export function increase5Minutes() {
  timer.plus()
}
export function decrease5Minutes() {
  timer.minus()
}

// Cards
export function musicForest() {
  const card = "card01"
  const vector = "vector01"

  selectControls(card, vector)
}

export function musicRain() {
  const card = "card02"
  const vector = "vector02"

  selectControls(card, vector)
}

export function musicCafe() {
  const card = "card03"
  const vector = "vector03"

  selectControls(card, vector)
}

export function musicFirePlace() {
  const card = "card04"
  const vector = "vector04"

  selectControls(card, vector)
}