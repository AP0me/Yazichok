import CalendarIcon from "@/assets/icons/calendar.svg";
import ElementsIcon from "@/assets/icons/elements.svg";
import UsersIcon from "@/assets/icons/user-group.svg";
import HomeIcon from "@/assets/icons/home-simple-door.svg";
import ChatIcon from "@/assets/icons/bubble-chat.svg";
import MapIcon from "@/assets/icons/maps-location.svg";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import "./Sidebar.scss";

export const Sidebar = function () {
    return (
        <aside>
            <div className='logo-and-tool-tips'>
                <div className='logo-div'>
                    <img className='logo' src={Logo} />
                </div>
                <div className='tool-tip-container'>
                    {Menus.map((menu) => {
                        return (
                            <TooltipProvider delayDuration={250}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Button variant='outline' size='icon'>
                                            <img src={menu.icon} />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side='right'>
                                        <p>{menu.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

const Menus = [
    {
        icon: CalendarIcon,
        title: "Here it is",
    },
    {
        icon: ElementsIcon,
        title: "Here it is",
    },
    {
        icon: UsersIcon,
        title: "Here it is",
    },
    {
        icon: HomeIcon,
        title: "Here it is",
    },
    {
        icon: ChatIcon,
        title: "Here it is",
    },
    {
        icon: MapIcon,
        title: "Here it is",
    },
];
