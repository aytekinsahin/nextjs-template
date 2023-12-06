import {signIn} from "next-auth/react";
import styles from './loginform.module.css'

export default function LoginForm(){
    const HandleSubmit = (e)=> {
        e.preventDefault();
        console.log(e);
        signIn(
            "credentials",
            {username:"aytekin",password:"1234",test:"test",redirect:false})
    }
    return(
        <div onSubmit={HandleSubmit}>
            <form>
            <div><input type={"text"} name={"username"} placeholder={"username"}/></div>
            <div><input type={"password"} name={"password"} placeholder={"password"}/></div>
            <div>
            <button type={"submit"}>Login</button>
            </div>
            </form>
        </div>
    )
}
