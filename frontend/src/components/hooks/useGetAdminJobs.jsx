import { setAdminJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAdminJobs = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAdminJob = async () => {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
          withCredentials: true,
        });
        if (response.data.success) {
          dispatch(setAdminJobs(response.data.jobs));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAdminJob();
  }, [dispatch]);
};

export default useGetAdminJobs;
