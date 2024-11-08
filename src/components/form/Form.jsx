import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";

const Form = ({ title, getDataForm, firebaseError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  // 폼 제출 함수
  const onSubmit = ({ email, password }) => {
    if (getDataForm) {
      getDataForm(email, password);
      reset();
    }
  };

  const userEmail = {
    required: "필수 필드입니다.",
    pattern: {
      value:
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      message: "입력하신 이메일 주소가 올바르지 않습니다.",
    },
  };

  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 4,
      message: "최소 4자입니다.",
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        {errors?.email && (
          <div>
            <span className={styles.error}>{errors.email.message}</span>
          </div>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        {errors?.password && (
          <div>
            <span className={styles.error}>{errors.password.message}</span>
          </div>
        )}
      </div>

      {firebaseError && (
        <div>
          <span className={styles.error}>{firebaseError}</span>
        </div>
      )}

      <button type="submit">{title}</button>
    </form>
  );
};

export default Form;
