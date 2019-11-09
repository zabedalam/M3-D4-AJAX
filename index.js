window.onload = () => {
    fetch("https://api.myjson.com/bins/18fh4d")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}