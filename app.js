//Card objects array
const cardObj = [
    {name: 'bramble', img: 'images/bramble.png'},
    {name: 'bramble', img: 'images/bramble.png'},
    {name: 'highball', img: 'images/highball.png'},
    {name: 'highball', img: 'images/highball.png'},
    {name: 'julep', img: 'images/julep.png'},
    {name: 'julep', img: 'images/julep.png'},
    {name: 'martini', img: 'images/martini.png'},
    {name: 'martini', img: 'images/martini.png'},
    {name: 'mint', img: 'images/mint.png'},
    {name: 'mint', img: 'images/mint.png'},
    {name: 'wine', img: 'images/wine.png'},
    {name: 'wine', img: 'images/wine.png'}
]

//loop through array creating an img element from each object and render to HTML
function dealCards() {
    for (let i = 0; 0 < cardObj.length; i++) {
        var container = document.querySelector('.container')
        var cards = document.createElement('img')
        container.appendChild(cards)
    }
}

dealCards()