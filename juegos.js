
function mostrarJuego(juego) {
  document.getElementById("retroalimentacion").innerHTML = "";
  if (juego === 'juego1') {
    juego1();
  } else if (juego === 'juego2') {
    juego2();
  } else if (juego === 'juego3') {
    juego3();
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.innerText);
}

// JUEGO 1
function juego1() {
  const contenedor = document.getElementById('contenedor-juego');
  contenedor.innerHTML = `
    <h2>Actividad 1: Guardianes de la Danza</h2>
    <p>Arrastra cada objeto o prenda a la figura correcta: Mama Danza o Wawa Danza.</p>
    <img src="images/mama-danza.jpg" width="200" />
    <img src="images/wawa-danza.jpg" width="200" />
    <div>
      ${["Cushma","Chumpi","Sombrero blanco","Pinkullu","Bombo","Huactana","Pollerín","Alfanje","Cascabeles","Chanta","Bandas"]
        .map(p => `<div class="draggable" draggable="true" ondragstart="drag(event)">${p}</div>`).join("")}
    </div>
    <h3>Mama Danza</h3>
    <div class="dropzone" ondrop="drop(event, 'mama')" ondragover="allowDrop(event)"></div>
    <h3>Wawa Danza</h3>
    <div class="dropzone" ondrop="drop(event, 'wawa')" ondragover="allowDrop(event)"></div>
    <button onclick="verificarJuego1()">Verificar</button>
    <button onclick="juego1()">Reintentar</button>
    <button onclick="mostrarTraduccionesJuego1()">Ver traducción</button>
  `;
}

let mamaItems = ["Cushma","Chumpi","Sombrero blanco","Pinkullu","Bombo","Huactana"];
let wawaItems = ["Chumpi","Pollerín","Alfanje","Cascabeles","Chanta","Bandas"];

function drop(ev, zona) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const item = Array.from(document.querySelectorAll(".draggable")).find(el => el.innerText === data);
  if (item) ev.target.appendChild(item);
}

function verificarJuego1() {
  let zonas = document.querySelectorAll(".dropzone");
  let mamaWords = Array.from(zonas[0].children).map(e => e.innerText);
  let wawaWords = Array.from(zonas[1].children).map(e => e.innerText);
  let mamaCorrect = mamaWords.every(w => mamaItems.includes(w));
  let wawaCorrect = wawaWords.every(w => wawaItems.includes(w));
  if (mamaCorrect && wawaCorrect) {
    document.getElementById('retroalimentacion').innerText = "¡Bien hecho! Estás preservando nuestra tradición.";
  } else {
    document.getElementById('retroalimentacion').innerText = "Intenta otra vez. Observa bien sus vestimentas.";
  }
}

function mostrarTraduccionesJuego1() {
  alert(`Traducción de elementos:
- Cushma: poncho
- Chumpi: faja
- Pinkullu: flauta
- Bombo: tambor
- Huactana: pieza de madera
- Pollerín: faldilla
- Alfanje: espada ritual
- Cascabeles: sonajas
- Chanta: peluca con trenzas
- Bandas: cintas multicolores`);
}

// JUEGO 2
function juego2() {
  const contenedor = document.getElementById('contenedor-juego');
  contenedor.innerHTML = `
    <h2>Actividad 2: Crónica de los Danzantes del Sol</h2>
    <p>Arrastra las palabras al lugar correcto en el texto.</p>
    <p>
      Cuando el <span class="dropzone" ondrop="drop(event,'1')" ondragover="allowDrop(event)"></span> despertaba entre las montañas, los Wawa Danza ya estaban en la plaza.
      Ataban su <span class="dropzone" ondrop="drop(event,'2')" ondragover="allowDrop(event)"></span>, recogían su <span class="dropzone" ondrop="drop(event,'3')" ondragover="allowDrop(event)"></span> con símbolos ancestrales, y esperaban la señal del <span class="dropzone" ondrop="drop(event,'4')" ondragover="allowDrop(event)"></span>.
      En ese momento, la <span class="dropzone" ondrop="drop(event,'5')" ondragover="allowDrop(event)"></span> resonaba desde los cerros como un canto antiguo.
      El <span class="dropzone" ondrop="drop(event,'6')" ondragover="allowDrop(event)"></span> elevaba la mirada al cielo y empezaba a soplar su <span class="dropzone" ondrop="drop(event,'7')" ondragover="allowDrop(event)"></span>, mientras golpeaba su <span class="dropzone" ondrop="drop(event,'8')" ondragover="allowDrop(event)"></span>.
      Era el inicio de un nuevo ciclo para la <span class="dropzone" ondrop="drop(event,'5')" ondragover="allowDrop(event)"></span>, la gran dadora de vida.
    </p>
    <div>
      ${["Inti", "Atuendo", "Alfanje", "Tauna", "Allpamama", "Mama Danza", "Pinkullu", "Bombo"]
        .map(p => `<div class="draggable" draggable="true" ondragstart="drag(event)">${p}</div>`).join("")}
    </div>
    <button onclick="verificarJuego2()">Verificar</button>
    <button onclick="juego2()">Reintentar</button>
    <button onclick="mostrarTraduccionesJuego2()">Ver traducción</button>
  `;
}

let respuestasJuego2 = {
  1: "Inti",
  2: "Atuendo",
  3: "Alfanje",
  4: "Tauna",
  5: "Allpamama",
  6: "Mama Danza",
  7: "Pinkullu",
  8: "Bombo"
};

function verificarJuego2() {
  let zones = document.querySelectorAll(".dropzone");
  let correcto = true;
  zones.forEach((zone, idx) => {
    if (zone.innerText !== respuestasJuego2[(idx % 8) + 1]) {
      correcto = false;
    }
  });
  document.getElementById('retroalimentacion').innerText = correcto ?
    "¡Sabiduría ancestral revive contigo!" :
    "Sigue buscando, las palabras tienen espíritu.";
}

function mostrarTraduccionesJuego2() {
  alert(`Traducción de palabras:
- Inti: sol
- Atuendo: ropa ceremonial
- Alfanje: espada ritual
- Tauna: bastón
- Allpamama: madre tierra
- Pinkullu: flauta
- Bombo: tambor`);
}

// JUEGO 3
function juego3() {
  const contenedor = document.getElementById('contenedor-juego');
  contenedor.innerHTML = `
    <h2>Actividad 3: Calendario Sagrado</h2>
    <p>Selecciona la traducción correcta de cada festividad andina:</p>
    <div>
      <p>Killa Raymi →
        <select id="killa">
          <option value="">Selecciona</option>
          <option value="Fiesta de la Luna">Fiesta de la Luna</option>
          <option value="Fiesta del Sol">Fiesta del Sol</option>
        </select>
      </p>
      <p>Kapak Raymi →
        <select id="kapak">
          <option value="">Selecciona</option>
          <option value="Fiesta del Poder">Fiesta del Poder</option>
          <option value="Fiesta del Florecimiento">Fiesta del Florecimiento</option>
        </select>
      </p>
      <p>Pawkar Raymi →
        <select id="pawkar">
          <option value="">Selecciona</option>
          <option value="Fiesta del Florecimiento">Fiesta del Florecimiento</option>
          <option value="Fiesta de la Luna">Fiesta de la Luna</option>
        </select>
      </p>
      <p>Inti Raymi →
        <select id="inti">
          <option value="">Selecciona</option>
          <option value="Fiesta del Sol">Fiesta del Sol</option>
          <option value="Fiesta del Poder">Fiesta del Poder</option>
        </select>
      </p>
    </div>
    <button onclick="verificarJuego3()">Verificar</button>
    <button onclick="juego3()">Reintentar</button>
    <button onclick="mostrarTraduccionesJuego3()">Ver traducción</button>
  `;
}

function verificarJuego3() {
  let correctas =
    document.getElementById("killa").value === "Fiesta de la Luna" &&
    document.getElementById("kapak").value === "Fiesta del Poder" &&
    document.getElementById("pawkar").value === "Fiesta del Florecimiento" &&
    document.getElementById("inti").value === "Fiesta del Sol";

  document.getElementById('retroalimentacion').innerText = correctas ?
    "¡Estás preservando el orden sagrado del tiempo!" :
    "La Pachamama espera. Intenta de nuevo.";
}

function mostrarTraduccionesJuego3() {
  alert(`Traducción de festividades:
- Killa Raymi: Fiesta de la Luna (septiembre)
- Kapak Raymi: Fiesta del Poder (diciembre)
- Pawkar Raymi: Fiesta del Florecimiento (marzo)
- Inti Raymi: Fiesta del Sol (junio)`);
}
