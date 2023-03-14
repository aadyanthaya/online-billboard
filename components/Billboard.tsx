
import React from "react";
import { Typography } from 'antd';
import bg from './le.jpg'
import { wrap } from "module";

const contentStyle: React.CSSProperties = {
  backgroundImage: `url(${bg.src})`,
  height: '800px',
  color: '#fff',
  textAlign: 'center',
  backgroundSize: "cover",
  backgroundPositionY: "-300px"
};

export type BillBoardProps = {
  id: string;
  message: string;
  amount: string;
};

const Billboard: React.FC<{ data: BillBoardProps }> = ({ data }) => {
  return (
    <div style={contentStyle}>
      <Typography.Title style={{backgroundColor:"", color: "rgb(41 149 68)", height: '280px',width:'730px',overflow:'hidden', transform: "translate(320px, 200px)"}}>{data.message}</Typography.Title>
    </div>
  );
};

export default Billboard;
