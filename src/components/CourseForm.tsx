import Axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type Props = {
  id: string;
  saveCourse: (course: Course) => void;
};

type Course = {
  _id: string;
  courseid: number;
  code: string;
  title: string;
  crhr: number;
  semester: number;
};

export default function CourseForm({ id, saveCourse }: Props) {
  const [course, setCourse] = useState<Course>(Object);

  const getCourseById = async (id: string) => {
    const course = (await Axios.get(`/api/course/${id}`)).data;
    setCourse(course);
  };

  useEffect(() => {
    getCourseById(id);
  }, [id]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveCourse(course);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Id:</td>
              <td>{course.courseid || ""}</td>
            </tr>
            <tr>
              <td>Code:</td>
              <td>
                <input
                  type="text"
                  name="code"
                  value={course.code || ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Title:</td>
              <td>
                <textarea
                  name="title"
                  value={course.title || ""}
                  cols={30}
                  rows={2}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Credit:</td>
              <td>
                <input
                  type="text"
                  name="crhr"
                  value={course.crhr || ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Semester:</td>
              <td>
                <input
                  type="text"
                  name="semester"
                  value={course.semester || ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <pre>{JSON.stringify(course, null, 4)}</pre>
    </>
  );
}
