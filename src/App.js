import logo from './logo.svg';
import './App.css';
// State Management
import { 
  RecoilRoot, atom, selector, useRecoilState, useRecoilValue
} from 'recoil'

// Endpoint Authentication
import {FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseUnAuthed} from "@react-firebase/auth";
import firebase from "firebase";
import {firebaseConfig} from "./Helpers/_firebase"


// Pages
import Landing from './pages/Landing'
import Authentication from './pages/Authentication'

// Navigation
import {
  BrowserRouter as Router,
  Switch,
  Redirect, 
  Route, 
  Link
} from 'react-router-dom'

function App() {
  return (
    <RecoilRoot>
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase} >
        <Router>
          <IfFirebaseUnAuthed>
                <Switch>
                  <Route exact path='/'>
                    <Landing /> 
                  </Route>
                  <Route exact path='/auth'>
                    <Authentication />
                  </Route>
                  <Route path="*">
                    <Redirect to path='/'></Redirect>
                  </Route>
                </Switch>
          </IfFirebaseUnAuthed>
          
        </Router>
      </FirebaseAuthProvider>
        
    </RecoilRoot>
  );
}



export default App;
