import React, { useState } from "react";

import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
} from "reactstrap";
const SearchBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropDownMenuTitle = ["Location", "Position", "Skill", "All"];

  const [selectedDropdown, setSelectedDropdown] = useState("All");
  const [defaultDropdownText, setDefaultDropdownText] = useState("Filter ...");
  const [searchInput, setSearchInput] = useState("");

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const selectItem = (e) => {
    setDefaultDropdownText(e.target.name);
    setSelectedDropdown(e.target.name);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("search ", searchInput, "filter", selectedDropdown);
  };

  return (
    <>
      <Form onSubmit={handelSubmit} style={{ margin: "2% 4% 0% 4%" }}>
        <InputGroup>
          <Input
            name="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={dropdownOpen}
            toggle={toggleDropDown}
          >
            <DropdownToggle name="by" caret>
              {defaultDropdownText}
            </DropdownToggle>

            <DropdownMenu>
              {dropDownMenuTitle.map((menuSection, i) => {
                return (
                  <div key={i}>
                    <DropdownItem
                      name={menuSection}
                      onClick={(e) => selectItem(e)}
                    >
                      {menuSection}
                    </DropdownItem>
                    <DropdownItem divider />
                  </div>
                );
              })}
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Button type="submit">search</Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default SearchBar;
