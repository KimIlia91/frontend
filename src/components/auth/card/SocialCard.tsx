"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface SocialCardProps {
  isPending?: boolean;
}

const SocialCard = ({isPending = false}: SocialCardProps) => {
  return (
    <div className="flex w-full gap-2">
        <Button
            disabled={isPending}
            size="login"
            variant="login"
            onClick={() => console.log("Google")}
        >
            <FcGoogle className="w-5 h-5"/>
        </Button>
        <Button
            disabled={isPending}
            size="login"
            variant="login"
            onClick={() => console.log("GitHub")}
        >
            <FaGithub className="w-5 h-5" />
        </Button>
    </div>
  )
}

export default SocialCard