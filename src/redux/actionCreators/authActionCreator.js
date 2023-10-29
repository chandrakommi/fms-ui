import { auth } from '../../API/firebase'
import { actionTypes } from '../actionTypes/authActionTypes'
const loginUser = payload => {
  return {
    type: actionTypes.SIGN_IN,
    payload,
  }
}

const logoutUser = () => {
  return {
    type: actionTypes.SIGN_OUT,
  }
}

/** Action Creator*/

const signInUser = (email, password) => dispatch => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      const { email, uid } = user?.user
      console.log('success', email, uid)
    })
    .catch(err => console.log(err))
}

const signUpUser = (email, name, password) => async dispatch => {
  try {
    auth.createUserWithEmailAndPassword(email, password)
    const currentUser = auth.currentUser
    currentUser.updateProfile({ displayName: name })
    console.log(currentUser)
  } catch (error) {
    console.error('Sign-up error:', error)
  }
}

const signOutUser = () => dispatch => {
  dispatch(logoutUser())
}

export { signUpUser, signInUser, signOutUser }
