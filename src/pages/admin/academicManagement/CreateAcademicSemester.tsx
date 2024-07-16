import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
// import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
];
// const codeOptions = [
//   {
//     value: "01",
//     label: "01",
//   },
//   {
//     value: "02",
//     label: "02",
//   },
// ];

const currentYear = new Date().getFullYear();
// console.log(currentYear);

const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
// console.log(yearOptions);

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    console.log(data.name);

    const name = nameOptions[Number(data.name) -1].label;

    const semesterData = {
      // name: "Something",
      // name: name,
      // name,
      // code: "Something",
      // code: data.name,
        name,
        code: data.name,
        year: data.year,
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
          <PHSelect name="Year" label="year" options={yearOptions} />
          <PHSelect
            name="Start month"
            label="startMonth"
            options={nameOptions}
          />
          <PHSelect name="End month" label="endMonth" options={nameOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
