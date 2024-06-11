import { Button } from "../ui/button";
import { closeDialog } from "@/pages/Dashboard/index";
import openToolsBtnClosed from "@/assets/icons/openToolsBtnClosed.svg";
import reload from "@/assets/icons/reload.svg";
import { labelInput } from "@/components/ui/label_input";
import { zebraTable } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { selectComponent } from "@/components/ui/select";
import "./Dialogue.scss";
import { log } from "console";


const selectGen = function (inputTitle: string[]): JSX.Element[]{
  let selectArray = [];
  for(let i=0; i<inputTitle.length; i++){
    selectArray.push(selectComponent(inputTitle[i]));
  }
  return ( selectArray )
}

const Dialogue = function (): JSX.Element{
  return (
    <div className="dialog-cover">
      <div>
        <div className="new-order-dialog">
          <Button className="close-dialog" variant='outline' size='icon' onClick={ closeDialog }>
            <img src={openToolsBtnClosed} alt="" />
          </Button>
          <div className="new-order"   >
            <div className="dialog-section-title">
              <div>Yeni sifariş</div>
              <div className="section-body">
                <div className="input1OrderID">
                  <label htmlFor="orderID">Sifariş Nömrəsi</label>
                  <Input name="orderID" placeholder='Əlavə et' />
                </div>
                <div className="input2OrderID">
                  { selectComponent("Assign to") }
                </div>
              </div>
            </div>
          </div>
          <div className="general-info">
            <div className="dialog-section-title">Ümumi məlumatlar</div>
            <div className="dialog-general-info">
              { labelInput("Tarix", "date") }
              { labelInput("Müşdəri sayı", "number") }
              { selectGen(["Dil seçimi", "Guide kateqoriyasi", "Maşın Növü", "Qarşılaşma yeri"]) }
              { labelInput("Group lead name", "text") }
              { labelInput("Əlaqə nömrəsi", "text") }
              { selectGen(["Guide", "Sürücü"]) }
              <div className="label-input">
                <label className="labelinput-label" htmlFor="dialog-registration-number"><div className="label-text">Qeydiyyat nömrəsi</div></label>
                <Input name="dialog-registration-number" className="general-info-input general-info-registration-number" type="text" placeholder="xx-xx-xxx"></Input>
              </div>
              { selectGen(["Təsdiq nömrəsi"]) }
              <div className="file-input-container">
                <div>fayl əlavə et</div>
                <input className="general-info-input general-info-file" type="file" />
              </div>
              <Button className="general-info-refresh" size="icon" variant='outline'><img src={reload} /></Button>
            </div>
          </div>
          <div className="tour-info"   >
            <div className="dialog-section-title">Tur info</div>
            { zebraTable() }
            <div className="tour-filter">
              <div className="filter-name">
                <div>Muzey</div>
                <div>Restoran</div>
                <div>Extra sifariş</div>
                <div>Qeyd</div>
              </div>
              <div className="switch-box">
                <Switch className='filer-switch' />
                <Switch className='filer-switch' />
                <Switch className='filer-switch' />
                <Switch className='filer-switch' />
              </div>
            </div>
          </div>
          <div className="museums"     >
            <div className="dialog-section-title">Muzeylər</div>
            { zebraTable() }
          </div>
          <div className="restaurants" >
            <div className="dialog-section-title">Restoranlar</div>
            { zebraTable() }
          </div>
          <div className="billing-info">
            <div className="dialog-section-title">Məbləğ Haqqında</div>
            <div className="billing-2ctable">
              <div>Ümumi məbləğ</div>
              <div>2.540 azn</div>
              <div>Kartla ödəniş</div>
              <div>150 azn</div>
              <div>Əlavə xərc</div>
              <div>0 azn</div>
              <div>Extra sifariş</div>
              <div>280 azn</div>
              <hr />
              <div>Ödəniləcək məbləğ</div>
              <div>2.110 azn</div>
            </div>
          </div>
          <div className="agree-inputs">
            <Input className="disagree" type="button" value="Imtina et" onClick={ closeDialog }></Input>
            <Input className="agree"    type="button" value="Təsdiq et" onClick={ closeDialog }></Input>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dialogue }
