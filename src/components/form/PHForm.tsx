import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  SubmitHandler,
  FormProvider,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PHForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  // const { handleSubmit} = useForm();
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      {/* <form onSubmit={methodshandleSubmit(onSubmit)}>{children}</form>; */}
      {/* <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>; */}
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;