import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
// import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { semesterOptions } from "../../../constants/semester";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";

// const nameOptions = [
//   {
//     value: "01",
//     label: "Autumn",
//   },
//   {
//     value: "02",
//     label: "Summer",
//   },
// ];

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
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    // console.log(data);
    // console.log(data.name);
    
    // const name = nameOptions[Number(data.name) - 1].label;
    const name = semesterOptions[Number(data.name) - 1]?.label;

    const semesterData = {
      // name: "Something",
      // name: name,
      // name,
      // code: "Something",
      // code: data.name,
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    // console.log(semesterData);
    try {
      // const res = await addAcademicSemester(semesterData);
      const res = (await addAcademicSemester(semesterData)) as TResponse;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }

  };

   const academicSemesterSchema = z.object({
    name: z.string({ required_error: "Please select a Name" }),
    year: z.string({ required_error: "Please select a Year" }),
    startMonth: z.string({ required_error: "Please select a Start Month" }),
    endMonth: z.string({ required_error: "Please select a End Month" }),
  });

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          {/* <PHInput type="text" name="name" label="name" /> */}
          {/* <PHInput type="text" name="name" label="year" /> */}
          {/* <PHSelect label="Name" name="name" options={nameOptions} /> */}
          <PHSelect label="Name" name="name" options={semesterOptions} />
          {/* <PHSelect name="code" label="code" options={codeOptions} /> */}
          {/* <PHSelect name="name" label="name" options={[{ value: "1", label: "1" }]} /> */}
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
