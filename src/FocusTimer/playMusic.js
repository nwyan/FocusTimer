import { musicForest, musicRain, musicCafe, musicFirePlace } from "./sounds.js"
import state from "./state.js"

export function playMusic() {
  // Selecionando a música a ser tocada com base no estado `isMusic`
  switch (state.isMusic) {
    case "musicForest":
      musicForest.play()
      break
    case "musicRain":
      musicRain.play()
      break
    case "musicCafe":
      musicCafe.play()
      break
    case "musicFirePlace":
      musicFirePlace.play()
      break
    default:
      // Caso a música não seja válida, não faz nada
      break
  }
}

export function stopCurrentMusic() {
  // Pausa a música que está sendo tocada com base no estado `isMusic`

  switch (state.isMusic) {
    case "musicForest":
      musicForest.pause()
      break
    case "musicRain":
      musicRain.pause()
      break
    case "musicCafe":
      musicCafe.pause()
      break
    case "musicFirePlace":
      musicFirePlace.pause()
      break
    default:
      // Caso a música não seja válida, não faz nada
      break
  }
}