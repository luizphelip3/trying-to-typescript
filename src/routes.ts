import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: "NodeJs",
    educator: "Luiz Phelipe",
    duration: 10,
  });

  CreateCourseService.execute({
    name: "ReactJs",
    educator: "Luiz Phelipe",
    // duration: 10,
  });
  return res.send();
}
