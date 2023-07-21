/*movie id = "https://api.themoviedb.org/3/movie/299536?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0" */
/*searh area = https://api.themoviedb.org/3/search/movie?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0&query=avengers */
/*poular movei = https://api.themoviedb.org/3/movie/popular?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0 */
/*poster = https://image.tmdb.org/t/p/w500/${movie.poster_path} */

const categories = "https://api.themoviedb.org/3/genre/movie/list?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0"
// const discover = "https://api.themoviedb.org/3/discover/movie?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0&with_genres=99"
// const topraterd = "https://api.themoviedb.org/3/movie/top_rated?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0&page=1"
console.log("categories",categories);

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=week&api_key=70d1cc698a6c7bcbc7d97db267bc4ca0&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0&query="';
// const credit = "https://api.themoviedb.org/3/movie/299536/credits?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0";
// console.log(credit);


const videos = "https://api.themoviedb.org/3/movie/31408?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0&append_to_response=videos,credits,images,posters"
const main = document.getElementById("main")
const form =  document.getElementById("form")
const search = document.getElementById("search")

//bu aşağıdaki 3lü apı kullanılacak 
const videosDetail = 'https://api.themoviedb.org/3/movie/343611?&append_to_response=videos&api_key=70d1cc698a6c7bcbc7d97db267bc4ca0'
const recommendations = 'https://api.themoviedb.org/3/movie/299536/recommendations?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0'
const videoSearch = "https://www.themoviedb.org/video/play?key=k3kzqVliF48"
const watchProviders= "https://api.themoviedb.org/3/movie/157336/watch/providers?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0"
const veri ="https://api.themoviedb.org/3/movie/now_playing?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0"
const reviews = "https://api.themoviedb.org/3/movie/299536/reviews?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0"
const similar = "https://api.themoviedb.org/3/movie/157336/similar?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0"
const upComing ="https://api.themoviedb.org/3/movie/upcoming?api_key=70d1cc698a6c7bcbc7d97db267bc4ca0&page=2"
getMovies(videosDetail)
async function getMovies(videosDetail){
    const res = await fetch(videosDetail)
    console.log(res);
    const data = await res.json()
    // const slice = data.cast.slice(0, 7)
    // console.log(slice);
    console.log(data);
}

// getMovies(API_URL)
// async function getMovies(url){
//     const res = await fetch(url)
//     console.log(res);
//     const data = await res.json()
//     //  const slice = data.results.slice(0, 6)
//     // console.log(slice);
// showMovies(data.results)




// }


function showMovies  (movies){
    main.innerHTML= '';

    movies.forEach((movie)=>{
        console.log(movie);
        const {title, poster_path, vote_average, overview} = movie
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")

        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
              <span class="${getClassByRate(vote_average)}">${vote_average}</span>
             </div>
        <div class="overview">
        <h3>Overview</h3>
        ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })


}
function getClassByRate(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const searchItem = search.value 
    console.log(searchItem);


    if(searchItem  && searchItem !== ''){
        getMovies(SEARCHAPI + searchItem)

        search.value =''
    }else{
        window.location.reload()
    }
})