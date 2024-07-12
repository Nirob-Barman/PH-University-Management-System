import { Input } from "antd";
import {
    Controller,
    // useFormContext
} from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  //   const { register } = useFormContext();
  // return <input type="text" id="password" {...register("password")} />
  // return <input type={type} id={name} {...register(name)} />
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
        //   <Input type={type} id={name} {...register(name)} />
      />
    </div>
  );
};

export default PHInput;
