URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

var nroBebidas = 0

button = document.getElementById("boton");

function servirTrago() {
    button.classList.remove("animate__animated");
    document.getElementById("contador").classList.remove("hidden");

    if (nroBebidas < 5) {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            bebida = data.drinks[0];
            bebidaNom = bebida.strDrink;
            bebidaImg = bebida.strDrinkThumb;

            contenedor = document.getElementById('bebidas');
            contenedor.innerHTML = 
            `<h2>${bebidaNom}</h2>
            <img src="${bebidaImg}">`;

            contenedor.classList.remove('hidden');
            button.innerHTML = "¡Pedir otro trago!"
            contador();
        })
        .catch(error => console.error('Se produjo un error:', error));
    } else {
        button.innerHTML = "No deberías pedir más tragos...";
        button.disabled = true;
        button.style.width = ("30rch");
        document.getElementById("contador").innerHTML = "Has pedido 5 bebidas"
    }
}

function contador(i) {
    nroBebidas++
    document.getElementById("numero").innerHTML = nroBebidas;
}