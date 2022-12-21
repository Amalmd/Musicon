import "./App.css";
import { converText } from "../utils";
import {Button,Input,InputGroup} from 'reactstrap'
const SerchInput = ({ text, setText, handleClick }) => {
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
            onChange={({  target: { value } }) => {
              setText(() => converText(value));
            }}
            placeholder="Search Musicon" />
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
