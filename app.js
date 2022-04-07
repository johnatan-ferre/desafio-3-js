const libros = [{
    id: 1,
    titulo: "Dune",
    autor: "Herbert",
    precio: 690
},
{
    id: 2,
    titulo: "1984",
    autor: "Orwell",
    precio: 450
},
{
    id: 3,
    titulo: "Sapiens",
    autor: "Harari",
    precio: 950
},
{
    id: 4,
    titulo: "Hyperion",
    autor: "Simmons",
    precio: 1100
},
{
    id: 5,
    titulo:"Los Miserables",
    autor: "Victor Hugo",
    precio: 1800
}
];

for (const libro of libros) {
let nuevoLibro = document.createElement("div");
nuevoLibro.innerHTML = `<h3> ID: ${libro.id}</h3>
                        <p> Título: ${libro.titulo}</p>
                        <p> Autor: ${libro.autor}</p>
                        <p> Precio: $ ${libro.precio}</p>`;
document.body.appendChild(nuevoLibro);
}