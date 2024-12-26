import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"

export function countdown() {
  clearTimeout(state.countdownId)

  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => countdown(), 1000)
}

export function plus() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes += 5
  updateDisplay(minutes, seconds)
}

export function minus() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes -= 5
  if (minutes < 0) {
    return
  }
  updateDisplay(minutes, seconds)
}

export function updateDisplay(minutes, seconds) {
  //  nullish coalesing operator
  minutes = minutes ?? state.minutes //se for null pega o valor no state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0") //atualiza com o conteudo de minutes
  //String(minutes) => trasforma em uma string
  // .padStart(2, "0") => preencha o começo com 2 caracters e quando tiver apenas 1 carater preencha com 0
  el.seconds.textContent = String(seconds).padStart(2, "0")
}