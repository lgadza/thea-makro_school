import teacher from "../../assets/imgs/teacher.jpg"
import student from "../../assets/imgs/student.jpg"
import parent from "../../assets/imgs/parent.jpg"
import schoolChairs from "../../assets/imgs/schoolChairs.jpg"

export interface imgProps {
    id: number;
    title: string;
    imageUrl:string;
    description: string;
  }
 
   
  export const betterCardList:imgProps[]=[
    {id: 1,
    title: "Schools",
    imageUrl:schoolChairs,
    description: "Automate operations, boost efficiency and reduce overheads with the most powerful school management platform by your side.",},
    {id: 2,
    title: "Teachers",
    imageUrl:teacher,
    description: "By streamlining administrative tasks, such as attendance tracking, grade management, and scheduling, teachers will have more time to focus on meaningful interactions with students.",},
    {id: 3,
    title: "Students",
    imageUrl:student,
    description: "Never miss your CALA submission deadline with CALA Assistance at your fingertips.",},
    {id: 4,
    title: "Parents",
    imageUrl:parent,
    description: "Monitor & track your children’s progress with complete transparency and stay on top of all the school updates with ease",},
]