document.addEventListener('DOMContentLoaded', function()
{
    const avatar = document.querySelector('.profile-avatar')
    const nome = document.querySelector('.profile-name')
    const username = document.querySelector('.profile-username')
    const repositorios = document.querySelector('.repositorios')
    const seguidores = document.querySelector('.seguidores')
    const seguindo = document.querySelector('.seguindo')
    const link = document.querySelector('.profile-link')

    const url = 'https://api.github.com/users/oArthurz'

    fetch(url).then(function(resposta)
    {
        return resposta.json()
    })
    .then(function(json)
    {
        console.log(json)

        avatar.src = json.avatar_url
        nome.innerText = json.name
        username.innerText = json.login
        repositorios.innerText = json.public_repos
        seguidores.innerText = json.followers
        seguindo.innerText = json.following
        link.href = json.html_url
    })
})