import NotificationsIcon from "@/assets/icons/notification.svg";
import SaveIcon from "@/assets/icons/save.svg";
import openToolsBtnOpened from "@/assets/icons/openToolsBtnOpened.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { statusTable } from "@/components/ui/menu_column";
import { searchTool, openSearchTool } from "@/components/ui/searchTool";
import "./Dashboard.scss";
import { Sidebar } from "@/components/Sidebar";
import Logo from "@/assets/logo.png";
import HeadSet from "@/assets/icons/headset.svg";
import Earth from "@/assets/icons/earth.svg";
import Airplane from "@/assets/icons/airplane.svg";
import { Dialogue } from "@/components/Dialogue/index";

let travelIcons: string[] = [ Airplane , HeadSet, Earth ];
export type travelType = {
    travelID: string;
    icons: number[];
    travelStartTime: string;
    travelEndTime:   string;
};
export type MyType = {
    name: string;
    class: string;
    travel: travelType[];
}

let statusTableProperties: MyType[] = [
    {
        name: "Sifarişlər",
        class: "table-column ordered",
        travel: [
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
        ]
    },
    {
        name: "Təsdiqlənib",
        class: "table-column confirmed",
        travel: [
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
        ]
    },
    {
        name: "İcrada",
        class: "table-column in-execution",
        travel: [
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
        ]
    },
    {
        name: "Bitib",
        class: "table-column finished",
        travel: [
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
        ]
    },
    {
        name: "Yoxlama",
        class: "table-column in-testing",
        travel: [
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
        ]
    },
    {
        name: "Ödəniş",
        class: "table-column in-payment",
        travel: [
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
            { travelID: "AG781Y2348", icons: [0, 0, 0, 0], travelStartTime: "21.11.2023", travelEndTime: "24.11.2023", },
        ]
    },
];

export default function Dashboard() {
    return (
        <div className='dashboard-wrapper'>
            <Sidebar />
            <main>
                <Header />
                <div className='tools-and-status-table'>
                    <Button className='tool-button' variant='outline' size='icon' onClick={ openSearchTool }>
                        <img src={openToolsBtnOpened} />
                    </Button>
                    {searchTool(statusTableProperties, travelIcons)}
                    {statusTable(statusTableProperties, travelIcons)}
                </div>
            </main>
            { Dialogue() }
        </div>
    );
}

export const newOrder = function () {
    const dialogCover = document.querySelector(".dialog-cover");
    dialogCover?.setAttribute("open", "");
};
const closeDialog = function () {
    console.log("lol");
    const dialogCover = document.querySelector(".dialog-cover");
    dialogCover?.removeAttribute("open");
};
export const Header = function () {
    return (
        <header className='Header'>
            <Input placeholder='Axtarış' />
            <div className='user-details'>
                <Button variant='outline' size='icon'>
                    <img src={SaveIcon} />
                </Button>
                <Button variant='outline' size='icon'>
                    <img src={NotificationsIcon} />
                </Button>
                <Button className='rounded-xl' variant='secondary' onClick={newOrder}>
                    Yeni sifariş
                </Button>
                <div className='user-name-display'>
                    <div className='headerProfileImg'>
                        <img src={Logo} alt='' />
                    </div>
                    <div className='user-name'>
                        <div>Turan</div>
                        <div>Admin</div>
                    </div>
                    <div className='profile-dropdown-container'>
                        <select className='profile-dropdown' id=''></select>
                    </div>
                </div>
            </div>
        </header>
    );
};

export { closeDialog }