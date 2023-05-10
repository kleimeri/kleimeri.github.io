fetch('./js/catalog/data/example.json')
.then(response => response.json())
.then(block_pages => {
console.log(block_pages)
})

