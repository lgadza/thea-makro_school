const StudentProfileTable=():JSX.Element=>{
    const emailAddress="louis@gmail.com"
    const tel=793433455
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
            <td>
                <a className="header" href={`tel:${tel}`}>{tel}</a>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
                <a className="header" href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </td>
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