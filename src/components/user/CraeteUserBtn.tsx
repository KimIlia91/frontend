'use client'

import { Button } from '../ui/button'

interface CreateUserBtnProps {
    onOpenModal: () => void;
}

const CraeteUserBtn = ({onOpenModal}: CreateUserBtnProps) => {
    return (
        <Button onClick={onOpenModal}>
            Создать пользователя
        </Button>
    )
}

export default CraeteUserBtn