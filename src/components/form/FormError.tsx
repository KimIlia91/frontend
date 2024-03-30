import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorPros {
    message?: string;
}

const FormError = ({
    message,
}: FormErrorPros) => {
    if (!message) return null

    return (
        <div className="w-[340px] bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            {message}
        </div>
    )
}

export default FormError