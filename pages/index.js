import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
class indexPage extends Component {
  static async getInitialProps(context) {
    // method 1. await to fetch axios api
    // console.log(context); will print in terminal
    // method 2. promise
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 1000);
    });
    return promise;
    // you can promise.then() after promise
  }
  render() {
    return (
      <div>
        <h1>The Main Page {this.props.appName}</h1>
        <p>
          Try
          <Link href="/auth">
            <a>Auth</a>
          </Link>
          <button onClick={() => Router.push("/auth")}>Go to Auth</button>
        </p>
      </div>
    );
  }
}

export default indexPage;
