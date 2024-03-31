import { auth } from "@/auth";
import User from "@/components/user/User";
import IUser from "@/types/models/IUser";
import { fetchData } from "@/utils/fetchData";

const UsersPage = async() => {
  const session = await auth();
  let data = undefined;

  if (session?.user.isAdmin) {
    data = await fetchData<IUser>({
      uri: "user", 
      method: "GET", 
      accessToken: session?.user.accessToken,
    });
  }
  return (
    data &&
    <section className='text-center'>
      <table className='min-w-[500px] mx-auto'>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>surname</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <User 
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              surname={user.surname}
              email={user.email}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default UsersPage;