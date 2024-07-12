import {
  FieldValues,
  SubmitHandler,
  FormProvider,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PHForm = ({onSubmit, children}) => {
    
    // const { handleSubmit} = useForm();
    const methods = useForm();


    return <FormProvider {...methods}>
        {/* <form onSubmit={methodshandleSubmit(onSubmit)}>{children}</form>; */}
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>;
    </FormProvider> 
};

export default PHForm;