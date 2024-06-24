import "./SignUpFormStyles.css";

function SignUpForm() {
  return (
    <div className="form-container">
      <h1>Login</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <button>Enter</button>
      </form>
    </div>
  );
}

export default SignUpForm;
