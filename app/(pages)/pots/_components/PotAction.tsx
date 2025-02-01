/* COMPONENTS */
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/app/_components/ui/DropdownMenu";

/* ICONS */
import EllipsisIcon from "@/public/images/icon-ellipsis.svg";

const PotAction = () => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
                <EllipsisIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="text-grey-900">
                    Edit Pot
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red">
                    Delete Pot
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default PotAction;
