import React, { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useGetAdminJobs from "../../hooks/useGetAdminJobs";
import { setSearchAdminJobByText } from "@/redux/jobSlice";
import AdminJobTable from "./AdminJobTable";

const AdminJobs = () => {
  useGetAdminJobs();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setSearchAdminJobByText(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name and role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")}>
            New Job
          </Button>
        </div>
        <AdminJobTable />
      </div>
    </div>
  );
};

export default AdminJobs;
