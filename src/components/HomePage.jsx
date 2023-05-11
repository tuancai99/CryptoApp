import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
// import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
// import Loader from "./Loader";

const { Title } = Typography;

// import Loader from "./Loader"; // phai import loader de load may dang file nhu v
const HomePage = () => {
  const { data, error, isLoading, isSuccess, isFetching } =
    useGetCryptosQuery();
  if (isFetching) return "Loading...";
  const globalStats = data.data.stats;

  // if (typeof data == "undefined") return "Loading...";
  // const globalStats = data?.data?.stats;
  console.log(data);

  return (
    <>
      <Title level={2} className="heading">
        {" "}
        Global Crypto status{" "}
      </Title>
      <Row>
        {/* that ra no chi co mot row thoi nhung ma co toi 6 cai column va khoang cach cua moi cai colum la 12
        dieu nay dan toi cacs colum phai xuong dong tai vi khong du cho de display het */}
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Cryto Currency"
            value={millify(globalStats.total)}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Market"
            value={millify(globalStats.totalMarkets)}
          />{" "}
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
