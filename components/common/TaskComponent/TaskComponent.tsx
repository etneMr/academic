import "./TaskComponent.scss";
import React from "react";

interface TaskProps {
  task: ITask;
}

function TaskComponent({ task }: TaskProps) {
  return (
    <div className="task-component">
      <div
        className="prefix-background"
        style={{ backgroundColor: `${task.color}` }}
      />
      <div className="task-details">
        <div className="subject">{task.subject}</div>
        <div className="class">{task.class}</div>
        <div style={{ height: "1px" }}></div>
        <div className="date-time">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 5.25H16.5V4.5C16.5 4.30109 16.421 4.11032 16.2803 3.96967C16.1397 3.82902 15.9489 3.75 15.75 3.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5V5.25H12.75V4.5C12.75 4.30109 12.671 4.11032 12.5303 3.96967C12.3897 3.82902 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.82902 11.4697 3.96967C11.329 4.11032 11.25 4.30109 11.25 4.5V5.25H9V4.5C9 4.30109 8.92098 4.11032 8.78033 3.96967C8.63968 3.82902 8.44891 3.75 8.25 3.75C8.05109 3.75 7.86032 3.82902 7.71967 3.96967C7.57902 4.11032 7.5 4.30109 7.5 4.5V5.25H6C5.40326 5.25 4.83097 5.48705 4.40901 5.90901C3.98705 6.33097 3.75 6.90326 3.75 7.5V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V7.5C20.25 6.90326 20.0129 6.33097 19.591 5.90901C19.169 5.48705 18.5967 5.25 18 5.25ZM5.25 7.5C5.25 7.30109 5.32902 7.11032 5.46967 6.96967C5.61032 6.82902 5.80109 6.75 6 6.75H7.5V7.5C7.5 7.69891 7.57902 7.88968 7.71967 8.03033C7.86032 8.17098 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.17098 8.78033 8.03033C8.92098 7.88968 9 7.69891 9 7.5V6.75H11.25V7.5C11.25 7.69891 11.329 7.88968 11.4697 8.03033C11.6103 8.17098 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.17098 12.5303 8.03033C12.671 7.88968 12.75 7.69891 12.75 7.5V6.75H15V7.5C15 7.69891 15.079 7.88968 15.2197 8.03033C15.3603 8.17098 15.5511 8.25 15.75 8.25C15.9489 8.25 16.1397 8.17098 16.2803 8.03033C16.421 7.88968 16.5 7.69891 16.5 7.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V9.75H5.25V7.5ZM18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18V11.25H18.75V18Z"
              fill="#FB7D5B"
            />
          </svg>
          {task.date}
        </div>
        <div className="date-time">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
              fill="#FCC43E"
            />
            <path
              d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11Z"
              fill="#FCC43E"
            />
          </svg>
          {task.time}
        </div>
      </div>
    </div>
  );
}

export default TaskComponent;
