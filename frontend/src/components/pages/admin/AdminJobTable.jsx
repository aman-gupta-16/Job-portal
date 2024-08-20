import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobTable = () => {
  const { adminJobs, searchAdminJobByText } = useSelector((state) => state.job);

  const [filterJob, setFilterJob] = useState(adminJobs);
  useEffect(() => {
    const filteredJob =
      adminJobs.length >= 0 &&
      adminJobs.filter((job) => {
        if (!searchAdminJobByText) {
          return true;
        }
        return (
          job?.title
            ?.toLowerCase()
            .includes(searchAdminJobByText.toLowerCase()) ||
          job?.company?.name
            ?.toLowerCase()
            .includes(searchAdminJobByText.toLowerCase())
        );
      });
    setFilterJob(filteredJob);
  }, [adminJobs, searchAdminJobByText]);

  const navigate = useNavigate();
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent Posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJob.length <= 0 ? (
            <span>No job found.</span>
          ) : (
            filterJob.map((job) => (
              <tr key={job._id}>
                <TableCell>{job?.company?.name}</TableCell>
                <TableCell>{job?.title}</TableCell>
                <TableCell>{job.createdAt}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div
                        onClick={() =>
                          navigate(`/admin/jobs/${job._id}/applicants`)
                        }
                        className="flex items-center w-fit gap-2 cursor-pointer mt-2"
                      >
                        <Eye className="w-4" />
                        <span>Applicants</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobTable;
