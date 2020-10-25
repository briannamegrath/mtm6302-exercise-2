const $images =
  document.getElementById('images')

const images = []

for (let i = 0; i <= 11; i++) {
  images.push(`<img src="images/${i}.jpeg" title = " All images property of Pexels" alt = " All images property of Pexels" >`)
}

$images.innerHTML =
images.join('')
