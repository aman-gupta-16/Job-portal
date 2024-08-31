export const USER_API_END_POINT = "https://jobvikas-backend2.onrender.com/user";
export const JOB_API_END_POINT = "https://jobvikas-backend2.onrender.com/job";
export const APPLICATION_API_END_POINT =
  "https://jobvikas-backend2.onrender.com/application";
export const COMPANY_API_END_POINT =
  "https://jobvikas-backend2.onrender.com/company";

export const calculateDaysAgo = (createdAt) => {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const differenceInTime = now - createdDate;
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  return differenceInDays;
};
