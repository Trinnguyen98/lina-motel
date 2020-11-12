import React from 'react';
import { HomeMenu } from '../components/home-menu';
import dashboard1 from '../images/dashboard-1.jpg';
import dashboard2 from '../images/dashboard-2.jpg';
import { Typography, Divider, Image, Carousel, Row, Col } from 'antd';
export const Home = () => {
  return (
    <div class="max-h-full min-h-0">
      <HomeMenu />
      <div class="m-10">
        <Divider orientation="left"><Typography.Title class="font-bold font-mono text-4xl font-mono">Introduction</Typography.Title></Divider>
        <Carousel autoplay class="h-80 w-full">
          <div class="h-80 bg-cover w-full bg-top bg-no-repeat flex">
            <h3 style={contentStyle}>1</h3>
          </div>
          <div class="h-80 bg-cover w-full bg-top bg-no-repeat flex">
            <h3 style={contentStyle}>2</h3>
          </div>
          <div class="h-80 bg-cover w-full bg-top bg-no-repeat flex">
            <h3 style={contentStyle}>3</h3>
          </div>
          <div class="h-80 bg-cover w-full bg-top bg-no-repeat flex">
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <div class="font-mono xl:flex lg:flex">
          <div class="lg:w3/5 xl:w-3/5 lg:w-3/5 md:w-full sm:w-full p-2">
            <Typography.Paragraph >
              Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
              Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
              a design language for background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team.
    </Typography.Paragraph>

            <Typography.Paragraph>
              Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
              Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
              a design language for background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team.
    </Typography.Paragraph></div>
          <div class="p-2 xl:2/5 lg:w-2/5 md:w-full sm:w-full">
            <Image
              src={dashboard1}
            />
          </div>
        </div>

        <Divider orientation="center"><Typography.Title class="font-bold font-mono text-4xl font-mono">Our Service</Typography.Title></Divider>
        <div class="font-mono xl:flex lg:flex">
          <div class="p-2 xl:2/5 lg:w-2/5 md:w-full sm:w-full">
            <Image
              src={dashboard2}
            />
          </div>
          <div class="lg:w3/5 xl:w-3/5 lg:w-3/5 md:w-full sm:w-full p-2">
            <Typography.Paragraph>
              Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
              Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
              a design language for background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team.
  </Typography.Paragraph>

            <Typography.Paragraph>
              Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
              Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
              a design language for background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team.
  </Typography.Paragraph></div>
        </div>

        <Divider orientation="right"><Typography.Title class="font-bold font-mono text-4xl font-mono">More</Typography.Title></Divider>
        <div class="font-mono xl:flex lg:flex ">
          <div class="lg:w3/5 xl:w-3/5 lg:w-3/5 md:w-full sm:w-full p-2">
            <Typography.Paragraph>
              Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
              Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
              a design language for background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team.
  </Typography.Paragraph>

            <Typography.Paragraph>
              Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
              Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
              a design language for background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team. Ant Design, a design
              language for background applications, is refined by Ant UED Team.
  </Typography.Paragraph></div>
          <div class="p-2 xl:2/5 lg:w-2/5 md:w-full sm:w-full">
            <Image
              src={dashboard2}
            />
          </div>
        </div>
      </div>
      <div class="h-100 w-full bg-gray-800">
        <Row gutter={[16, 24]} >
          <Col className="gutter-row" span={6}>
            <div style={style}><h3 class="text-white">Motel</h3></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}><h3 class="text-white">Tour</h3></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}><h3 class="text-white">Restaurant</h3></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}><h3 class="text-white">Others</h3></div>
          </Col>
        </Row>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}><h3 class="text-white">fb</h3></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}><h3 class="text-white">zalo</h3></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}><h3 class="text-white">SDT</h3></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

const contentStyle = {
  height: '24rem',
  color: '#fff',
  lineHeight: '24rem',
  textAlign: 'center',
  background: '#364d79',
  backgroundImage: `url(${dashboard1})`
};
const style = { padding: '8px 0' };
