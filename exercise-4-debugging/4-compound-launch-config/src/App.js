import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import * as signalR from "@aspnet/signalr";

const API_BASE = "https://lifx-lamp-api.azurewebsites.net/api";

class App extends Component {
  constructor() {
    super();
    this.state = { color: "", bulbColor: "fff" };
  }

  async componentDidMount() {
    // initialize signalR hub (websockets connection)
    let connection = new signalR.HubConnectionBuilder()
      .withUrl(API_BASE)
      .build();

    // receives the "colorChanged" web socket event
    connection.on("colorChanged", hex => {
      // add a color circle
      this.setState({ bulbColor: hex });
    });

    // start the websocket connection
    await connection.start();
  }

  async updateColor() {
    await fetch(`/api/setColor?color=${this.state.color.substring(1)}`);
  }

  handleColorChange = event => {
    this.setState({ color: event.target.value });
  };

  handleUpdateColor = async => {
    this.updateColor();
  };

  render() {
    return (
      <div id="app" className="container">
        <div className="has-text-centered">
          <img src={logo} alt="" />
        </div>
        <section className="section">
          <div className="columns">
            <div className="column is-10">
              <input
                value={this.state.color}
                onChange={this.handleColorChange}
                className="input is-large"
                type="color"
                placeholder="Enter a Color"
              />
            </div>
            <div className="column">
              <a className="button is-large" onClick={this.handleUpdateColor}>
                Go
              </a>
            </div>
          </div>
        </section>
        <section className="section">
          <div id="lightBulb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="478"
              height="840"
              viewBox="0 0 478 840"
            >
              <defs>
                <rect
                  id="path-1"
                  width="245"
                  height="25"
                  x="118"
                  y="693"
                  rx="12.5"
                />
                <rect
                  id="path-2"
                  width="245"
                  height="25"
                  x="118"
                  y="734"
                  rx="12.5"
                />
                <rect
                  id="path-3"
                  width="245"
                  height="25"
                  x="118"
                  y="779"
                  rx="12.5"
                />
                <linearGradient
                  id="linearGradient-4"
                  x1="-16.468%"
                  x2="84.627%"
                  y1="24.026%"
                  y2="50%"
                >
                  <stop offset="0%" stopColor="#8E8E8E" />
                  <stop offset="37.947%" stopColor="#C4C4C4" />
                  <stop offset="100%" stopColor="#F7F7F7" />
                </linearGradient>
              </defs>
              <g id="Page-1" fill="none" fillRule="evenodd">
                <circle
                  id="bulb"
                  cx="239"
                  cy="239"
                  r="239"
                  fill={`#${this.state.bulbColor}`}
                />
                <rect
                  id="Rectangle-3"
                  width="231"
                  height="209"
                  x="124"
                  y="631"
                  fill="#C7D3D3"
                  rx="20"
                />
                <g id="Rectangle-3">
                  <use fill="#C7D3D3" xlinkHref="#path-1" />
                  <rect
                    width="244"
                    height="24"
                    x="118.5"
                    y="693.5"
                    stroke="#979797"
                    rx="12"
                  />
                </g>
                <g id="Rectangle-3">
                  <use fill="#C7D3D3" xlinkHref="#path-2" />
                  <rect
                    width="244"
                    height="24"
                    x="118.5"
                    y="734.5"
                    stroke="#979797"
                    rx="12"
                  />
                </g>
                <g id="Rectangle-3">
                  <use fill="#C7D3D3" xlinkHref="#path-3" />
                  <rect
                    width="244"
                    height="24"
                    x="118.5"
                    y="779.5"
                    stroke="#979797"
                    rx="12"
                  />
                </g>
                <path
                  id="Combined-Shape"
                  fill="url(#linearGradient-4)"
                  d="M89.5755052,631.03125 C87.4913142,625.419929 86.4492188,595.987637 86.4492188,542.734375 C86.4492188,479.849826 62.2994792,409.271701 14,331 L240.5,331 L466.5,331 C418.200521,409.271701 394.050781,479.849826 394.050781,542.734375 C394.050781,605.207268 392.616619,634.897044 389.748294,631.803701 L373,661 L106,661 L89.990103,631.817788 C89.8613953,631.669787 89.7361965,631.44158 89.6145066,631.133166 L89.5585938,631.03125 L89.5755052,631.03125 Z"
                />
              </g>
            </svg>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
