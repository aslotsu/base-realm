import ReactDOM from "react-dom";
import styled from "styled-components";
import {useRef, useState} from "react";
import {AnimatePresence} from "framer-motion";
import setCustomData from "./SetCustomData";

const SignUpForm =  ({app}) => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [auth, setAuth] = useState("")



    const nameRef = useRef()
    const mailRef = useRef()
    const authRef = useRef()

    const submitForm = async (event) => {
        event.preventDefault()
        setName("")
        setMail("")
        setAuth("")
        // console.log(name, mail, auth)
        await app.emailPasswordAuth.registerUser({ email: mail, password: auth }).then(()=> console.log("Success")).catch(err =>console.log(err));
        await setCustomData(mail, auth).then(()=> console.log("Working at it, slowly")).catch(error=> console.log((error)))



    }

    const nameChanger = (event) => {
        setName(event.target.value)
    }
    const mailChanger = (event) => {
        setMail(event.target.value)
    }
    const authChanger = (event) => {
        setAuth(event.target.value)
    }
    return (ReactDOM.createPortal(<AnimatePresence>
        <Login>
            <form>
                <Inputs className="inputs">
                    <div className="name">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" ref={nameRef} value={name} onChange={nameChanger}/>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" ref={mailRef} value={mail} onChange={mailChanger}/>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" ref={authRef} value={auth} onChange={authChanger}/>
                    </div>
                    <button type="submit" onClick={submitForm}>Submit</button>
                </Inputs>
            </form>
        </Login>
    </AnimatePresence>, document.getElementById("portal")))
}

const Login = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
  height: 20vh;
  color: white;
  z-index: 3;
  box-shadow: 2px 2px 2px grey;
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

export default SignUpForm