import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://plus.unsplash.com/premium_photo-1682320426970-11b97418b67b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80 "
        title="SignUp"
        btnClass="hide"
      />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default SignUp;
