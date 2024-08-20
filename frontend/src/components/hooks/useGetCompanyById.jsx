import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(`${COMPANY_API_END_POINT}/get/${id}`, {
          withCredentials: true,
        });
        if (response.data.success) {
          dispatch(setSingleCompany(response.data.company));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompany();
  }, [id, dispatch]);
};

export default useGetCompanyById;
