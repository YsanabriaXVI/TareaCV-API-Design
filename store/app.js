//? Evento que se ejecuta cuando el DOM ha sido cargado

document.addEventListener('DOMContentLoaded', async () => {

    const listaProductos = document.querySelector('#listaProductos')

    const productos = await getProductos()

    let body = ""

    for (let { image, title, price, category } of productos) {
        body += `
        <div class="m-3 p-3 card" style="width: 18rem;">
        <img src="${image}" width="50px" class="card-img-top" alt="${title}>
        <div class="mt-2 card-body">
        <h5 class="mt-5 card-title">${title.length >= 30 ? title.substring(0, 30) + "..." : title}</h5>
        <p class="card-text">${category}</p>
        <h5 class="card-text">L${price.toFixed(2)}</h5>
        <a href="#" class="btn btn-primary btn-block mt-auto">Go somewhere</a>
    </div>
  </div>

       `
    }

    

    listaProductos.innerHTML = body

})

const getProductos = async () => {

    const response = await fetch('https://fakestoreapi.com/products')

    const productos = await response.json()

    return productos

}