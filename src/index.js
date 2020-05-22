
document.addEventListener("DOMContentLoaded", ()=>{

    const albumsDisplay = document.getElementById("albums-display")

    getData("vaporwaves", albums => {
        renderAlbumsTo(albums, albumsDisplay)
    })
    
})