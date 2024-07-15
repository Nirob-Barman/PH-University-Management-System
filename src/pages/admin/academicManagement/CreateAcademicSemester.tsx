import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
// import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  {
    value: "01",
    lable: "Autumn",
  },
  {
    value: "02",
    lable: "Summer",
  },
];
// const codeOptions = [
//   {
//     value: "01",
//     lable: "01",
//   },
//   {
//     value: "02",
//     lable: "02",
//   },
// ];

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);

    const semesterData = {
      name: "Something",
      code: "Something",
      //   name,
      //   code: data.name,
      //   year: data.year,
      //   startMonth: data.startMonth,
      //   endMonth: data.endMonth,
    };

    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          {/* <PHInput type="text" name="name" label="name" /> */}
          {/* <PHInput type="text" name="name" label="year" /> */}
          <PHSelect name="name" label="name" options={nameOptions} />
          {/* <PHSelect name="code" label="code" options={codeOptions} /> */}
          {/* <PHSelect name="name" label="name" options={[{ value: "1", label: "1" }]} /> */}
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
