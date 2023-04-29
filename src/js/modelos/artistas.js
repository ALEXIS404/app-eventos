//importar fire
import '../firebase';

import { getFirestore, collection } from 'firebase/firestore';

const db = getFirestore(app);

const artistas = collection(db, 'artistas');

