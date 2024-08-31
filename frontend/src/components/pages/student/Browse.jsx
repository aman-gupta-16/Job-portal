import React, { useEffect } from "react";
import Navbar from "../../shared/Navbar";
import Job from "../../components/Job";
import { useDispatch, useSelector } from "react-redux";
import useGetAllJobs from "@/components/hooks/useGetAllJobs";
import { setSearchQuery } from "@/redux/jobSlice";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {allJobs.map((job) => {
            return <Job job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
