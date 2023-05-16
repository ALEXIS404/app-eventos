//Importar firebase y su configuracion
import {db} from '../firebase';

//Importar getFirestore para leer la base de datos
import { collection, doc, updateDoc, query, getDocs, onSnapshot} from 'firebase/firestore';

//Leer la coleccion de artistas
//const artistas = query(collection(db, "artistas"));

//Leer los documentos de la coleccion de forma asincrona
//const querySnapshot = await getDocs(artistas);

onSnapshot(collection(db, "artistas"), function(querySnapshot){
  let artistas_contenedor = document.getElementById('artistas');
  artistas_contenedor.innerHTML = '';
  querySnapshot.forEach((doc) => {
    let artista = doc.data()
      artistas_contenedor.innerHTML += `<li class="group">
              <div>
                <span>${artista.nombre}</span>
                <span class="text-sm">${artista.nacionalidad} - ${artista.genero}</span>

                <hr>
                <div class="flex-none text-sm flex gap-4">
                <a href="editar-artista.html?id=${doc.id}">Editar</a>
                  <a href="eliminar-artista.html?id=${doc.id}">Eliminar</a>
                
                </div>
              </div>

              <img src="${artista.imagen}" alt="${artista.nombres}" class="w-16 h-16 lg:w-48 lg:h-48 rounded-full transition-all duration-500 group-hover:scale-[105%] group-hover:transform group-hover:border group-hover:border-pink-500">
      </li>`;
  });
});


//Leer los datos del documento con el id pasado por el url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');
console.log(id);
const docRef = doc(db, "artistas", id);

onSnapshot(docRef, (doc) => {
  if (doc.exists()) {
    let artista = doc.data();
    document.getElementById('nombre').value = artista.nombre;
    document.getElementById('nacionalidad').value = artista.nacionalidad;
    document.getElementById('genero').value = artista.genero;
    document.getElementById('imagen').value = artista.imagen;
  } else {
    console.log("No existe el documento");
  }
});

//Buscar el boton de guardar
const btnGuardar = document.getElementById('guardar');

//Agregar el evento click al boton guardar
btnGuardar.addEventListener('click', guardar);

//Function para guardar los datos del artista

function guardar(){
  const nombre = document.getElementById('nombre').value;
  const nacionalidad = document.getElementById('nacionalidad').value;
  const genero = document.getElementById('genero').value;
  const imagen = document.getElementById('imagen').value;

  const docRef = doc(db, "artistas", id);

  // actualizar en firebase el documento con el id
  return updateDoc(docRef, {
    nombre: nombre,
    nacionalidad: nacionalidad,
    genero: genero,
    imagen: imagen
  })
  .then(() => {
    window.location.href = "artistas.html";
  })
  .catch((error) => {
    // The document probably doesn't exist.
    console.error("Error: ", error);
  });
}