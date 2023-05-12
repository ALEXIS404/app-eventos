import {db} from '../firebase';

//Importar getFirestore para leer la base de datos
import { collection, query, getDocs} from 'firebase/firestore';

//Leer la coleccion de eventos
const eventos = query(collection(db, "eventos"));

//Leer los documentos de la coleccion de forma asincrona
const querySnapshot = await getDocs(eventos);

let eventos_contenedor = document.getElementById('eventos');

querySnapshot.forEach((doc) => {    
  // doc.data() is never undefined for query doc snapshots
  let eventos = doc.data();
  eventos_contenedor.innerHTML += `<li>${eventos.nombre} - ${eventos.artista_id} 
  <img src="${eventos.imagen}" alt=${eventos.nombre}" class="w-48 h-48 rounded-full">
   
  </li>`;
});