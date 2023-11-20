export const responseHandler = (
  isSuccess: boolean,
  message: string,
  data: any,
) => {
  return {
    isSuccess,
    message,
    result: data,
  };
};
