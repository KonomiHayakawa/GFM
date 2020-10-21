import firebase from '../firebase'

// feedback 

export const addFeedbackMessage = (messageId, message) => {
  return firebase.database().ref(`/messages/${messageId}`).set(message)
}