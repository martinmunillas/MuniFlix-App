import { Request, Response } from "express";

const response = {
  succes: (_req: Request, res: Response, data: any, status: number) => {
    res.status(status || 200).send(data || "Done Succesfully");
  },
  error: (
    _req: Request,
    res: Response,
    error: Error,
    message: string,
    status: number
  ) => {
    res
      .status(status || 500)
      .send(message || "There was an error, please try again in a few minutes");
    console.log(error.message);
  },
};

export default response;
