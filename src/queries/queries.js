import firebase from './../firebase';


export const registration = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(res => console.log(res))
}

export const authentication = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(res => console.log(res))
}

export const kek = () => {
  firebase.collection("personalCalculator").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
}