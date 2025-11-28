import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Index";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "../Header/Navigation/index";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
        <div className="container">
          <div className="flex item-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-Tracking"
                    className="text-[13px] link font-[500] transition"
                  >
                    order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="header py-3 border-b-[1px] border-gray-250">
        <div className="container flex items-center justify-between">
          {/* col1 → Logo */}
          <div className="col1 flex-1 flex justify-start px-2">
            <Link to="/">
              <img src="/images/image1.png" alt="logo" />
            </Link>
          </div>

          {/* col2 → Search Bar */}
          <div className="col2 flex-1 flex justify-center">
            <Search />
          </div>

          {/* col3 → Login + Icons */}
          <div className="col3 flex-1 flex items-center justify-end">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[15px] font-[500]"
                >
                  Login
                </Link>
                &nbsp; | &nbsp;
                <Link
                  to="/register"
                  className="link transition text-[15px] font-[500]"
                >
                  register
                </Link>
              </li>

              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoMdGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="WishList">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
