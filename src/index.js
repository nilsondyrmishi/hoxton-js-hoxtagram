
const imageContainerEl = document.querySelector('.image-container')

const states = {
    images: [],
};



function getImages() {
    return fetch("http://localhost:3000/images").then((response) =>
        response.json()
    );
}

function renderImages() {

    for (const images of states.images) {

        const imageArticle = document.createElement('article')
        imageArticle.setAttribute('class', 'image-card')

        const titleHeader = document.createElement('h2')
        titleHeader.setAttribute('class', 'title')
        titleHeader.textContent = images.title

        const imgEl = document.createElement('img')
        imgEl.setAttribute('src', images.image)
        imgEl.setAttribute('class', 'image')

        const btnDiv = document.createElement('div')
        btnDiv.setAttribute('class', 'likes-section')

        const likesEl = document.createElement('span')
        likesEl.setAttribute('class', 'likes')
        likesEl.textContent = '0 likes'

        const likesButton = document.createElement('button')
        likesButton.setAttribute('class', 'like-button')
        likesButton.textContent = '♥'

        btnDiv.append(likesEl, likesButton)

        const commentsList = document.createElement('ul')
        commentsList.setAttribute('class', 'comments')

        for (const comment of images.comments) {
            const commentLi = document.createElement('li')

            commentsList.append(commentLi)
            commentLi.textContent = comment.content
        }

        imageArticle.append(titleHeader, imgEl, btnDiv, commentsList)
        imageContainerEl.append(imageArticle)
    }

}


getImages().then(function (images) {
    states.images = images

    renderImages();
});


