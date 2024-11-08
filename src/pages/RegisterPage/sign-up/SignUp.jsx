import { useState } from "react";
import Form from "../../../components/form/Form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const auth = getAuth(app);

  // 이메일과 비밀번호로 회원가입 처리
  const handleSignupAndLogin = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <Form
      title="가입하기"
      getDataForm={handleSignupAndLogin}
      firebaseError={firebaseError}
    />
  );
};

export default SignUp;
