import SignupForm from "../components.js/signupFrom"

const signupPage = () => {
    return(
      <div className="signupFromCard">
        <SignupForm usertype="admin" />
      </div>
    )
}

export default signupPage