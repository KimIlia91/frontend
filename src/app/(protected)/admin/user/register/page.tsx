import { auth } from "@/auth";
import RegisterForm from "@/components/admin/user/RegisterForm";

export default async function RegisterUser() {
  const session = await auth();
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center">
      <div>
        {/* { JSON.stringify(session) } */}
      </div>
      <RegisterForm />
    </section>
  )
}
