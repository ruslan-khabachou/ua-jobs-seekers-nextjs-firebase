/* globals window */
import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { getAuth, GithubAuthProvider, FacebookAuthProvider, linkWithPopup} from "firebase/auth";

const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: GithubAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    {
      provider: FacebookAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    }
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
    signInSuccessWithAuthResult: () =>
      // Don't automatically redirect. We handle redirects using
      // `next-firebase-auth`.
      false,
  },
}

const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])
  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={getAuth()}
        />
      ) : null}
    </div>
  )
}
export default FirebaseAuth
