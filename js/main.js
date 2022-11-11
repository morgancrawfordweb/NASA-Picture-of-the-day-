
document.querySelector('button').addEventListener('click', getDailyPick)

function getDailyPick(){
 
  const url = `https://api.nasa.gov/planetary/apod?api_key=cVhgsiFhzxtsDHVCuArL9GkQgZ7llej9GIZhuNuL`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('img').src = data.url
        document.querySelector('h3').innerHTML = data.explanation
        document.querySelector('h2').innerHTML = data.title

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}





