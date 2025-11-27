import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Index";

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
        <div className="container">
          <div className="flex item-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className=" col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                {/* help center */}
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                {/* order Tracking */}
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
      <div className="header py-2">
        <div className="container flex items-center justify-between">
          {/* col1 */}
          <div className="col1 w-[25%]">
            <Link to="/">
              <img src="/images/image.png" alt="logo" />
            </Link>
          </div>
          {/* col2 */}
          <div className="col2 w-[45%]">
            <Search></Search>
          </div>
          {/* col3 */}
          <div className="col3 w-[30%]">col3</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
