
const url = "http://localhost:3000"

const getData = (path, callback) => {
    fetch(`${url}/${path}`)
    .then(resp => resp.json())
    .then(callback)
}