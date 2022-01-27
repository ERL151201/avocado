/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector('#app');
//web api
//conectamos al server 
//promise -> async/await
window
    .fetch(`${baseUrl}/api/avo`)
    //procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
    //Json -> Data -> Renderizar info browser
    .then((responseJson) => {
        const todosLosItems = []
        responseJson.data.forEach((item) => {
            //crear imagen
            const imagen = document.createElement("img");

            //crear titulo
            const title = document.createElement("h2");
            title.textContent = item.name;
            imagen.src = `${baseUrl}${item.image}`;

            //crear precio
            const price = document.createElement("div");
            price.textContent = item.price;

            const container = document.createElement("div");
            container.append(imagen, title, price);

            todosLosItems.push(container);

        });
        appNode.append(...todosLosItems);
    });