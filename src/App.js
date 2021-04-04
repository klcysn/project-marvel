import "./App.scss";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import "firebase/auth";
import Footer from "./pages/Footer/Footer";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_AUTH_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGED_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_AUTH_APP_ID,
};
firebase.initializeApp(firebaseConfig);

function App() {
  const dispatch = useDispatch();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({ type: "SignIn", payload: { userId: user } });
    } else {
      dispatch({ type: "SignIn", payload: { userId: "" } });
    }
  });

  // <button onClick={()=>fetchData("characters", "1011334", "series").then(data=>setData(data))}>Fetch Data</button>
  return (
    <>
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
