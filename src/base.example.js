import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

 const app = firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  })

const db = database(app)

export const auth = app.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
Rebase.createClass(db)
export default Rebase.createClass(db)