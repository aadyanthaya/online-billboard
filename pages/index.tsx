import React from "react"
import { GetStaticProps } from "next"
import Billboard, { BillBoardProps } from "../components/Billboard"
import prisma from '../lib/prisma'
import Form from "../components/Form"
import { Typography, Layout, theme, Input } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: 'rgb(41 149 68)',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  fontSize: 50,
  backgroundColor:'skyblue'
};

export const getStaticProps: GetStaticProps = async () => {
  let billBoard = null;
  try {
    billBoard = await prisma.billBoardPost.findFirst({
      include: {
        author: {
          select: { name: true, email: true },
        },
      },
      where: {
        status: {
          equals: 2
        }
      },
      orderBy: [
        {
          amount: 'desc'
        }
      ],
      take: 1
    });
  } catch (e) {

  }
  
  return { 
    props: { billBoard: billBoard ? billBoard : {} }, 
    revalidate: 10 
  }
}

type Props = {
  billBoard: BillBoardProps
}

const Blog: React.FC<Props> = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header style={headerStyle}>
       Internet Billboard
      </Header>

      <Content style={{ padding: '0 50px' ,width:'1440px',backgroundColor:'skyblue'}}>
        <Billboard data={props.billBoard} />
        <Form />
        <div id="payment_area"></div>
      </Content>

      <Footer style={{ textAlign: 'center' ,backgroundColor:'skyBlue' }}> ©2023 Created by Aishwarya Adyanthaya</Footer>
    </Layout>
  )
}

export default Blog
