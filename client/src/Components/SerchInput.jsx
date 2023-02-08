import "./App.css";
import { converText } from "../utils";
import { Button, Input, InputGroup } from 'reactstrap'
import { useState } from "react";
import { aletters, hletters } from "../utils";
const SerchInput = ({ text, setText, handleClick }) => {
  const [language, setLanguage] = useState(null)
  return (
    <div className="search mb-3">
      <InputGroup >
        <Input className="p-3" type="text"
          maxLength={"2048"}
          name="q"
          autoCapitalize="off"
          autoComplete="off"
          title="Search"
          role="combobox"
          defaultValue={text}
          onChange={({ target: { value } }) => {
            setText(() => { (language === "He-Ar") ? converText(value, aletters) :  converText(value,hletters)});
          }}
          placeholder="Search Musicon" />
        <select name="" id="Ar-He" onChange={(e) => { setLanguage(e.target.selectedOptions[0].id) }}><option value="Ar-He" >Ar-He</option><option value="He-Ar" id="He-Ar" >He-Ar</option></select>
        <Button
          color="dark"
          outline
          size="lg"
          onClick={() => handleClick()}
        >
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SerchInput;
