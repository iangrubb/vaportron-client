

const albumTemplate = album => (`
    <div class="album-card">
        <h2>${album.album}</h2>
        <h3>  by ${album.artist}</h3>
        <img src="${album.image_url}"/>
    </div>
`)

const renderAlbumTo = (album, container) => {
    container.insertAdjacentHTML("beforeend", albumTemplate(album))
}

const renderAlbumsTo = (albums, container) => {
    albums.forEach(album => {
        renderAlbumTo(album, container)
    })
}
