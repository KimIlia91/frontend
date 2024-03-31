
interface HeaderCardProps {
    label: string;
}

const HeaderCard = ({
    label
}: HeaderCardProps) => {
  return (
    <h1 className="font-bold text-center text-3xl drop-shadow-md">
        {label}
    </h1>
  )
}

export default HeaderCard