import { getUsers } from "@/actions/getUsers";
import { auth } from "@/auth";
import UserTables from "@/components/user/UserTables";

const UsersPage = async () => {
  const session = await auth();
  let data = undefined;

  if (session?.user.isAdmin) {
    data = await getUsers()
  }

  return (
    data && (
      <section className='flex flex-col items-center justify-center mx-auto max-w-4xl h-full'>
        <div className="flex flex-col items-start">
          <UserTables data={data} session={session} />
        </div>
      </section>
    )
  );
};


export default UsersPage;