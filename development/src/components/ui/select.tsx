
const optionSelected = (event:any) => {
  let orderSelect = event.target;
  let orderSelectOptionChecked = orderSelect?.querySelector("option:checked");
  if(orderSelectOptionChecked?.getAttribute("value")==="option0"){
    orderSelect?.setAttribute("nondefault", "no");
  }
  else{
    orderSelect?.setAttribute("nondefault", "yes");
  }
}

const selectComponent = (inputTitle: string) => {
  return (
    <div className="label-input">
      <label className="labelinput-label" htmlFor="select-comp"><div className="label-text">{inputTitle}</div></label>
      <select name="select-comp" nondefault="no" onChange={optionSelected} className="my-select flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" id="options">
        <option disabled selected value="option0">Əlavə et</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  )
};

export {selectComponent};


