import React from "react";
import App, { Container } from "next/app";
import axios from "axios";

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
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
