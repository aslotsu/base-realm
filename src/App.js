import LoginForm from "./components/LoginForm";
import * as Realm from "realm-web"
import {useState} from "react";
import SignUpForm from "./components/SignUpForm";

export const app = new Realm.App({id: "application-0-ghfqi"})

const App = () => {
    const [log, setLog] = useState(true)
    return <div>
        <h2>{log ? "Welcome, Log In ": "Welcome! Use the form below to Sign Up!"}</h2>
        {log ? <LoginForm app={app} Realm={Realm} /> : <SignUpForm app={app}/>}
        <button onClick={() => setLog(prevState => !prevState)}>{log ? "Need new account" : "I have an account"}</button>
    </div>
}

export default App

