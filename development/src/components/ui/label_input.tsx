import { Input } from "@/components/ui/input";

const labelInput = (labelText: string, inputType: string)=>{
  return (
    <div className="label-input">
      <label className="labelinput-label" htmlFor="dialog-input-date"><div className="label-text">{labelText}</div></label>
      <Input name="dialog-input-date" className="general-info-input general-info-date" type={inputType} placeholder="Əlavə et" value=""></Input>
    </div>
  )
};

export {labelInput};

