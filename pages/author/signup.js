import SignupForm from "../components.js/signupFrom"

const signupPage = () => {
    return(
        <div className="signupFromCard">
            <SignupForm usertype="author" />
        </div>
    )
}

export default signupPage