import React from "react";
import App from "next/app";

import "../styles/antd.less";

class x extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default x;
