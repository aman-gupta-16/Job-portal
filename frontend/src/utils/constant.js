export const USER_API_END_POINT = "http://localhost:8000/api/v1/user";
export const JOB_API_END_POINT = "http://localhost:8000/api/v1/job";
export const APPLICATION_API_END_POINT =
  "http://localhost:8000/api/v1/application";
export const COMPANY_API_END_POINT = "http://localhost:8000/api/v1/company";

export const calculateDaysAgo = (createdAt) => {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const differenceInTime = now - createdDate;
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  return differenceInDays;
};
