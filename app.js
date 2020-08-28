const cardObj = [
    {name: 'bramble', image: 'images/bramble.png'},
    {name: 'bramble', image: 'images/bramble.png'},
    {name: 'highball', image: 'images/highball.png'},
    {name: 'highball', image: 'images/highball.png'},
    {name: 'julep', image: 'images/julep.png'},
    {name: 'julep', image: 'images/julep.png'},
    {name: 'martini', image: 'images/martini.png'},
    {name: 'martini', image: 'images/martini.png'},
    {name: 'mint', image: 'images/mint.png'},
    {name: 'mint', image: 'images/mint.png'},
    {name: 'wine', image: 'images/wine.png'},
    {name: 'wine', image: 'images/wine.png'}
]



function dealCards() {
    for (let i = 0; i < cardObj.length; i++) {
        var container = document.querySelector('.container')
        var cards = document.createElement('img')
        cards.setAttribute('src', 'images/marble.jpg')
        container.appendChild(cards)
    }
}

dealCards()