//Constants

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

const container = document.querySelector('.container')

//Loop over array and create cards
function dealCards() {
    for (let i = 0; i < cardObj.length; i++) {
        //create an image element called cards
        var cards = document.createElement('img')
        //give the image element the backface graphic
        cards.setAttribute('src', 'images/marble.jpg')
        //event listener to click the images and call on flip function
        cards.addEventListener('click', flipOver)
        //Send images to container
        container.appendChild(cards)
        }
        console.log(cards)
    }

//click and compare cards
function flipOver() {
    var clicked = document.querySelector('img')
    this.classList.add('clicked')
}  

dealCards()