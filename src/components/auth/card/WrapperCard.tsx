'use client';

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardFooter 
} from '@/components/ui/card';
import HeaderCard from '@/components/auth/card/HeaderCard';
import SocialCard from '@/components/auth/card/SocialCard';

interface CardWrapperProps {
    isOpenModal?: boolean;
    children: React.ReactNode;
    headerLabel: string;
    showSocial?: boolean;
    isPending?: boolean;
}

const CardWrapper = ({
    isOpenModal = true,
    children,
    headerLabel,
    showSocial,
    isPending,
}: CardWrapperProps) => {
  return (
    <Card className={`flex flex-col items-center ${isOpenModal ? 'block' : 'hidden'}`}>
        <CardHeader>
            <HeaderCard label={headerLabel} />
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {
            showSocial && (
                <CardFooter className='w-full'>
                    <SocialCard isPending={isPending} />
                </CardFooter>
            )
        }
    </Card>
  )
}

export default CardWrapper