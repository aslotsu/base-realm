import ReactDOM from "react-dom";
import styled from "styled-components";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginForm = ({app, Realm}) => {

    const navigate = useNavigate()
    const [mail, setMail] = useState("")
    const [auth, setAuth] = useState("")

    const mailRef = useRef()
    const authRef = useRef()

    const submitForm = async(event) => {
        event.preventDefault()
        setMail("")
        setAuth("")



        async function loginEmailPassword(email, password) {
            // Create an email/password credential
            const credentials = Realm.Credentials.emailPassword(email, password);
            try {
                // Authenticate the user
                const user = await app.logIn(credentials);
                console.assert(user.id === app.currentUser.id);
                return user;
            } catch (err) {
                console.error("Failed to log in", err);
            }
        }

        const user = await loginEmailPassword(mail, auth);
        if (user) {
            navigate("products")
        }

    }



    const mailChanger = (event) => {
        setMail(event.target.value)
    }
    const authChanger = (event) => {
        setAuth(event.target.value)
    }
    return (ReactDOM.createPortal(<Login>
        <form>
            <Inputs className="inputs">
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" ref={mailRef} value={mail} onChange={mailChanger}/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" ref={authRef} value={auth} onChange={authChanger}/>
                </div>
                <button type="submit" onClick={submitForm}>Log In</button>
            </Inputs>
        </form>
    </Login>, document.getElementById("portal")))
}

const Login = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
  height: 20vh;
  color: white;
  padding: 30px;
  background-color: palevioletred;
  border: 2px solid springgreen;
  border-radius: 22px;
  align-items: center;

`

const Inputs = styled.div`
  width: 80%;
  height: 100%;
`
export default LoginForm