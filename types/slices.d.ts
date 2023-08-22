import { IStudent, Student } from "./student/student.type";
import { ITeacher } from "./teacher/teacher.type";

interface ISlice {
    isLoading: boolean;
    error: any;
}

interface ISliceStudents extends ISlice{
    listStudents: array<IStudent>;
    param: IParamsQuery
}

interface ISliceStudent extends ISlice{
    onStudent?: IStudent;
    studentId?: string;
}

interface ISliceTeachers extends ISlice{
    listTeachers: array<ITeacher>;
    param: IParamsQuery
}

interface ISliceTeacher extends ISlice{
    onTeacher?: ITeacher;
    teacherId?: string;
}