function Letov(lyrics) {
  return random;

  function random() {
    let song = Math.floor(Math.random() * lyrics.length)
    let string = Math.floor(Math.random() * lyrics[song].lyrics.length)
    return lyrics[song].lyrics[string] !== undefined 
     ? lyrics[song].lyrics[string] 
     : random()
  }
}

export default Letov
