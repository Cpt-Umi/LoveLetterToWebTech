import { useEffect, useState } from "react";
import Axios from "axios";

type Course = {
  _id: string;
  courseid: number;
  code: string;
  title: string;
  crhr: number;
  semester: number;
};

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    Axios.get("./api/list").then((courses) => setCourses(courses.data));
  }, []);

  const handler = (id: string): void => {
    console.log(id);
  };

  return (
    <div>
      {courses && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Title</th>
              <th>CR</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, key) => {
              return (
                <tr key={key}>
                  <td>{course.courseid}</td>
                  <td>{course.code}</td>
                  <td>
                    <a href="#" onClick={() => handler(course._id)}>
                      {course.title}
                    </a>
                  </td>
                  <td>{course.crhr}</td>
                  <td>{course.semester}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CourseList;
