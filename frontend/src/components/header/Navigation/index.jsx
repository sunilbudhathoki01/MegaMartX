import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./categoryPanel";
import { useState } from "react";
import "../Navigation/style.css";
const Navigation = () => {
  const [isOpenCategoryPanel, setisOpenCategoryPanel] = useState(false);
  const openCategoryPanel = () => {
    setisOpenCategoryPanel(true);
  };
  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-4">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]"></RiMenu2Fill>Shop By
              categories{" "}
              <LiaAngleDownSolid className="text-[13px] ml-auto !font-bold  "></LiaAngleDownSolid>
            </Button>
          </div>
          {/* col2 */}
          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          {/* col3 */}
          <div className="col_3 w-[20]">
            <p className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]"></GoRocket>Free International
              Delivery
            </p>
          </div>
        </div>
      </nav>
      {/* category panel component */}
      <CategoryPanel
        isOpenCategoryPanel={isOpenCategoryPanel}
        setisOpenCategoryPanel={setisOpenCategoryPanel}
      />
    </>
  );
};

export default Navigation;
