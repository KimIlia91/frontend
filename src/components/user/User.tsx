'use client'

import IUser from "@/types/models/IUser"
import { Button } from "../ui/button"

interface UserProps {
    user: IUser;
    onDelete: (id: string) => void;
    onUpdate: (id: string) => void;
}

const User = ({user, onDelete, onUpdate}: UserProps) => {
    return (
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td>
                <Button onClick={() => onDelete(user.id)} variant="destructive">
                    Delete
                </Button>
            </td>
            <td>
                <Button onClick={() => onUpdate(user.id)} variant="destructive">
                    Update
                </Button>
            </td>
        </tr>
    )
}

export default User