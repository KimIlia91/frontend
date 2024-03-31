import IUser from "@/types/models/IUser"

const User = ({id, firstName, lastName, surname, email}: IUser) => {
    return (
        <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{surname}</td>
        <td>{email}</td>
        </tr>
    )
}

export default User