document.addEventListener('DOMContentLoaded', function()
{
    const avatar = document.querySelector('.profile-avatar')
    const nome = document.querySelector('.profile-name')
    const username = document.querySelector('.profile-username')
    const repositorio = document.querySelector('.repositorios')
    const seguindo = document.querySelector('.seguindo')
    const seguidores = document.querySelector('.seguidores')
    const botao = document.querySelector('.profile-link') 

    const link = 'https://api.github.com/users/oArthurz'

    fetch(link).then(function(resposta)
    {
        return resposta.json()
    })

    .then(function(json)
    {
        console.log(json)

        avatar.src = json.avatar_url
        nome.innerText = json.name
        username.innerText = json.login
        repositorio.innerText = json.public_repos
        seguindo.innerText = json.following
        seguidores.innerText = json.followers
        botao.href = json.html_url
    })
})