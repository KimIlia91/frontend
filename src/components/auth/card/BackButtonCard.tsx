import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface BackButtonCardProps {
    label: string;
    href: string;
}

const BackButtonCard = ({
    label,
    href
}: BackButtonCardProps) => {
  return (
    <Button
        size="login"
        variant="login"
        className='w-full'
        asChild
    >
        <Link href={href}>
            {label}
        </Link>
    </Button>
  )
}

export default BackButtonCard