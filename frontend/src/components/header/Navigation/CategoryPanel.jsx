import { FaRegPlusSquare } from "react-icons/fa";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoCloseSharp } from "react-icons/io5";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setisOpenCategoryPanel(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="CategoryPanel">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop by categories
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
              Fashion
            </Button>
            <FaRegPlusSquare className="absolute top-[10px] right-[15px] !cursor-pointer"></FaRegPlusSquare>
            <ul className="seubmenu absolute top-[100%] left-[0%] w-full pl-3">
              <li className="list-none relative">
                <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                  Apparel
                </Button>
                <FaRegPlusSquare className="absolute top-[10px] right-[15px] !cursor-pointer"></FaRegPlusSquare>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCategoryPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
