import { Users, MapPinHouse, HousePlus } from "lucide-react";

const ICON_SIZE = 20;
const className = `text-inherit`;

export const menuItems = [
    {
        path: "/",
        label: "All Users",
        icon: <Users size={ICON_SIZE} className={className} />
    },
    {
        path: `/u2/places`,
        label: "My Places",
        icon: <MapPinHouse size={ICON_SIZE} className={className} />
    },
    {
        path: "/places/new",
        label: "Add Place",
        icon: <HousePlus size={ICON_SIZE} className={className} />
    },
]