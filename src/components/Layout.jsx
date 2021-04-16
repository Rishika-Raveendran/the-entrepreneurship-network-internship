import * as React from "react";

import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ active_tab, children }) => {
  return (
    <>
      <div className="relative">
        <Header active={active_tab} />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  active_tab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
