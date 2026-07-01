import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthForm from "../components/AuthSections/AuthForm";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const mode = searchParams.get("mode");
    setIsLogin(mode !== "signup");
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-sj-bg">
      <h1 className="sr-only">{isLogin ? "Login" : "Sign Up"}</h1>
      <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
};

export default AuthPage;