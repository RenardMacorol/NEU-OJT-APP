import { auth } from "../services/firebase"
const StudentInfo: React.FC = () => {
  const user = auth.currentUser;
  return (
    <div>
      <h1>Student Info</h1>
      {user ?
        (
          <div>
            <p>{user.displayName}</p>
            <p>{user.email}</p>
          </div>
        ) : (
          <p>User not Auth</p>
        )

      }
    </div>
  )
}

export default StudentInfo; 
