import { User as FirebaseUser } from 'firebase/auth';
import { Task } from './task';

declare module 'firebase/auth' {
  interface User extends FirebaseUser {
    // Add any custom user properties here if needed
  }
}

declare module 'firebase/firestore' {
  interface FirestoreDataConverter<T> {
    toFirestore(modelObject: T): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot): T;
  }
}