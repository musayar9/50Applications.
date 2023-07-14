const APIURL = 'https://api.github.com/users/'

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


async function getUser(username){
    try{
        const {data} = await axios(APIURL+username)
        console.log(data);
        createUserCard(data)
        getRepos(username)
    }catch(err){
        if(err.response.status==400){
            createErrorCard("No profile was found")
        }
    }
}

async function getRepos(username){
    try{
        const {data} = await axios(APIURL+username+ '/repos?sort=creater')
        addReposToCard(data)
        console.log("getRpes", data);
    }catch(err){
        createErrorCard("Propnlem Ferching Repos")
    }
}


function createUserCard(user){
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` :""
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        
        <div class="user-info">
            <h2>${userID}</h2>
            ${userBio}
            
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
                <li><a class="connect" target="_blank" href=${user.html_url}>GitHub' git</a></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>`
    
    main.innerHTML = cardHTML
}


function addReposToCard(repos){
    const reposEl = document.getElementById("repos")
    
    repos.slice(0,5).forEach(repo=>{
        const repoEl = document.createElement("a")
        repoEl.classList.add("repo")
        repoEl.href = repo.html_url 
        repoEl.target="_blank"
        repoEl.innerText = repo.name
        
        reposEl.appendChild(repoEl)
    })
}

function createErrorCard(msg){
    const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `
    
    main.innerHTML = cardHTML
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const user = search.value
    
    if(user){
        getUser(user)
    }
    
    search.value = ''
})