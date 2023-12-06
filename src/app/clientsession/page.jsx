'use client'
import { useSession } from "next-auth/react"
import {useState,useEffect} from "react";
import {ProviderList} from "@/app/clientsession/ProviderList";

export default function ClientSession(){
    const [providers, setProviders] = useState({})
    const { data: session, status } = useSession();


    useEffect(() => {

        ProviderList().then((list)=> {
            console.log(list.credentials)
            setProviders(list.credentials)
        })
        console.log(session)
    }, []);

    return(
        <div>
            <h3>useSession()</h3>
            <p>
                NextAuth.js istemcisindeki useSession() React Hook, birisinin oturum açıp açmadığını kontrol etmenin en kolay yoludur.
            </p>
            <p><b>Client Side</b> : yes</p>
            <p><b>Server Side</b> : no</p>
            <p><b>Status</b> : {status}</p>
            {/*<p><b>Session</b> : {session ? session : "Session bulunamadı"}</p>*/}
            <h3>getProviders()</h3>
            <p>
                getProviders() yöntemi, oturum açmak için geçerli olarak yapılandırılmış sağlayıcıların listesini döndürür.
            </p>
            <p><b>Client Side</b> : yes</p>
            <p><b>Server Side</b> : yes</p>
            <p><b>Providers.id :</b> {providers.id}</p>
            <p><b>Providers.name :</b> {providers.name}</p>
            <p><b>Providers.signinUrl :</b> {providers.signinUrl}</p>
            <p><b>Providers.callbackUrl :</b> {providers.callbackUrl}</p>
        </div>
    )
}
