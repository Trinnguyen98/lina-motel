import React from 'react'
import { Layout} from 'antd';
import background from '../images/dashboard-1.jpg';

export const HomeMenu = () => {
  return(
    <div class="bg-top bg-no-repeat h-full" style={{backgroundColor: "#000", backgroundImage: `url(${background})`,
    }}>
    </div>
  )
}