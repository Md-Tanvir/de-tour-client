import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleSignIn, setisLoading, setUser } = useAuth();

  // For going back to where it came
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/home";

  // GOogle sign in
  const handleGoogleLogin = () => {
    setisLoading(true);
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(url);
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      .finally(() => setisLoading(false));
  };
  return (
    <div className="container text-center py-5 my-5">
      <h2 className="mb-3">Sign Up To Explore More</h2>
      <button
        className="btn btn-danger my-5 float-right"
        onClick={handleGoogleLogin}
      >
        <i className="fab fa-google"></i> Google Sign In
      </button>
    </div>
  );
};

export default Login;
