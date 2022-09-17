const WHITE_KEY = ["z", "x", "c", "v", "b", "n", "m"]
const BLACK_KEY = ["s", "d", "f", "g", "h"]
const pianoKeys = document.querySelectorAll(".piano__key")
const pianoWhite = document.querySelectorAll(".piano__white")
const pianoBlack = document.querySelectorAll(".piano__black")
pianoKeys.forEach((key) => {
  key.addEventListener("click", () => {
    playNote(key)
  })
})
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.play()
  noteAudio.currentTime = 0
  key.classList.add("active")
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active")
  })
}

document.addEventListener("keydown", (e) => {
  if (e.repeat) return
  const key = e.key
  console.log(key)
  const whiteKeyIndex = WHITE_KEY.indexOf(key)
  const blackKeyIndex = BLACK_KEY.indexOf(key)
  if (whiteKeyIndex > -1) playNote(pianoWhite[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(pianoBlack[blackKeyIndex])
})
