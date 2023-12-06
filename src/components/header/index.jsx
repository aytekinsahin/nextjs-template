'use client'
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from './header.module.css'
import LoginForm from "@/components/loginForm";

export default function Header(){
    const { data: session,status } = useSession();
    return(
        <div className={styles.main}>
            <div className={styles.menu}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/clientsession"}>Client Session</Link>
            </div>
            <div className={styles.login}>
                {status == "authenticated"?
                    <button onClick={()=>signOut({callbackUrl:'/'})}>Logout</button>:
                    <LoginForm/>}

            </div>
        </div>
    )
}
