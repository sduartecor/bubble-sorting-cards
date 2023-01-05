/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code

  function generateRandomCard() {
    //Obtener Numero Aleatorio
    let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let numeroAleatorio = numbers[Math.floor(Math.random() * numbers.length)];

    //Obenter Palo Aleatorio
    let palos = ["♥", "♠", "♣", "♦"];
    let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

    let color =
      paloAleatorio == "♥" || paloAleatorio == "♦" ? "text-danger" : "";

    document.getElementById(
      "cartasAleatorias"
    ).innerHTML += `<div class="col-auto rounded">
    <!-- Card Body -->
    <div
      class="px-3 my-3 rounded m-auto bg-white "
      style="width: 6rem; height: 10rem"
      id="card"
    >
      <!-- Upper icon-->
      <div class="row  ${color}" style="font-size: 22px;">
        <span id="upper">${paloAleatorio}</span>
      </div>
      <!-- Number -->
      <div class="row text-center my-3 ${color}" style="font-size: 45px;">
        <span id="number">${numeroAleatorio}</span>
      </div>
      <!-- Lower icon-->
      <div
        class="d-flex flex-row  justify-content-end float-right ${color}"
        style="font-size: 22px; "
      >
        <span style="transform: rotate(180deg);" id="bottom">${paloAleatorio}</span>
      </div>
    </div>
</div>`;

    let aleatorio = [numeroAleatorio, paloAleatorio];

    return aleatorio;
  }

  let arrayCartas = [];

  //Generar Array de Cartas
  function generarLista() {
    document.getElementById("cartasAleatorias").innerHTML = "";
    arrayCartas = [];
    let carntidadDeCartas = document.getElementById("cantidad-cartas").value;
    // arrCartas.length = carntidadDeCartas;
    for (let i = 0; i < carntidadDeCartas; i++) {
      let cartaAleatoria = generateRandomCard();
      arrayCartas.push(cartaAleatoria);
      console.log(arrayCartas);
    }
    return arrayCartas;
  }

  //Llamamos a la funcion mediante el boton
  document.getElementById("draw").addEventListener("click", generarLista);

  //Funcion para Ordenar las Cartas
  document.getElementById("sort").addEventListener("click", function() {
    let wall = arrayCartas.length - 1;
    while (wall > 0) {
      let index = 0;

      while (index < wall) {
        //Seteamos un valor a las cartas con letras para el Sort
        if (arrayCartas[index + 1][0] == "K") {
          arrayCartas[index + 1][0] = 13;
        } else if (arrayCartas[index + 1][0] == "Q") {
          arrayCartas[index + 1][0] = 12;
        } else if (arrayCartas[index + 1][0] == "J") {
          arrayCartas[index + 1][0] = 11;
        } else if (arrayCartas[index + 1][0] == "A") {
          arrayCartas[index + 1][0] = 1;
        }

        if (arrayCartas[index][0] == "K") {
          arrayCartas[index][0] = 13;
        } else if (arrayCartas[index][0] == "Q") {
          arrayCartas[index][0] = 12;
        } else if (arrayCartas[index][0] == "J") {
          arrayCartas[index][0] = 11;
        } else if (arrayCartas[index][0] == "A") {
          arrayCartas[index][0] = 1;
        }

        //Bubble Sort
        if (arrayCartas[index][0] > arrayCartas[index + 1][0]) {
          let aux = arrayCartas[index];
          arrayCartas[index] = arrayCartas[index + 1];
          arrayCartas[index + 1] = aux;
        }

        index++;
      }
      wall--;
    }

    document.getElementById("cartasOrdenadas").innerHTML = "";

    for (let i = 0; i < arrayCartas.length; i++) {
      let color =
        arrayCartas[i][1] == "♥" || arrayCartas[i][1] == "♦"
          ? "text-danger"
          : "";

      if (arrayCartas[i][0] == 13) {
        arrayCartas[i][0] = "K";
      } else if (arrayCartas[i][0] == 12) {
        arrayCartas[i][0] = "Q";
      } else if (arrayCartas[i][0] == 11) {
        arrayCartas[i][0] = "J";
      } else if (arrayCartas[i][0] == 1) {
        arrayCartas[i][0] = "A";
      }

      document.getElementById(
        "cartasOrdenadas"
      ).innerHTML += `<div class="col-auto rounded">
      <!-- Card Body -->
      <div
        class="px-3 my-3 rounded m-auto bg-white "
        style="width: 6rem; height: 10rem"
        id="card"
      >
        <!-- Upper icon-->
        <div class="row  ${color}" style="font-size: 22px;">
          <span id="upper">${arrayCartas[i][1]}</span>
        </div>
        <!-- Number -->
        <div class="row text-center my-3 ${color}" style="font-size: 45px;">
          <span id="number">${arrayCartas[i][0]}</span>
        </div>
        <!-- Lower icon-->
        <div
          class="d-flex flex-row  justify-content-end float-right ${color}"
          style="font-size: 22px; "
        >
          <span style="transform: rotate(180deg);" id="bottom">${arrayCartas[i][1]}</span>
        </div>
      </div>
  </div>`;
    }

    return arrayCartas;
  });
};
