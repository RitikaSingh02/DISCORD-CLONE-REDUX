import {React,useEffect} from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';s
import './App.css';
import Sidebar from "./sidebar.js"
import Login from "./Login.js"
import Chat from "./chat.js"
import {selectUser} from "./features/counter/UserSlice.js"
import { useDispatch,useSelector } from 'react-redux';
import { auth } from './firebase';
import { login,logout } from "./features/counter/UserSlice"

function App() {
  const user= useSelector(selectUser);
  const dispatch=useDispatch();
//everytime the user loads we have to set the user state once so doing useeffect for once 

useEffect(() => {
  auth.onAuthStateChanged(authUser=>{
    console.log("this is the user",authUser);
              // $: ƒ ()
              // $b: Jm {G: Array(0), l: "AIzaSyD8apKPZSeHIeNtza6CCw5qDP_7YXxBy_k", m: "[DEFAULT]", s: "discord-clone-aee8f.firebaseapp.com", a: Ji, …}
              // Aa: ƒ (f)
              // Ba: ƒ (f)
              // G: []
              // N: um {a: Jm, b: Array(0), enrolledFactors: Array(0), c: ƒ}
              // P: true
              // R: [ƒ]
              // W: Fn {m: false, settings: fm, app: FirebaseAppImpl, a: Ji, R: Array(0), …}
              // X: []
              // a: Ji {c: "AIzaSyD8apKPZSeHIeNtza6CCw5qDP_7YXxBy_k", l: "https://securetoken.googleapis.com/v1/token", v: Ze, g: {…}, h: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", …}
              // aa: Fn {m: false, settings: fm, app: FirebaseAppImpl, a: Ji, R: Array(0), …}
              // b: Bm {c: Ji, a: "AG8BCnfbkLKTjhVbbU9zXBqZBdy9aGO2JCh4UmowzwgMPMBCpt…eorB-kWndzgIvdd9b_nzaeLAKPKoVmKJxs_Cu13oijFn0ccQ9", b: ig}
              // ba: Fn {m: false, settings: fm, app: FirebaseAppImpl, a: Ji, R: Array(0), …}
              // displayName: "RITIKA SINGH"
              // email: "ritika2002singh@gmail.com"
              // emailVerified: true
              // f: null
              // fb: null
              // ha: tn {a: "AIzaSyD8apKPZSeHIeNtza6CCw5qDP_7YXxBy_k:[DEFAULT]", b: Uk}
              // i: Hl {i: {…}, u: 1607087480492, O: "discord-clone-aee8f.firebaseapp.com", m: "AIzaSyD8apKPZSeHIeNtza6CCw5qDP_7YXxBy_k", v: "[DEFAULT]", …}
              // isAnonymous: false
              // l: "AIzaSyD8apKPZSeHIeNtza6CCw5qDP_7YXxBy_k"
              // m: "[DEFAULT]"
              // metadata: Gm {a: "1607087144294", b: "1607087481012", lastSignInTime: "Fri, 04 Dec 2020 13:11:21 GMT", creationTime: "Fri, 04 Dec 2020 13:05:44 GMT"}
              // multiFactor: um {a: Jm, b: Array(0), enrolledFactors: Array(0), c: ƒ}
              // oa: undefined
              // pa: null
              // phoneNumber: null
              // photoURL: "https://lh3.googleusercontent.com/a-/AOh14Giz5mDqIov-di0tvSHsqc7ETq2KVdDRUKb74yZpsw=s96-c"
              // providerData: [Im]
              // refreshToken: "AG8BCnfbkLKTjhVbbU9zXBqZBdy9aGO2JCh4UmowzwgMPMBCpttb-9lLRKRo0z_8h3GnJvlYX7Vqjaouidiy45Lf5B0XhRhRG4gXiUl3dQXLoYmYtwUtYR-sq9IniDLnoYfDXsfM40-rYrJyofKGWfvvBnMCyReQRb8F_K76rYjIsvn64XQ_f9ZaCznrSOQETu9fU4Hc7ymhr6mEcXCwjhO_Qep-2ogu7p1LxmJD2XmSUIUycuEGoC24sTHv8VZYwKAGCvZXEM5zoN6-oC7NqhGZDrEQloLIpqMkRhdGUqGN6jjQ5xOHUoOl8Tlc_qrA9t9PPPPOJ_2gOq3ZHMOQSPe32k_ePW5EmmM7dIBrknzE9ATrLLmJajP36Wg2xkiP3mZBPrrW9d7WyXrgwumdvBYqLVueorB-kWndzgIvdd9b_nzaeLAKPKoVmKJxs_Cu13oijFn0ccQ9"
              // s: "discord-clone-aee8f.firebaseapp.com"
              // tenantId: null
              // u: ym {c: 30000, f: 960000, h: ƒ, i: ƒ, g: ƒ, …}
              // uid: "HYy2r5okVuf3IaEWAFjcrTxVlnW2"
              // v: hd {src: Jm, a: {…}, b: 4}
              // xa: false
              // ya: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImI5ODI2ZDA5Mzc3N2NlMDA1ZTQzYTMyN2ZmMjAyNjUyMTQ1ZTk2MDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUklUSUtBIFNJTkdIIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpejVtRHFJb3YtZGkwdHZTSHNxYzdFVHEyS1ZkRFJVS2I3NHlacHN3PXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2Rpc2NvcmQtY2xvbmUtYWVlOGYiLCJhdWQiOiJkaXNjb3JkLWNsb25lLWFlZThmIiwiYXV0aF90aW1lIjoxNjA3MDg3MTQ0LCJ1c2VyX2lkIjoiSFl5MnI1b2tWdWYzSWFFV0FGamNyVHhWbG5XMiIsInN1YiI6IkhZeTJyNW9rVnVmM0lhRVdBRmpjclR4VmxuVzIiLCJpYXQiOjE2MDcwODcxNDQsImV4cCI6MTYwNzA5MDc0NCwiZW1haWwiOiJyaXRpa2EyMDAyc2luZ2hAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDk1MTU5MzcyOTc4NzU5NDUxMDQiXSwiZW1haWwiOlsicml0aWthMjAwMnNpbmdoQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.b3o28-YoPOWAXIudYsRo4CzabfcQ-Hruvr0yW_8VDHJkC-KJrY0nNtg80ShZILBA3gRi-R9Ch0P0Xq1JyGujVsTr3o77wV5Pq6Wl3ymkO-2D_-vYAmIu34swAFFr0nSbmIB2WL_164WQDQZqpNuIrl3-nUtBFaNs9Rc96yPj3JBnhYxMrT-TK0vG2hW1oByDJMQ9KgqFRnxqeJSptgvSC06gJiFwTUxfw3TBNkL7eYdbkMJthjHaCPgIoV1CdsBwUenlFI9ySNEljRook_Ue2agRhjL0zGcX3JYaBHnnzQ-EDn9XS5zV9l263OEJ84bdfd2axV8xjGMKFyrp1-1aYA"
              // za: ƒ (f)
              // _lat: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImI5ODI2ZDA5Mzc3N2NlMDA1ZTQzYTMyN2ZmMjAyNjUyMTQ1ZTk2MDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUklUSUtBIFNJTkdIIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpejVtRHFJb3YtZGkwdHZTSHNxYzdFVHEyS1ZkRFJVS2I3NHlacHN3PXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2Rpc2NvcmQtY2xvbmUtYWVlOGYiLCJhdWQiOiJkaXNjb3JkLWNsb25lLWFlZThmIiwiYXV0aF90aW1lIjoxNjA3MDg3MTQ0LCJ1c2VyX2lkIjoiSFl5MnI1b2tWdWYzSWFFV0FGamNyVHhWbG5XMiIsInN1YiI6IkhZeTJyNW9rVnVmM0lhRVdBRmpjclR4VmxuVzIiLCJpYXQiOjE2MDcwODcxNDQsImV4cCI6MTYwNzA5MDc0NCwiZW1haWwiOiJyaXRpa2EyMDAyc2luZ2hAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDk1MTU5MzcyOTc4NzU5NDUxMDQiXSwiZW1haWwiOlsicml0aWthMjAwMnNpbmdoQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.b3o28-YoPOWAXIudYsRo4CzabfcQ-Hruvr0yW_8VDHJkC-KJrY0nNtg80ShZILBA3gRi-R9Ch0P0Xq1JyGujVsTr3o77wV5Pq6Wl3ymkO-2D_-vYAmIu34swAFFr0nSbmIB2WL_164WQDQZqpNuIrl3-nUtBFaNs9Rc96yPj3JBnhYxMrT-TK0vG2hW1oByDJMQ9KgqFRnxqeJSptgvSC06gJiFwTUxfw3TBNkL7eYdbkMJthjHaCPgIoV1CdsBwUenlFI9ySNEljRook_Ue2agRhjL0zGcX3JYaBHnnzQ-EDn9XS5zV9l263OEJ84bdfd2axV8xjGMKFyrp1-1aYA"
              // __proto__: I
              // ﻿
              // ​

    if(authUser)
    {
      dispatch(
        login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        })
      )
      //on login in 
    }
    else
    {
      //invalid login
      dispatch(
        logout({
        
        }))

    }
  })
}, [dispatch])
  return (

    <div className="App">
      {user?
        (
          <div>
                <Sidebar/>
                <Chat/>
            </div>
        
        )
        :(
          // <p>u have not been logged in </p>
          <Login/>
        )

      }

    </div>
  );
}

export default App;
