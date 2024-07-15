import { Button, Row } from "antd";
import {
  FieldValues,
  // useForm
} from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //   const { register, handleSubmit } = useForm();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "@bul.789",
  //   },
  // });

  // const defaultValues: {
  //     userId: "A-0001",
  //     password: "@bul.789",
  //   }

  // const [login, { data, error }] = useLoginMutation();
  const [login] = useLoginMutation();
  // console.log({ login, data, error });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in');

    try{
      const userInfo = {
      id: data.userId,
      password: data.password,
    };
    // console.log(userInfo);
    // login(userInfo);
    // const res = await login(userInfo);
    const res = await login(userInfo).unwrap();
    // console.log(res);
    const user = verifyToken(res.data.accessToken) as TUser;
    // console.log(user);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
     toast.success("Logged in", { id: toastId, duration: 2000 });
     navigate(`/${user.role}/dashboard`);
    } catch(err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <PHForm onSubmit={onSubmit}>
        {/* <div> */}
        {/* <label htmlFor="id">ID: </label> */}
        {/* <input type="text" id="id" {...register("userId")} /> */}
        <PHInput type="text" name="userId" label="ID: " />
        {/* </div> */}
        {/* <div> */}
        {/* <label htmlFor="password">Password: </label> */}
        {/* <input type="text" id="password" {...register("password")} /> */}
        {/* <PHInput/> */}
        <PHInput type="text" name="password" label="Password: " />
        {/* </div> */}
        <Button htmlType="submit">Login</Button>
      </PHForm>
      {/* </form> */}
    </Row>
  );
};

export default Login;
