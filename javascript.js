window.onload = function(){
    const projects = [{
        title: 'gems game',
        imgLink: 'assets/images/gems.png',
        deployedLink: 'https://hayleyhartman.github.io/unit-4-game/',
        imageDesc: 'image of a game in which you click gems for points',
        caption: 'built with: html, bootstrap, javascript, css'
    },{
        title: 'your manager',
        imgLink: 'assets/images/ym.png',
        deployedLink: 'https://github.com/CWRU-KHAN/your-manager',
        imageDesc: 'image of a group organization and event management app',
        caption: 'built with: vue, javascript, html, css'
    },{
        title: 'react click game',
        imgLink: 'assets/images/stink.png',
        deployedLink:'https://github.com/hayleyhartman/clicky-game',
        imageDesc: 'image of 12 picures of the same adorable cat',
        caption: 'built with: react, html, css, javascript, bootstrap'
    },{
        title:'store inventory app',
        imgLink:'assets/images/addTo.png',
        deployedLink:'https://github.com/hayleyhartman/bamazon',
        imageDesc:'image of a node app run through terminal of a user adding an item to a store inventory',
        caption:'built with: node, mysql, javascript'
    },{
        title:'node media app',
        imgLink:'assets/images/movie-this.png',
        deployedLink:'https://github.com/hayleyhartman/LIRI',
        imageDesc:'image of a node app run through terminal that gives information to the user about upcoming concerts, movies, and songs',
        caption:'built with: node, javascript, spotify api, omdb api'
    },{
        title:'hangman game',
        imgLink:'assets/images/words.png',
        deployedLink:'https://hayleyhartman.github.io/word-guess-game/',
        imageDesc:'image of a word guess game',
        caption:'built with: html, bootstrap, javascript, css'
    },{
        title:'movie recommender',
        imgLink:'assets/images/mood.png',
        deployedLink:'https://fka-hufflepuff.github.io/api-project/',
        imageDesc:'image of six emjois displaying different emotions sitting next to each other',
        caption:'built with: html, javascript, css, youtube api, omdb api'
    }]

    projects.map(({
        title,
        imgLink,
        deployedLink,
        imageDesc,
        caption
    }) => {
        //top div
        const firstDiv = document.createElement('DIV')
        firstDiv.classList.add('col-xl-4', 'col-lg-6', 'col-md-4')
        //<a>
        const link = document.createElement('A')
        link.setAttribute('href', deployedLink)
        link.setAttribute('target', '_blank')
        //div class card
        const card = document.createElement('DIV')
        card.classList.add('card')
        //image card top
        const cardImage = document.createElement('IMG')
        cardImage.classList.add('card-img-top')
        cardImage.setAttribute('src', imgLink)
        cardImage.setAttribute('alt', imageDesc)
        //div card body
        const cardBody = document.createElement('DIV')
        cardBody.classList.add('card-body')
        //project title
        const projectTitle = document.createElement('H6')
        projectTitle.classList.add('card-text')
        const titleText = document.createTextNode(title)
        projectTitle.appendChild(titleText)
        //project desciption
        const projectDescription = document.createElement('P')
        const pdText = document.createTextNode(caption)
        projectDescription.appendChild(pdText)

        projectTitle.appendChild(projectDescription)
        cardBody.appendChild(projectTitle)
        card.appendChild(cardImage)
        card.appendChild(cardBody)

        link.appendChild(card)
        firstDiv.appendChild(link)
        const testId = document.getElementById("testDynamic")
        testId.appendChild(firstDiv)
    })
}