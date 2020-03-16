import React, {useState} from 'react';

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col
} from 'reactstrap';




const SkateDropdown = (props) =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <Row>
            <Col sm="12" md={{ size: 6, offset: 9 }}>
           <Dropdown isOpen={dropdownOpen} toggle={toggle}>
               <DropdownToggle caret>
                  Choose A Skatepark
               </DropdownToggle>
               <DropdownMenu>
                   <DropdownItem>Placeholder </DropdownItem>
                   <DropdownItem>Placeholder </DropdownItem>
                   <DropdownItem>Placeholder </DropdownItem>
                   <DropdownItem>Placeholder </DropdownItem>
                   <DropdownItem>Placeholder </DropdownItem>
                   <DropdownItem>Placeholder </DropdownItem>
                   <DropdownItem>Placeholder </DropdownItem>
                   <DropdownItem>Placeholder </DropdownItem>
               </DropdownMenu>
           </Dropdown>
           </Col>
        </Row>
    )
}

export default SkateDropdown;