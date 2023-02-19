import {
  Button,
  Select,
  Table,
  Spin,
  Radio,
  ConfigProvider,
  Tooltip,
} from "antd";
import React, { Component } from "react";
import "./App.css";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LoadingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { discoverLogo, moniLogo } from "./common/images";
import delay from "delay";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      isFocus: false,
      data: [],
      loading: false,
      listChainsSelected: [],
      listCategorySelected: [],
      selectedTime: "week",
      intervalSelected: "1h",
      isSelectChainsOpen: false,
      isSelectCategoryOpen: false,
    };
  }

  onSearch = async (value) => {
    console.log("value search", value);
    this.setState({
      loading: true,
      data: [
        {
          value: "1",
          text: "Project 1",
        },
        {
          value: "2",
          text: "Project 2",
        },
        {
          value: "3",
          text: "Project 3",
        },
      ],
    });
  };

  MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#6c41eb"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#6c41eb",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#fff",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#101010"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#fff",
      borderRadius: 20 / 2,
    },
  }));

  onChangeTime = (time) => {
    console.log("time: ", time);
    this.setState({ selectedTime: time });
  };

  onChangeSearch = (value) => {
    console.log("value: ", value);
    this.setState({ data: [], isFocus: false, loading: false });
  };

  onChangeInterval = (e) => {
    console.log("interval: ", e.target.value);
    this.setState({ intervalSelected: e.target.value });
  };

  onChangeTable = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  render() {
    const {
      onSearch,
      MaterialUISwitch,
      onChangeTime,
      onChangeSearch,
      onChangeInterval,
      onChangeTable,
    } = this;
    const {
      isFocus,
      data,
      loading,
      listChainsSelected,
      selectedTime,
      listCategorySelected,
      intervalSelected,
      isSelectCategoryOpen,
      isSelectChainsOpen,
    } = this.state;
    console.log("intervalSelected: ", intervalSelected);
    const columns = [
      {
        title: (
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "13px" }}
          >
            Newest
          </div>
        ),
        dataIndex: "newest",
        width: 290,
        ellipsis: true,
        sorter: (a, b) => a.newest - b.newest,

        render(text, record) {
          return {
            props: {
              style: { background: "#161616" },
            },
            children: (
              <Tooltip
                overlayInnerStyle={{
                  border: "1px solid #323232",
                  borderRadius: "10px",
                }}
                placement="topLeft"
                title={text}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    width={40}
                    height={40}
                    style={{ borderRadius: "50%", marginRight: "12px" }}
                    src={record.image}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {text.length > 22 ? text.slice(0, 22) + "..." : text}
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "14px",
                          marginRight: "6px",
                        }}
                      >
                        <img
                          src="https://storage.googleapis.com/moni-twitter-bot/statics/images/twitter_logo.png"
                          alt=""
                          width="10"
                          style={{ marginRight: "4px" }}
                        ></img>
                        @fusionistio
                      </div>
                      <div
                        style={{
                          color: "#9b9ba0",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        16/10/22
                      </div>
                    </div>
                  </div>
                </div>
              </Tooltip>
            ),
          };
        },
      },
      {
        title: (
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "13px" }}
          >
            Score
            <Tooltip
              overlayInnerStyle={{
                border: "1px solid #323232",
                borderRadius: "10px",
              }}
              placement="topLeft"
              title={
                "Project Score – number of points based on the total amount of Smarts and their Level, coupled with our algorithms and other project data"
              }
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="#fff"
              >
                <path d="M10 17.05c3.724 0 6.81-3.078 6.81-6.81 0-3.724-3.086-6.809-6.817-6.809-3.724 0-6.802 3.085-6.802 6.81 0 3.73 3.085 6.809 6.809 6.809Zm-.152-5.438c-.421 0-.652-.204-.652-.593v-.073c0-.626.356-.976.837-1.318.587-.402.87-.613.87-1.048 0-.462-.37-.785-.923-.785-.408 0-.725.191-.962.567l-.106.145a.667.667 0 0 1-.56.284.529.529 0 0 1-.54-.534c0-.132.026-.244.065-.363.218-.64 1.009-1.173 2.189-1.173 1.22 0 2.248.646 2.248 1.793 0 .797-.442 1.193-1.114 1.628-.448.29-.686.527-.712.883v.08c-.02.283-.264.507-.64.507Zm-.013 2.096c-.435 0-.804-.323-.804-.752 0-.428.363-.758.804-.758.448 0 .811.323.811.758 0 .436-.37.752-.81.752Z"></path>
              </svg>
            </Tooltip>
          </div>
        ),
        dataIndex: "score",
        width: 130,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.score - b.score,
        render(text, record) {
          return {
            props: {
              style: { background: "#161616" },
            },
            children: (
              <span
                style={{
                  color: "#fff",
                  padding: "2px 10px",
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "#312f3a",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                {text}
              </span>
            ),
          };
        },
      },
      {
        title: (
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "13px" }}
          >
            <svg
              viewBox="0 0 18 15"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="16"
            >
              <path d="M.136 6.966c0 2.419 1.663 4.037 4.152 4.037.368 0 .723-.038 1.053-.101.724.61 1.778.996 2.971.996.463 0 .959-.057 1.447-.177.476.495 1.2.78 2.044.78.114 0 .235-.006.356-.012.196 1.136.945 2.133 2.05 2.133 1.619 0 2.526-1.841 2.526-3.917 0-.635-.025-1.11-.063-1.53.45-.565.704-1.314.704-2.19 0-1.675-1.142-2.99-2.869-3.339-.349-1.548-1.663-2.577-3.173-2.577-.108 0-.26.013-.42.045C10.37.498 9.532.117 8.637.117c-1.003 0-1.873.381-2.47 1.022A3.511 3.511 0 0 0 4.77.847c-1.631 0-2.92 1.124-2.92 2.698v.095A4.05 4.05 0 0 0 .136 6.966ZM5.31 3.33c-.007.413.273.692.64.692.362 0 .63-.241.642-.635.05-1.149.876-1.98 2.037-1.98.699 0 1.314.368 1.562.92.076.14.197.159.362.114.196-.05.425-.076.634-.076 1.111.007 2.114.85 2.114 2.127 0 2.913-4.164 2.615-4.164 5.605 0 .152.013.298.038.438a3.94 3.94 0 0 1-.723.07c-.546 0-1.098-.121-1.536-.343.92-.635 1.46-1.65 1.46-2.895 0-.082 0-.171-.007-.247 1.378-.413 2.057-1.41 2.031-2.857a.665.665 0 0 0-.66-.647.631.631 0 0 0-.635.647c.02.857-.292 1.378-1.085 1.619a2.148 2.148 0 0 0-.508-.629c-.273-.228-.438-.304-.698-.304-.368 0-.628.235-.628.571 0 .368.165.438.54.793.247.229.374.584.374 1.035 0 1.416-1.111 2.368-2.793 2.368-1.733 0-2.876-1.098-2.876-2.755 0-.755.298-1.46.813-1.968.45.705 1.256 1.136 2.291 1.136a.65.65 0 0 0 .648-.647.65.65 0 0 0-.648-.647c-.857 0-1.39-.527-1.39-1.29 0-.824.686-1.402 1.612-1.402.248 0 .495.045.743.127-.114.324-.178.68-.19 1.06Zm7.604 6.373c0 .356.28.622.641.648.705.05 1.333-.045 1.873-.26.012.183.012.38.012.596 0 1.587-.558 2.64-1.231 2.64-.68 0-.997-.926-.997-1.77 0-.127-.082-.216-.235-.216-.14 0-.317.006-.526.006-1.2 0-1.968-.406-1.968-1.301 0-2.057 3.764-1.81 4.094-5.085.92.21 1.498.965 1.498 2.025 0 1.371-.99 2.203-2.507 2.076-.362-.032-.654.28-.654.641Z"></path>
            </svg>
            Followers
            <Tooltip
              overlayInnerStyle={{
                border: "1px solid #323232",
                borderRadius: "10px",
              }}
              placement="topLeft"
              title={
                "Smart Followers - founders of projects, members of private communities, members of VCs, Influencers, Whales, Developers, Alpha Hunters, Top traders, and other Big Brains of web3."
              }
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="#fff"
              >
                <path d="M10 17.05c3.724 0 6.81-3.078 6.81-6.81 0-3.724-3.086-6.809-6.817-6.809-3.724 0-6.802 3.085-6.802 6.81 0 3.73 3.085 6.809 6.809 6.809Zm-.152-5.438c-.421 0-.652-.204-.652-.593v-.073c0-.626.356-.976.837-1.318.587-.402.87-.613.87-1.048 0-.462-.37-.785-.923-.785-.408 0-.725.191-.962.567l-.106.145a.667.667 0 0 1-.56.284.529.529 0 0 1-.54-.534c0-.132.026-.244.065-.363.218-.64 1.009-1.173 2.189-1.173 1.22 0 2.248.646 2.248 1.793 0 .797-.442 1.193-1.114 1.628-.448.29-.686.527-.712.883v.08c-.02.283-.264.507-.64.507Zm-.013 2.096c-.435 0-.804-.323-.804-.752 0-.428.363-.758.804-.758.448 0 .811.323.811.758 0 .436-.37.752-.81.752Z"></path>
              </svg>
            </Tooltip>
          </div>
        ),
        dataIndex: "followers",
        width: 180,

        defaultSortOrder: "descend",
        sorter: (a, b) => a.followers - b.followers,
        render(text, record) {
          return {
            props: {
              style: { background: "#161616" },
            },
            children: (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {!!record.follower1 ||
                !!record.follower2 ||
                !!record.follower3 ? (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      style={{
                        border: "2px solid black",
                        borderRadius: "15px",
                      }}
                      width={20}
                      height={20}
                      src={record.follower1}
                    />
                    <img
                      style={{
                        border: "2px solid black",
                        borderRadius: "15px",
                        transform: `translateX(-10px)`,
                      }}
                      width={20}
                      height={20}
                      src={record.follower2}
                    />
                    <img
                      style={{
                        border: "2px solid black",
                        borderRadius: "15px",
                        transform: `translateX(-20px)`,
                      }}
                      width={20}
                      height={20}
                      src={record.follower3}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "72px",
                    }}
                  ></div>
                )}
                <div
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {text}
                </div>
              </div>
            ),
          };
        },
      },
      {
        title: (
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "13px" }}
          >
            <svg
              viewBox="0 0 18 15"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="16"
            >
              <path d="M.136 6.966c0 2.419 1.663 4.037 4.152 4.037.368 0 .723-.038 1.053-.101.724.61 1.778.996 2.971.996.463 0 .959-.057 1.447-.177.476.495 1.2.78 2.044.78.114 0 .235-.006.356-.012.196 1.136.945 2.133 2.05 2.133 1.619 0 2.526-1.841 2.526-3.917 0-.635-.025-1.11-.063-1.53.45-.565.704-1.314.704-2.19 0-1.675-1.142-2.99-2.869-3.339-.349-1.548-1.663-2.577-3.173-2.577-.108 0-.26.013-.42.045C10.37.498 9.532.117 8.637.117c-1.003 0-1.873.381-2.47 1.022A3.511 3.511 0 0 0 4.77.847c-1.631 0-2.92 1.124-2.92 2.698v.095A4.05 4.05 0 0 0 .136 6.966ZM5.31 3.33c-.007.413.273.692.64.692.362 0 .63-.241.642-.635.05-1.149.876-1.98 2.037-1.98.699 0 1.314.368 1.562.92.076.14.197.159.362.114.196-.05.425-.076.634-.076 1.111.007 2.114.85 2.114 2.127 0 2.913-4.164 2.615-4.164 5.605 0 .152.013.298.038.438a3.94 3.94 0 0 1-.723.07c-.546 0-1.098-.121-1.536-.343.92-.635 1.46-1.65 1.46-2.895 0-.082 0-.171-.007-.247 1.378-.413 2.057-1.41 2.031-2.857a.665.665 0 0 0-.66-.647.631.631 0 0 0-.635.647c.02.857-.292 1.378-1.085 1.619a2.148 2.148 0 0 0-.508-.629c-.273-.228-.438-.304-.698-.304-.368 0-.628.235-.628.571 0 .368.165.438.54.793.247.229.374.584.374 1.035 0 1.416-1.111 2.368-2.793 2.368-1.733 0-2.876-1.098-2.876-2.755 0-.755.298-1.46.813-1.968.45.705 1.256 1.136 2.291 1.136a.65.65 0 0 0 .648-.647.65.65 0 0 0-.648-.647c-.857 0-1.39-.527-1.39-1.29 0-.824.686-1.402 1.612-1.402.248 0 .495.045.743.127-.114.324-.178.68-.19 1.06Zm7.604 6.373c0 .356.28.622.641.648.705.05 1.333-.045 1.873-.26.012.183.012.38.012.596 0 1.587-.558 2.64-1.231 2.64-.68 0-.997-.926-.997-1.77 0-.127-.082-.216-.235-.216-.14 0-.317.006-.526.006-1.2 0-1.968-.406-1.968-1.301 0-2.057 3.764-1.81 4.094-5.085.92.21 1.498.965 1.498 2.025 0 1.371-.99 2.203-2.507 2.076-.362-.032-.654.28-.654.641Z"></path>
            </svg>
            Mentions
            <Tooltip
              overlayInnerStyle={{
                border: "1px solid #323232",
                borderRadius: "10px",
              }}
              placement="topLeft"
              title={
                "Smart Mentions - any mention (@) of the project by Smarts in the form of a post or comment"
              }
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="#fff"
              >
                <path d="M10 17.05c3.724 0 6.81-3.078 6.81-6.81 0-3.724-3.086-6.809-6.817-6.809-3.724 0-6.802 3.085-6.802 6.81 0 3.73 3.085 6.809 6.809 6.809Zm-.152-5.438c-.421 0-.652-.204-.652-.593v-.073c0-.626.356-.976.837-1.318.587-.402.87-.613.87-1.048 0-.462-.37-.785-.923-.785-.408 0-.725.191-.962.567l-.106.145a.667.667 0 0 1-.56.284.529.529 0 0 1-.54-.534c0-.132.026-.244.065-.363.218-.64 1.009-1.173 2.189-1.173 1.22 0 2.248.646 2.248 1.793 0 .797-.442 1.193-1.114 1.628-.448.29-.686.527-.712.883v.08c-.02.283-.264.507-.64.507Zm-.013 2.096c-.435 0-.804-.323-.804-.752 0-.428.363-.758.804-.758.448 0 .811.323.811.758 0 .436-.37.752-.81.752Z"></path>
              </svg>
            </Tooltip>
          </div>
        ),
        dataIndex: "mentions",
        width: 120,
        defaultSortOrder: "descend",
        sorter: (a, b) => a.mentions - b.mentions,
        render(text, record) {
          return {
            props: {
              style: { background: "#161616" },
            },
            children: (
              <div
                style={
                  text > 0
                    ? { color: "#fff", fontSize: "16px", fontWeight: "500" }
                    : { color: "#323232", fontSize: "15px" }
                }
              >
                {text > 0 ? text : "—"}
              </div>
            ),
          };
        },
      },
      {
        title: (
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "13px" }}
          >
            <ArrowDownOutlined style={{ marginRight: "3px" }} />
            Followers
          </div>
        ),
        dataIndex: "numberFollow",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.numberFollow - b.numberFollow,
        width: 130,
        render(text, record) {
          return {
            props: {
              style: { background: "#161616" },
            },
            children: (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "500",
                    marginRight: "5px",
                  }}
                >
                  {text}
                </div>

                {record.isIncrease !== null && (
                  <div
                    style={{
                      color: record.isIncrease ? "#63ca48" : "#c9362b",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    {record.isIncrease ? (
                      <ArrowUpOutlined />
                    ) : (
                      <ArrowDownOutlined />
                    )}
                    {record.newFollow}
                  </div>
                )}
              </div>
            ),
          };
        },
      },
      {
        title: (
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "13px" }}
          >
            Category
          </div>
        ),
        dataIndex: "category",
        defaultSortOrder: "descend",
        width: 130,
        render(text, record) {
          return {
            props: {
              style: { background: "#161616" },
            },
            children: text && (
              <span
                style={{
                  color: "black",
                  padding: "2px 10px",
                  fontSize: "15px",
                  fontWeight: "500",
                  background: "#b7e5fc",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                {text}
              </span>
            ),
          };
        },
      },
      {
        title: (
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "13px" }}
          ></div>
        ),
        // width: 40,
        render(text, record) {
          return (
            <Tooltip
              overlayInnerStyle={{
                border: "1px solid #323232",
                borderRadius: "10px",
              }}
              placement="topLeft"
              title="Add to watchlist"
            >
              <div
                className="noselect"
                style={{
                  background: "fff",
                  width: "16px",
                  height: "16px",
                  border: "1px solid #101010",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  viewBox="0 0 8 8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="#6a40e8"
                >
                  <path d="M0 4c0 .185.066.344.198.476.132.129.29.193.471.193h2.667v2.667c0 .182.064.337.193.466.132.132.29.198.471.198a.633.633 0 0 0 .47-.198.627.627 0 0 0 .2-.466V4.669h2.666a.635.635 0 0 0 .466-.193A.649.649 0 0 0 8 4a.643.643 0 0 0-.198-.47.627.627 0 0 0-.466-.2H4.669V.67a.643.643 0 0 0-.198-.472A.633.633 0 0 0 4 0a.643.643 0 0 0-.47.198.652.652 0 0 0-.194.471v2.662H.669a.643.643 0 0 0-.47.198A.643.643 0 0 0 0 4Z"></path>
                </svg>
              </div>
            </Tooltip>
          );
        },
      },
    ];
    const dataTable = [
      {
        key: "1",
        newest: "Fusionist 🛸👾 | Endurance",
        score: 510,
        followers: 77,
        numberFollow: "646.7k",
        category: null,
        mentions: 0,
        newFollow: 584,
        isIncrease: true,
        category: null,
        follower1:
          "https://pbs.twimg.com/profile_images/1614851991016189955/XwatJmPK.png",
        follower2:
          "https://pbs.twimg.com/profile_images/1624187053813682176/emMI2kgq.jpg",
        follower3:
          "https://pbs.twimg.com/profile_images/1611158476239036420/ih4HPw_W.jpg",
        image:
          "https://pbs.twimg.com/profile_images/1584477941680852992/4joHUlAu.jpg",
      },

      {
        key: "2",
        newest: "Rubicon",
        score: 510,
        followers: 101,
        numberFollow: "245.9k",
        newFollow: 37,
        isIncrease: true,
        category: null,
        follower1:
          "https://pbs.twimg.com/profile_images/1611158476239036420/ih4HPw_W.jpg",
        follower2:
          "https://pbs.twimg.com/profile_images/1546301678994874371/tcdVqsPP.jpg",
        follower3:
          "https://pbs.twimg.com/profile_images/1623028953706557440/aiczcJho.jpg",
        mentions: 2,
        image:
          "https://pbs.twimg.com/profile_images/1313235072049451010/Yov0lKbJ.jpg",
      },

      {
        key: "3",
        newest: "ARB ID (💙,🧡)",
        score: 510,
        followers: 49,
        numberFollow: "216.5k",
        newFollow: null,
        isIncrease: null,
        category: null,
        follower1:
          "https://pbs.twimg.com/profile_images/1542690386673532930/77gdeBaN.jpg",
        follower2:
          "https://pbs.twimg.com/profile_images/1623705131559845890/47w1mPa4.jpg",
        follower3:
          "https://pbs.twimg.com/profile_images/1621838934618800130/u0Piuh9O.jpg",
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1623687011474481152/Ps1uGST4.jpg",
      },

      {
        key: "4",
        newest: "Quix 🔴✨",
        score: 510,
        followers: 14,
        numberFollow: "210.3k",
        newFollow: 8,
        isIncrease: true,
        category: null,
        follower1:
          "https://pbs.twimg.com/profile_images/1624850613430554624/hMV5vVVJ.jpg",
        follower2:
          "https://pbs.twimg.com/profile_images/1583116442764976128/iQTvJdWR.jpg",
        follower3:
          "https://pbs.twimg.com/profile_images/1621437030403014656/hrFnFkBw.jpg",
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1566184455592521729/Jpo2gnZ7.jpg",
      },

      {
        key: "5",
        newest: "Cloud Castles",
        score: 510,
        followers: 61,
        numberFollow: "198.2k",
        newFollow: 5,
        isIncrease: false,
        category: null,
        follower1:
          "https://pbs.twimg.com/profile_images/1586288046256758784/d8qJih8V.jpg",
        follower2:
          "https://pbs.twimg.com/profile_images/1600018395340193793/mbc3PjU4.png",
        follower3:
          "https://pbs.twimg.com/profile_images/1548123992262713344/Gb5tJ_ZQ.png",
        mentions: 1,
        image:
          "https://pbs.twimg.com/profile_images/1585676264819392512/T4TR923M.jpg",
      },

      {
        key: "6",
        newest: "ghost boy 💀",
        score: 510,
        followers: 30,
        numberFollow: "164.9k",
        newFollow: 15,
        isIncrease: true,
        category: null,
        follower1:
          "https://pbs.twimg.com/profile_images/1621898097512091648/6EmMDBo6.jpg",
        follower2:
          "https://pbs.twimg.com/profile_images/1537438338621157380/TL7Xz9cp.jpg",
        follower3:
          "https://pbs.twimg.com/profile_images/1626705691972087813/wRcAKckh.jpg",
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1625296186893643776/xrkky0WA.jpg",
      },

      {
        key: "7",
        newest: "Sei",
        score: 510,
        followers: 98,
        numberFollow: "161.7k",
        newFollow: 3,
        isIncrease: false,
        category: null,
        follower1:
          "https://pbs.twimg.com/profile_images/1600315143367311360/q_sztDhc.jpg",
        follower2:
          "https://pbs.twimg.com/profile_images/1415641885578780675/t0AF-4-z.jpg",
        follower3:
          "https://pbs.twimg.com/profile_images/1621575639869591553/nX0h7Swa.jpg",
        mentions: 2,
        image:
          "https://pbs.twimg.com/profile_images/1608883260465061888/w1Eh5L4X.jpg",
      },

      {
        key: "8",
        newest: "Cetus - CLMM DEX on Aptos & Sui",
        score: 510,
        followers: 125,
        numberFollow: "142.5k",
        newFollow: 2,
        isIncrease: true,
        category: "DeFi",
        follower1:
          "https://pbs.twimg.com/profile_images/1586288046256758784/d8qJih8V.jpg",
        follower2:
          "https://pbs.twimg.com/profile_images/1547265608076500993/Rw3vQU0M.jpg",
        follower3:
          "https://pbs.twimg.com/profile_images/1556492962951045120/I1b7rAnk.jpg",
        mentions: 1,
        image:
          "https://pbs.twimg.com/profile_images/1610882080841543680/DT_n5wDa.png",
      },

      {
        key: "9",
        newest: "Helio Protocol ($HAY) 🔶",
        score: 510,
        followers: 18,
        numberFollow: "139.9k",
        newFollow: 6,
        isIncrease: true,
        category: "DeFi",
        follower1:
          "https://pbs.twimg.com/profile_images/1557059330666545153/qFpFDXM3.jpg",
        follower2:
          "https://pbs.twimg.com/profile_images/1623705131559845890/47w1mPa4.jpg",
        follower3:
          "https://pbs.twimg.com/profile_images/1572199012790603778/GF4NXSKr.jpg",
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1541712933738143744/CG5mq3_3.jpg",
      },

      {
        key: "10",
        newest: "Hei Wallet!",
        score: 510,
        followers: 10,
        numberFollow: "138.8k",
        newFollow: 2,
        isIncrease: true,
        category: null,
        follower1:
          "https://pbs.twimg.com/profile_images/1623896294732210177/0ygYC5vg.jpg",
        follower2:
          "https://pbs.twimg.com/profile_images/1626708518698127361/EmBuqBoT.jpg",
        follower3:
          "https://pbs.twimg.com/profile_images/1622705190607486989/XZ3HQx8x.jpg",
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1517216245573115906/2RD9YphA.jpg",
      },
      {
        key: "11",
        newest: "Sui Name Service (SuiNS)",
        score: 510,
        followers: 22,
        numberFollow: "124.9k",
        newFollow: 15,
        isIncrease: true,
        category: null,
        follower1:
          "https://pbs.twimg.com/profile_images/1574587708944838656/wE_hOe7e.jpg",
        follower2:
          "https://pbs.twimg.com/profile_images/1588985195469979650/guKsqxaw.jpg",
        follower3:
          "https://pbs.twimg.com/profile_images/1586288046256758784/d8qJih8V.jpg",
        mentions: 3,
        image:
          "https://pbs.twimg.com/profile_images/1620666957451366400/4SWB7EbK.png",
      },
      {
        key: "12",
        newest: "Fusionist 🛸👾 | Endurance",
        score: 510,
        followers: 77,
        numberFollow: "646.7k",
        category: null,
        mentions: 0,
        newFollow: 584,
        isIncrease: true,
        category: null,
        image:
          "https://pbs.twimg.com/profile_images/1584477941680852992/4joHUlAu.jpg",
      },

      {
        key: "13",
        newest: "Rubicon",
        score: 510,
        followers: 101,
        numberFollow: "245.9k",
        newFollow: 37,
        isIncrease: true,
        category: null,
        mentions: 2,
        image:
          "https://pbs.twimg.com/profile_images/1313235072049451010/Yov0lKbJ.jpg",
      },

      {
        key: "14",
        newest: "ARB ID (💙,🧡)",
        score: 510,
        followers: 49,
        numberFollow: "216.5k",
        newFollow: null,
        isIncrease: null,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1623687011474481152/Ps1uGST4.jpg",
      },

      {
        key: "15",
        newest: "Quix 🔴✨",
        score: 510,
        followers: 14,
        numberFollow: "210.3k",
        newFollow: 8,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1566184455592521729/Jpo2gnZ7.jpg",
      },

      {
        key: "16",
        newest: "Cloud Castles",
        score: 510,
        followers: 61,
        numberFollow: "198.2k",
        newFollow: 5,
        isIncrease: false,
        category: null,
        mentions: 1,
        image:
          "https://pbs.twimg.com/profile_images/1585676264819392512/T4TR923M.jpg",
      },

      {
        key: "17",
        newest: "ghost boy 💀",
        score: 510,
        followers: 30,
        numberFollow: "164.9k",
        newFollow: 15,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1625296186893643776/xrkky0WA.jpg",
      },

      {
        key: "18",
        newest: "Sei",
        score: 510,
        followers: 98,
        numberFollow: "161.7k",
        newFollow: 3,
        isIncrease: false,
        category: null,
        mentions: 2,
        image:
          "https://pbs.twimg.com/profile_images/1608883260465061888/w1Eh5L4X.jpg",
      },

      {
        key: "19",
        newest: "Cetus - CLMM DEX on Aptos & Sui",
        score: 510,
        followers: 125,
        numberFollow: "142.5k",
        newFollow: 2,
        isIncrease: true,
        category: "DeFi",
        mentions: 1,
        image:
          "https://pbs.twimg.com/profile_images/1610882080841543680/DT_n5wDa.png",
      },
      {
        key: "20",
        newest: "Hei Wallet!",
        score: 510,
        followers: 10,
        numberFollow: "138.8k",
        newFollow: 2,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1517216245573115906/2RD9YphA.jpg",
      },
      {
        key: "21",
        newest: "Sui Name Service (SuiNS)",
        score: 510,
        followers: 22,
        numberFollow: "124.9k",
        newFollow: 15,
        isIncrease: true,
        category: null,
        mentions: 3,
        image:
          "https://pbs.twimg.com/profile_images/1620666957451366400/4SWB7EbK.png",
      },
      {
        key: "22",
        newest: "Fusionist 🛸👾 | Endurance",
        score: 510,
        followers: 77,
        numberFollow: "646.7k",
        category: null,
        mentions: 0,
        newFollow: 584,
        isIncrease: true,
        category: null,
        image:
          "https://pbs.twimg.com/profile_images/1584477941680852992/4joHUlAu.jpg",
      },

      {
        key: "23",
        newest: "Rubicon",
        score: 510,
        followers: 101,
        numberFollow: "245.9k",
        newFollow: 37,
        isIncrease: true,
        category: null,
        mentions: 2,
        image:
          "https://pbs.twimg.com/profile_images/1313235072049451010/Yov0lKbJ.jpg",
      },

      {
        key: "24",
        newest: "ARB ID (💙,🧡)",
        score: 510,
        followers: 49,
        numberFollow: "216.5k",
        newFollow: null,
        isIncrease: null,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1623687011474481152/Ps1uGST4.jpg",
      },

      {
        key: "25",
        newest: "Quix 🔴✨",
        score: 510,
        followers: 14,
        numberFollow: "210.3k",
        newFollow: 8,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1566184455592521729/Jpo2gnZ7.jpg",
      },

      {
        key: "26",
        newest: "Cloud Castles",
        score: 510,
        followers: 61,
        numberFollow: "198.2k",
        newFollow: 5,
        isIncrease: false,
        category: null,
        mentions: 1,
        image:
          "https://pbs.twimg.com/profile_images/1585676264819392512/T4TR923M.jpg",
      },

      {
        key: "27",
        newest: "ghost boy 💀",
        score: 510,
        followers: 30,
        numberFollow: "164.9k",
        newFollow: 15,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1625296186893643776/xrkky0WA.jpg",
      },

      {
        key: "28",
        newest: "Sei",
        score: 510,
        followers: 98,
        numberFollow: "161.7k",
        newFollow: 3,
        isIncrease: false,
        category: null,
        mentions: 2,
        image:
          "https://pbs.twimg.com/profile_images/1608883260465061888/w1Eh5L4X.jpg",
      },

      {
        key: "29",
        newest: "Cetus - CLMM DEX on Aptos & Sui",
        score: 510,
        followers: 125,
        numberFollow: "142.5k",
        newFollow: 2,
        isIncrease: true,
        category: "DeFi",
        mentions: 1,
        image:
          "https://pbs.twimg.com/profile_images/1610882080841543680/DT_n5wDa.png",
      },

      {
        key: "30",
        newest: "Helio Protocol ($HAY) 🔶",
        score: 510,
        followers: 18,
        numberFollow: "139.9k",
        newFollow: 6,
        isIncrease: true,
        category: "DeFi",
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1541712933738143744/CG5mq3_3.jpg",
      },

      {
        key: "31",
        newest: "Hei Wallet!",
        score: 510,
        followers: 10,
        numberFollow: "138.8k",
        newFollow: 2,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1517216245573115906/2RD9YphA.jpg",
      },
      {
        key: "32",
        newest: "Sui Name Service (SuiNS)",
        score: 510,
        followers: 22,
        numberFollow: "124.9k",
        newFollow: 15,
        isIncrease: true,
        category: null,
        mentions: 3,
        image:
          "https://pbs.twimg.com/profile_images/1620666957451366400/4SWB7EbK.png",
      },
      {
        key: "33",
        newest: "Fusionist 🛸👾 | Endurance",
        score: 510,
        followers: 77,
        numberFollow: "646.7k",
        category: null,
        mentions: 0,
        newFollow: 584,
        isIncrease: true,
        category: null,
        image:
          "https://pbs.twimg.com/profile_images/1584477941680852992/4joHUlAu.jpg",
      },

      {
        key: "34",
        newest: "Rubicon",
        score: 510,
        followers: 101,
        numberFollow: "245.9k",
        newFollow: 37,
        isIncrease: true,
        category: null,
        mentions: 2,
        image:
          "https://pbs.twimg.com/profile_images/1313235072049451010/Yov0lKbJ.jpg",
      },

      {
        key: "35",
        newest: "ARB ID (💙,🧡)",
        score: 510,
        followers: 49,
        numberFollow: "216.5k",
        newFollow: null,
        isIncrease: null,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1623687011474481152/Ps1uGST4.jpg",
      },

      {
        key: "36",
        newest: "Quix 🔴✨",
        score: 510,
        followers: 14,
        numberFollow: "210.3k",
        newFollow: 8,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1566184455592521729/Jpo2gnZ7.jpg",
      },

      {
        key: "37",
        newest: "Cloud Castles",
        score: 510,
        followers: 61,
        numberFollow: "198.2k",
        newFollow: 5,
        isIncrease: false,
        category: null,
        mentions: 1,
        image:
          "https://pbs.twimg.com/profile_images/1585676264819392512/T4TR923M.jpg",
      },

      {
        key: "38",
        newest: "ghost boy 💀",
        score: 510,
        followers: 30,
        numberFollow: "164.9k",
        newFollow: 15,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1625296186893643776/xrkky0WA.jpg",
      },

      {
        key: "39",
        newest: "Sei",
        score: 510,
        followers: 98,
        numberFollow: "161.7k",
        newFollow: 3,
        isIncrease: false,
        category: null,
        mentions: 2,
        image:
          "https://pbs.twimg.com/profile_images/1608883260465061888/w1Eh5L4X.jpg",
      },

      {
        key: "40",
        newest: "Cetus - CLMM DEX on Aptos & Sui",
        score: 510,
        followers: 125,
        numberFollow: "142.5k",
        newFollow: 2,
        isIncrease: true,
        category: "DeFi",
        mentions: 1,
        image:
          "https://pbs.twimg.com/profile_images/1610882080841543680/DT_n5wDa.png",
      },

      {
        key: "41",
        newest: "Helio Protocol ($HAY) 🔶",
        score: 510,
        followers: 18,
        numberFollow: "139.9k",
        newFollow: 6,
        isIncrease: true,
        category: "DeFi",
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1541712933738143744/CG5mq3_3.jpg",
      },

      {
        key: "42",
        newest: "Hei Wallet!",
        score: 510,
        followers: 10,
        numberFollow: "138.8k",
        newFollow: 2,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1517216245573115906/2RD9YphA.jpg",
      },
      {
        key: "43",
        newest: "Sui Name Service (SuiNS)",
        score: 510,
        followers: 22,
        numberFollow: "124.9k",
        newFollow: 15,
        isIncrease: true,
        category: null,
        mentions: 3,
        image:
          "https://pbs.twimg.com/profile_images/1620666957451366400/4SWB7EbK.png",
      },
      {
        key: "44",
        newest: "Fusionist 🛸👾 | Endurance",
        score: 510,
        followers: 77,
        numberFollow: "646.7k",
        category: null,
        mentions: 0,
        newFollow: 584,
        isIncrease: true,
        category: null,
        image:
          "https://pbs.twimg.com/profile_images/1584477941680852992/4joHUlAu.jpg",
      },

      {
        key: "45",
        newest: "Rubicon",
        score: 510,
        followers: 101,
        numberFollow: "245.9k",
        newFollow: 37,
        isIncrease: true,
        category: null,
        mentions: 2,
        image:
          "https://pbs.twimg.com/profile_images/1313235072049451010/Yov0lKbJ.jpg",
      },

      {
        key: "46",
        newest: "ARB ID (💙,🧡)",
        score: 510,
        followers: 49,
        numberFollow: "216.5k",
        newFollow: null,
        isIncrease: null,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1623687011474481152/Ps1uGST4.jpg",
      },

      {
        key: "47",
        newest: "Quix 🔴✨",
        score: 510,
        followers: 14,
        numberFollow: "210.3k",
        newFollow: 8,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1566184455592521729/Jpo2gnZ7.jpg",
      },

      {
        key: "48",
        newest: "Cloud Castles",
        score: 510,
        followers: 61,
        numberFollow: "198.2k",
        newFollow: 5,
        isIncrease: false,
        category: null,
        mentions: 1,
        image:
          "https://pbs.twimg.com/profile_images/1585676264819392512/T4TR923M.jpg",
      },

      {
        key: "49",
        newest: "ghost boy 💀",
        score: 510,
        followers: 30,
        numberFollow: "164.9k",
        newFollow: 15,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1625296186893643776/xrkky0WA.jpg",
      },

      {
        key: "50",
        newest: "Sei",
        score: 510,
        followers: 98,
        numberFollow: "161.7k",
        newFollow: 3,
        isIncrease: false,
        category: null,
        mentions: 2,
        image:
          "https://pbs.twimg.com/profile_images/1608883260465061888/w1Eh5L4X.jpg",
      },

      {
        key: "51",
        newest: "Cetus - CLMM DEX on Aptos & Sui",
        score: 510,
        followers: 125,
        numberFollow: "142.5k",
        newFollow: 2,
        isIncrease: true,
        category: "DeFi",
        mentions: 1,
        image:
          "https://pbs.twimg.com/profile_images/1610882080841543680/DT_n5wDa.png",
      },

      {
        key: "52",
        newest: "Helio Protocol ($HAY) 🔶",
        score: 510,
        followers: 18,
        numberFollow: "139.9k",
        newFollow: 6,
        isIncrease: true,
        category: "DeFi",
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1541712933738143744/CG5mq3_3.jpg",
      },

      {
        key: "53",
        newest: "Hei Wallet!",
        score: 510,
        followers: 10,
        numberFollow: "138.8k",
        newFollow: 2,
        isIncrease: true,
        category: null,
        mentions: 0,
        image:
          "https://pbs.twimg.com/profile_images/1517216245573115906/2RD9YphA.jpg",
      },
      {
        key: "54",
        newest: "Sui Name Service (SuiNS)",
        score: 510,
        followers: 22,
        numberFollow: "124.9k",
        newFollow: 15,
        isIncrease: true,
        category: null,
        mentions: 3,
        image:
          "https://pbs.twimg.com/profile_images/1620666957451366400/4SWB7EbK.png",
      },
    ];
    return (
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <div style={styles.logo}>
            <img style={{ marginRight: "5px" }} width={38} src={moniLogo} />
            <img width={110} src={discoverLogo} />
          </div>
          <div style={styles.searchBar}>
            <div style={styles.searchContainer(isFocus)}>
              <SearchOutlined style={styles.searchIcon(isFocus)} />
              <Select
                className=".customSearch"
                showSearch
                style={styles.searchInput}
                dropdownAlign={{ offset: [-24, 4] }}
                placeholder="Search projects"
                suffixIcon={
                  // <SearchOutlined style={styles.searchIcon(isFocus)} />
                  loading && (
                    <Spin
                      indicator={
                        <LoadingOutlined
                          style={{ fontSize: 16, color: "#6c41eb" }}
                          spin
                        />
                      }
                    />
                  )
                }
                loading={loading}
                value={null}
                defaultActiveFirstOption={false}
                showArrow={true}
                filterOption={false}
                onSearch={onSearch}
                notFoundContent={null}
                defaultOpen={false}
                onChange={onChangeSearch}
                dropdownMatchSelectWidth={480}
                dropdownStyle={{
                  left: "405px !important",
                }}
                dropdownRender={(menu) => {
                  return (
                    <div
                      className="custom-dropdown"
                      style={{
                        background: "#121212",
                      }}
                    >
                      {menu}
                      <div
                        className="noselect"
                        style={{
                          color: "#6c41eb",
                          fontWeight: "600",
                          fontSize: 14,
                          padding: "10px 12px",
                        }}
                      >
                        Show More
                      </div>
                    </div>
                  );
                }}
                popupClassName="custom-dropdown"
                options={(data || []).map((d) => ({
                  value: d.value,
                  label: (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        width={26}
                        style={{ marginRight: "10px", borderRadius: 13 }}
                        src={
                          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*"
                        }
                      ></img>
                      <span>{d.text}</span>
                    </div>
                  ),
                }))}
                onFocus={() => {
                  this.setState({ isFocus: true });
                }}
                onBlur={() => {
                  this.setState({ data: [], isFocus: false, loading: false });
                }}
              />
            </div>
          </div>
          <div style={styles.loginArea}>
            <div style={styles.loginContainer}>
              <div style={styles.darkThemeContainer}>
                <span style={styles.darkThemeText}>Dark Theme</span>
                <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
              </div>
              <Button style={styles.loginBtn}>Login</Button>
            </div>
          </div>
        </div>
        <div style={styles.body}>
          <div style={styles.tableContainer}>
            <div style={styles.tab}>
              <div className="noselect" style={styles.tabItem}>
                All Projects
              </div>
              <div className="noselect" style={styles.tabItem}>
                Watchlist
              </div>
              <div
                className="noselect"
                style={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "600",
                  marginRight: "14px",
                  minWidth: "120px",
                }}
              >
                Twitter Tracker
              </div>
            </div>
            <div style={styles.table}>
              <div style={styles.tableHeader}>
                <div style={styles.leftHeader}>
                  <div style={styles.headerText}>163 PROJECTS DURING THE</div>
                  <Select
                    defaultValue="week"
                    suffixIcon={false}
                    style={styles.selectTime(selectedTime)}
                    onChange={onChangeTime}
                    dropdownMatchSelectWidth={120}
                    dropdownAlign={{ offset: [-13, 4] }}
                    dropdownRender={(menu) => {
                      return (
                        <div
                          className="selectTime"
                          style={{
                            background: "#121212",
                          }}
                        >
                          {menu}
                        </div>
                      );
                    }}
                    options={[
                      { value: "hour", label: "Hour" },
                      { value: "day", label: "Day" },
                      { value: "week", label: "Week" },
                      { value: "allTime", label: "All Time" },
                    ].map((d, index) => ({
                      value: d.value,
                      label: (
                        <div
                          style={{
                            borderBottom:
                              index === 3 ? "none" : "1px solid #323232",
                          }}
                        >
                          {d.label}
                        </div>
                      ),
                    }))}
                  />
                  <Select
                    mode="multiple"
                    showSearch={false}
                    onDropdownVisibleChange={(open) => {
                      if (open) {
                        this.setState({ isSelectChainsOpen: true });
                        document.body.style.overflow = "hidden";
                        document.getElementsByClassName(
                          "container"
                        )[0].style.overflow = "hidden";
                      } else {
                        this.setState({ isSelectChainsOpen: false });
                        if (!isSelectCategoryOpen) {
                          document.body.style.overflow = "auto";
                        }
                      }
                    }}
                    style={{
                      width: listChainsSelected.length > 0 ? "60%" : "10%",
                      marginLeft: "10px",
                    }}
                    value={listChainsSelected}
                    dropdownMatchSelectWidth={120}
                    options={[
                      { value: "all", label: "All (Default)" },
                      { value: "noChain", label: "No Chain" },
                      { value: "crossChain", label: "Cross-chain" },
                      { value: "algorand", label: "Algorand" },
                      { value: "aptos", label: "Aptos" },
                      { value: "arbitrum", label: "Arbitrum" },
                      { value: "arbitrumNova", label: "Arbitrum Nova" },
                      { value: "astar", label: "Astar" },
                      { value: "aurora", label: "Aurora" },
                      { value: "avalanche", label: "Avalanche" },
                    ].map((d, index) => ({
                      value: d.value,
                      label: (
                        <div
                          style={{
                            borderBottom:
                              index === 3 ? "none" : "1px solid #323232",
                          }}
                        >
                          {d.label}
                        </div>
                      ),
                    }))}
                    onChange={(newValue) => {
                      console.log("newValue: ", newValue);
                      this.setState({ listChainsSelected: newValue });
                    }}
                    placeholder="Chains"
                    maxTagCount="responsive"
                  />
                  <Select
                    mode="multiple"
                    showSearch={false}
                    onDropdownVisibleChange={(open) => {
                      if (open) {
                        this.setState({ isSelectCategoryOpen: true });
                        document.body.style.overflow = "hidden";
                        document.getElementsByClassName(
                          "container"
                        )[0].style.overflow = "hidden";
                      } else {
                        this.setState({ isSelectCategoryOpen: false });
                        if (!isSelectChainsOpen) {
                          document.body.style.overflow = "auto";
                        }
                      }
                    }}
                    style={{
                      width: listCategorySelected.length > 0 ? "60%" : "12%",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                    value={listCategorySelected}
                    dropdownMatchSelectWidth={120}
                    options={[
                      { value: "nft", label: "NFT" },
                      { value: "gamingP2E", label: "Gaming P2E" },
                      { value: "stablecoin", label: "Stablecoin" },
                      { value: "other", label: "Other" },
                      { value: "dao", label: "DAO" },
                      { value: "infrastructure", label: "Infrastructure" },
                      { value: "metaverse", label: "Metaverse" },
                      { value: "defi", label: "DeFi" },
                      { value: "nftfi", label: "NFTfi" },
                      { value: "unknown", label: "Unknown" },
                    ].map((d, index) => ({
                      value: d.value,
                      label: (
                        <div
                          style={{
                            borderBottom:
                              index === 3 ? "none" : "1px solid #323232",
                          }}
                        >
                          {d.label}
                        </div>
                      ),
                    }))}
                    onChange={(newValue) => {
                      console.log("newValue: ", newValue);
                      this.setState({ listCategorySelected: newValue });
                    }}
                    placeholder="Category"
                    maxTagCount="responsive"
                  />
                </div>
                <div style={styles.rightHeader}>
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#6c41eb",
                      },
                    }}
                  >
                    <Radio.Group
                      defaultValue="1h"
                      buttonStyle="solid"
                      size="small"
                      onChange={onChangeInterval}
                    >
                      <Radio.Button
                        style={styles.interval(intervalSelected, "1h")}
                        value="1h"
                      >
                        1h
                      </Radio.Button>
                      <Radio.Button
                        style={styles.interval(intervalSelected, "1d")}
                        value="1d"
                      >
                        1d
                      </Radio.Button>
                      <Radio.Button
                        style={styles.interval(intervalSelected, "1w")}
                        value="1w"
                      >
                        1w
                      </Radio.Button>
                      <Radio.Button
                        style={styles.interval(intervalSelected, "1m")}
                        value="1m"
                      >
                        1m
                      </Radio.Button>
                    </Radio.Group>
                  </ConfigProvider>
                </div>
              </div>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#6c41eb",
                    borderRadius: "0px",
                    border: "none",
                  },
                }}
              >
                <Table
                  pagination={
                    dataTable.length > 25
                      ? {
                          position: ["none", "bottomCenter"],
                          pageSize: 25,
                        }
                      : false
                  }
                  columns={columns}
                  rowClassName={"rowBackgroundColor"}
                  dataSource={dataTable}
                  size="small"
                  onChange={onChangeTable}
                />
              </ConfigProvider>
            </div>
            <div style={styles.tableFooter}>
              ML-based Web3 analytic platform 👾 via React
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  body: {
    background: "#0c0c0c",
    display: "flex",
    justifyContent: "center",
    height: "200vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "200vh",
  },
  darkThemeContainer: {
    display: "flex",
    alignItems: "center",
    height: "24px",
    padding: "5px",
  },
  darkThemeText: {
    color: "#6c41eb",
    fontWeight: "bold",
    marginLeft: "15px",
    width: "100px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "7px 16px",
    background: "#161616",
    position: "sticky",
    top: 0,
    zIndex: 999,
    borderBottom: "1px solid #323232",
  },
  headerText: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    marginRight: "10px",
  },
  interval: (interval, value) => ({
    background: "#161616",
    color: interval === value ? "#6c41eb" : "#fff",
  }),
  loginArea: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginContainer: {
    display: "flex",
    width: "50%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  loginBtn: {
    background: "#6c41eb",
    border: "1px solid #6c41eb",
    borderRadius: "10px",
    color: "white",
    width: "80px",
  },
  logo: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  searchBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  searchInput: {
    width: "100%",
    background: "#312f3a",
    color: "white",
    border: "none",
    marginRight: "5px",
    marginLeft: "5px",
  },
  searchIcon: (isFocus) => ({
    color: isFocus ? "#6c41eb" : "grey",
    paddingLeft: "8px",
    fontSize: "12px",
    margin: 0,
  }),
  searchContainer: (isFocus) => ({
    border: isFocus ? "1px solid #6c41eb" : "none",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#312f3a",
    transition: "0.4s",
    width: isFocus ? "480px" : "290px",
    boxShadow: isFocus ? "0 0 0 9999px #000000b0" : "none",
    height: "32px",
  }),
  selectTime: (selectedTime) => ({
    width: selectedTime === "allTime" ? 76 : 60,
    backgroundColor: "#161616",
    fontSize: 14,
    padding: 0,
  }),
  tableContainer: {
    display: "flex",
    width: "55%",
    height: "100%",
    background: "#0c0c0c",
    flexDirection: "column",
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    marginTop: "8px",
    marginBottom: "8px",
  },
  tabItem: {
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
    marginRight: "14px",
    minWidth: "86px",
  },
  table: {
    background: "#161616",
    // height: "100vh",
    border: "1px solid #323232",
    borderRadius: "16px",
  },
  tableHeader: {
    height: "50px",
    display: "flex",
    width: "970px",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 16px",
    borderBottom: "1px solid #323232",
  },
  tableFooter: {
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "0 16px",
    marginTop: "50px",
    paddingTop: "25px",
    borderTop: "1px solid #323232",
    color: "#fff",
    fontSize: "12px",
  },
  leftHeader: {
    display: "flex",
    flexDirection: "row",
    width: "830px",
    alignItems: "center",
    background: "#161616",
  },
  rightHeader: {
    display: "flex",
    width: "140px",
    flexDirection: "row",
    alignItems: "center",
    background: "#161616",
  },
};
