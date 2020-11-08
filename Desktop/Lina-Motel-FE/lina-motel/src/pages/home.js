import React from 'react';
import { HomeMenu } from '../components/home-menu';
import dashboard1 from '../images/dashboard-1.jpg';
import dashboard2 from '../images/dashboard-2.jpg';
import { Typography, Divider, Image } from 'antd';
export const Home = () => {
  return (
    <div>
      <HomeMenu />
      <div>
        <Divider orientation="left"><Typography.Title>Introduction</Typography.Title></Divider>
        <div class="flex m-4">
          <div class="w-3/5 p-2">
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
          <div class="w-2/5 p-2 text-center">
            <Image
              src={dashboard1}
            />
          </div>
        </div>

        <Divider orientation="center"><Typography.Title>Our Service</Typography.Title></Divider>
        <div class="flex m-4 ">
          <div class="w-2/5 p-2 text-center">
            <Image
              src={dashboard2}
            />
          </div>
          <div class="w-3/5 p-2">
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

        <Divider orientation="right"><Typography.Title>More</Typography.Title></Divider>
        <div class="flex m-4 ">
          <div class="w-2/5 p-2">
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
          <div class="w-3/5 p-2 text-center">
            <Image
              src={dashboard2}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
