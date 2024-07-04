import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  // const dispatch = useAppDispatch();
  //   const { register, handleSubmit } = useForm();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "@bul.789",
    },
  });

  const [login, { error }] = useLoginMutation();
  console.log({ login, error });

  const onSubmit = async (data) => {
    // console.log(data);
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    console.log(userInfo);
    login(userInfo);
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken);

    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
