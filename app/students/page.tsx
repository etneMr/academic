"use client";

import React from "react";
import "./students.scss";
import StatusBar from "@/components/StatusBar/StatusBar";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import { PageNavigation } from "@/components/common/PageNavigation/PageNavigation";
import Link from "next/link";
import { doGetAllStudents } from "@/redux/asyncActions/students";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { IStudent } from "@/types/student/student.type";

const Students = () => {
  const [error, setError] = React.useState(null);

  const { param, listStudents, isLoading } = useAppSelector(
    (state) => state.students
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(doGetAllStudents({ params: param }));
  }, [param, dispatch]);

  function onPageClick(page: number) {
    if (page < 0) return;
    if (page > param.total / param.limit) return;
    let newParam = Object.assign({}, param);
    newParam.skip = param.limit * page;
    dispatch(doGetAllStudents({ params: newParam }));
  }

  if (error) return `Error: ${error.message}`;
  if (!listStudents) return "No post!";

  return (
    <div id="students">
      <div className="students-header">
        <div className="header-text">Students</div>
        <StatusBar />
      </div>
      <div className="filter-bar">
        <div style={{ flexGrow: "1" }}>
          <SearchBar />
        </div>
        <button className="filter-btn">
          <div className="btn-text">Newest</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              d="M26.6759 11.488L17.2359 21.952C16.8519 22.4 16.1479 22.4 15.7639 21.952L6.3239 11.488C5.7159 10.816 6.1639 9.72798 7.0599 9.72798L25.9399 9.72798C26.8359 9.72798 27.2839 10.816 26.6759 11.488Z"
              fill="#4D44B5"
            />
          </svg>
        </button>
        <Link className="add-btn" href={`/students/add`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M6.34703 10.6647H0.382324V6.42941H6.34703V0.5H10.5823V6.42941H16.6176V10.6647H10.5823V16.6647H6.34703V10.6647Z"
              fill="white"
            />
          </svg>
          <div className="btn-text">New Student</div>
        </Link>
      </div>
      <StudentsTable
        listStudents={listStudents}
        limit={param.limit}
        skip={param.skip}
        total={param.total}
        onPageClick={onPageClick}
      />
    </div>
  );
};

function StudentsTable({ listStudents, limit, skip, total, onPageClick }) {
  const rows = [];
  listStudents.map((student: IStudent) =>
    rows.push(
      <tr className="student-rows" key={student.id}>
        <td>
          <input type="checkbox" id="all" name="student" value="all" />
        </td>
        <td className="student-info">
          <div className="student-avatar"></div>
          <div className="student-name">{student.title}</div>
        </td>
        <td className="student-id">{student.id}</td>
        <td className="student-date">06/03/2023</td>
        <td className="student-parent">{student.category}</td>
        <td className="student-city">{student.brand}</td>
        <td className="student-contact">
          <div className="contact-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.4401 13C19.2201 13 18.9901 12.93 18.7701 12.88C18.3246 12.7818 17.8868 12.6515 17.4601 12.49C16.9962 12.3212 16.4862 12.33 16.0284 12.5146C15.5706 12.6992 15.1972 13.0466 14.9801 13.49L14.7601 13.94C13.7861 13.3982 12.8911 12.7252 12.1001 11.94C11.3149 11.149 10.6419 10.254 10.1001 9.28L10.5201 9.00001C10.9635 8.78292 11.3109 8.40954 11.4955 7.9517C11.6801 7.49386 11.6889 6.98392 11.5201 6.52001C11.3613 6.09243 11.231 5.6548 11.1301 5.21001C11.0801 4.99001 11.0401 4.76001 11.0101 4.53001C10.8887 3.82563 10.5197 3.18775 9.96972 2.73124C9.41972 2.27474 8.7248 2.02961 8.0101 2.04001H5.0101C4.57913 2.03596 4.15235 2.12482 3.75881 2.30054C3.36527 2.47625 3.01421 2.7347 2.72953 3.05829C2.44485 3.38187 2.23324 3.763 2.10909 4.17572C1.98494 4.58844 1.95118 5.02306 2.0101 5.45001C2.54284 9.63939 4.45613 13.5319 7.44775 16.5126C10.4394 19.4934 14.3388 21.3925 18.5301 21.91H18.9101C19.6475 21.9111 20.3595 21.6405 20.9101 21.15C21.2265 20.867 21.4792 20.5202 21.6516 20.1323C21.8239 19.7445 21.9121 19.3244 21.9101 18.9V15.9C21.8979 15.2054 21.6449 14.5366 21.1944 14.0077C20.744 13.4788 20.1239 13.1226 19.4401 13ZM19.9401 19C19.9399 19.142 19.9095 19.2823 19.8509 19.4116C19.7923 19.5409 19.7068 19.6563 19.6001 19.75C19.4884 19.8465 19.3577 19.9185 19.2165 19.9616C19.0753 20.0047 18.9267 20.0177 18.7801 20C15.035 19.5198 11.5563 17.8065 8.89282 15.1303C6.2293 12.4541 4.53251 8.96734 4.0701 5.22001C4.05419 5.07352 4.06813 4.92534 4.1111 4.7844C4.15407 4.64346 4.22517 4.51269 4.3201 4.40001C4.41381 4.29334 4.52916 4.20785 4.65848 4.14922C4.7878 4.0906 4.92812 4.06019 5.0701 4.06001H8.0701C8.30265 4.05483 8.52972 4.13088 8.71224 4.27508C8.89476 4.41927 9.02131 4.62258 9.0701 4.85001C9.1101 5.12334 9.1601 5.39334 9.2201 5.66001C9.33562 6.18715 9.48936 6.70518 9.6801 7.21001L8.2801 7.86001C8.1604 7.91493 8.05272 7.99295 7.96326 8.0896C7.87379 8.18625 7.8043 8.29962 7.75877 8.4232C7.71324 8.54678 7.69257 8.67814 7.69795 8.80973C7.70332 8.94132 7.73464 9.07055 7.7901 9.19C9.2293 12.2728 11.7073 14.7508 14.7901 16.19C15.0336 16.29 15.3066 16.29 15.5501 16.19C15.6748 16.1454 15.7894 16.0765 15.8873 15.9872C15.9851 15.8979 16.0643 15.7901 16.1201 15.67L16.7401 14.27C17.2571 14.4549 17.7847 14.6085 18.3201 14.73C18.5868 14.79 18.8568 14.84 19.1301 14.88C19.3575 14.9288 19.5608 15.0553 19.705 15.2379C19.8492 15.4204 19.9253 15.6475 19.9201 15.88L19.9401 19Z"
                fill="#4D44B5"
              />
            </svg>
          </div>
          <div className="contact-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 4H4C3.20435 4 2.44129 4.31607 1.87868 4.87868C1.31607 5.44129 1 6.20435 1 7V17C1 17.7956 1.31607 18.5587 1.87868 19.1213C2.44129 19.6839 3.20435 20 4 20H20C20.7956 20 21.5587 19.6839 22.1213 19.1213C22.6839 18.5587 23 17.7956 23 17V7C23 6.20435 22.6839 5.44129 22.1213 4.87868C21.5587 4.31607 20.7956 4 20 4ZM21 16.75L16.1 12.35L21 8.92V16.75ZM3 8.92L7.9 12.35L3 16.75V8.92ZM9.58 13.53L11.43 14.82C11.5974 14.9361 11.7963 14.9984 12 14.9984C12.2037 14.9984 12.4026 14.9361 12.57 14.82L14.42 13.53L19.42 18H4.6L9.58 13.53ZM4 6H20C20.1857 6.00149 20.3674 6.05467 20.5245 6.15358C20.6817 6.25249 20.8083 6.39322 20.89 6.56L12 12.78L3.11 6.56C3.19171 6.39322 3.31826 6.25249 3.47545 6.15358C3.63265 6.05467 3.81428 6.00149 4 6Z"
                fill="#4D44B5"
              />
            </svg>
          </div>
        </td>
        <td>
          <div className="student-grade">{student.price}</div>
        </td>
        <td style={{ textAlign: "right" }}>
          <Link href={`/students/${student.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0012 9.36C11.6543 9.36 11.3109 9.42832 10.9904 9.56105C10.67 9.69378 10.3788 9.88833 10.1335 10.1336C9.88829 10.3788 9.69374 10.67 9.56101 10.9905C9.42828 11.3109 9.35996 11.6544 9.35996 12.0012C9.35996 12.348 9.42828 12.6915 9.56101 13.0119C9.69374 13.3324 9.88829 13.6236 10.1335 13.8688C10.3788 14.1141 10.67 14.3086 10.9904 14.4414C11.3109 14.5741 11.6543 14.6424 12.0012 14.6424C12.7017 14.6422 13.3734 14.3638 13.8686 13.8684C14.3638 13.373 14.6419 12.7011 14.6418 12.0006C14.6416 11.3001 14.3632 10.6284 13.8677 10.1332C13.3723 9.63796 12.7004 9.35984 12 9.36H12.0012ZM3.60116 9.36C3.25431 9.36 2.91086 9.42832 2.59042 9.56105C2.26997 9.69378 1.97881 9.88833 1.73355 10.1336C1.48829 10.3788 1.29374 10.67 1.16101 10.9905C1.02828 11.3109 0.959961 11.6544 0.959961 12.0012C0.959961 12.348 1.02828 12.6915 1.16101 13.0119C1.29374 13.3324 1.48829 13.6236 1.73355 13.8688C1.97881 14.1141 2.26997 14.3086 2.59042 14.4414C2.91086 14.5741 3.25431 14.6424 3.60116 14.6424C4.30165 14.6422 4.97339 14.3638 5.4686 13.8684C5.9638 13.373 6.24192 12.7011 6.24176 12.0006C6.2416 11.3001 5.96318 10.6284 5.46775 10.1332C4.97231 9.63796 4.30045 9.35984 3.59996 9.36H3.60116ZM20.4012 9.36C20.0543 9.36 19.7109 9.42832 19.3904 9.56105C19.07 9.69378 18.7788 9.88833 18.5336 10.1336C18.2883 10.3788 18.0937 10.67 17.961 10.9905C17.8283 11.3109 17.76 11.6544 17.76 12.0012C17.76 12.348 17.8283 12.6915 17.961 13.0119C18.0937 13.3324 18.2883 13.6236 18.5336 13.8688C18.7788 14.1141 19.07 14.3086 19.3904 14.4414C19.7109 14.5741 20.0543 14.6424 20.4012 14.6424C21.1017 14.6422 21.7734 14.3638 22.2686 13.8684C22.7638 13.373 23.0419 12.7011 23.0418 12.0006C23.0416 11.3001 22.7632 10.6284 22.2677 10.1332C21.7723 9.63796 21.1005 9.35984 20.4 9.36H20.4012Z"
                fill="#A098AE"
              />
            </svg>
          </Link>
        </td>
      </tr>
    )
  );

  return (
    <div className="students-table">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" id="all" name="student" value="all" />
            </th>
            <th>Name</th>
            <th>ID</th>
            <th>Date</th>
            <th>Parent Name</th>
            <th>City</th>
            <th>Contact</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <PageNavigation
        length={Math.ceil(total / limit)}
        selected={skip / limit}
        limit={limit}
        skip={skip}
        total={total}
        onPageClick={onPageClick}
      />
    </div>
  );
}

export default Students;
