import { TQueryParam, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      // query: () => ({
      //   url: "/academic-semesters",
      //   method: "GET",
      //   // params: useParams,
      // }),
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        // params.append('name', 'Fall')
        // params.append('name', args)

        // if (args) {
        //   args.forEach((item: TQueryParam) => {
        //     params.append(item.name, item.value as string);
        //   });
        // }

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        // console.log("Inside transform ", response);
        // return response;
        // console.log("Meta",response.meta);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicSemesterApi;
