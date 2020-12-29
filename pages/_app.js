import axios from "axios";
import App from "next/app";
import React from "react";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer in _app.getInitialProps`;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    axios.defaults.headers.common["Authorization"] = `Bearer in _app.render`;
    return (
        <Component {...pageProps} />
    );
  }
}

export default MyApp;
