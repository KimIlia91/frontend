"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

const LoginButton = ({
    children,
    mode = "redirect",
    asChild,
}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = (event: React.MouseEvent) => {
        event.preventDefault();
        router.push("/");
        console.log("LOGIN BUTTON CLICK");
    }

  return (
    <span onClick={onClick} className=' cursor-pointer'>
        {children}
    </span>
  )
}

export default LoginButton