const StudentProfileTable=():JSX.Element=>{
    return(
        <table className="student-table w-100">
        <tbody>
          <tr>
            <td>Full-name</td>
            <td>Louis Gadza</td>
          </tr>
          <tr>
            <td>Date of birth</td>
            <td>11-09-1998 (24years)</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>male</td>
          </tr>
          <tr>
            <td>Mobile No</td>
            <td>078672292</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>louis@gmail.com</td>
          </tr>
          <tr>
            <td>Citizenship</td>
            <td>Zimbabwean</td>
          </tr>
        </tbody>
      </table>
    )
}
export default StudentProfileTable