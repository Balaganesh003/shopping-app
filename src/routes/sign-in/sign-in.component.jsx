
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'


const SignIn = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={signInWithGooglePopup}>Sign In With Google</button>
        </div>
    )
}

export default SignIn;