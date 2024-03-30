import { logout } from '@/actions/logout';
import { Button } from '@/components/ui/button'

const LogoutButton = () => {
    return (
        <form action={logout}>
            <Button type='submit'>
                Выйти
            </Button> 
        </form>  
    )
}

export default LogoutButton