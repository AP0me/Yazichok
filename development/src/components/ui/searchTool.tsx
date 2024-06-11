import { MyType, travelType } from "@/pages/Dashboard/index";
import openToolsBtnOpened from "@/assets/icons/openToolsBtnOpened.svg";
import openToolsBtnClosed from "@/assets/icons/openToolsBtnClosed.svg";

function openSearchTool(){
  const toolButtonImg = document.querySelector(".tools-and-status-table>.tool-button>img");
  const searchToolOrNull = document.querySelector(".search-tool");
  console.log("pressed");
  if(searchToolOrNull){
    const searchTool =searchToolOrNull;
    if((searchTool.getAttribute("open")==="")){
      searchTool.removeAttribute("open");
      toolButtonImg?.setAttribute("src", openToolsBtnOpened);
    }
    else{
      searchTool.setAttribute("open", "");
      toolButtonImg?.setAttribute("src", openToolsBtnClosed);
    }
  }
  else{ console.log("searchToolOrNull is null"); }
}

function searchTool(statusTableProperties: MyType[], travelIcons: string[]) {
  return (
    //@ts-ignore //TODO
    <div className="search-tool">Hi</div>
  );
}

export { searchTool, openSearchTool };
