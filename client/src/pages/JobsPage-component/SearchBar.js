import React, { useState, useEffect } from "react";

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

  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [defaultDropdownText, setDefaultDropdownText] = useState("Filter ...");

  const [searchInput, setSearchInput] = useState("");

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const selectItem = (e) => {
    // e.preventDefault();
    setDefaultDropdownText(e.target.name);
    setSelectedDropdown(e.target.name);

    /* console.log(selectedDropdown);
    console.log(defaultDropdownText); */
  };
  const handelChnage = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };
  const handelSubmit = (e) => {
    const params = new URLSearchParams({
      var1: "value",
      var2: "value2",
      arr: "foo",
    });
    // e.preventDefault();
    //console.log(e.target.value);
  };

  useEffect(() => {
    //console.log(selectedDropdown);
    //console.log(defaultDropdownText);
  }, []);

  return (
    <>
      <Form onSubmit={handelSubmit}>
        <InputGroup>
          <Input
            name="search"
            value={searchInput}
            onChange={(e) => handelChnage(e)}
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
                      href={`?filter=${menuSection}`}
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
