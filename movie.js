let cont = document.getElementById("container")

async function searchMovie() {
    let movie = document.getElementById("movie").value
    
    try {
        cont.innerHTML = null;
        let res=await fetch(`http://www.omdbapi.com/?apikey=3133029&t=${movie}`)
        let data = await res.json()
        console.log('data:', data)
        
        showMovieData(data);

    }
    catch (e) {
        console.log('e:', e)
        
    }
}


function showMovieData(d) {
    let title=document.createElement("p")
    title.innerHTML = `Name: ${d.Title}`

    let year=document.createElement("p")
    year.innerHTML = `Year of Release: ${d.Year}`

    let rating=document.createElement("p")
    rating.innerHTML = `Imdb Rating: ${d.imdbRating}`
    
    let runtime=document.createElement("p")
    runtime.innerHTML = `Run time: ${d.Runtime}`
    
    cont.append(title, year, rating, runtime)
}