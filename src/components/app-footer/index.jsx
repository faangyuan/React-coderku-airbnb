import React, { memo } from 'react'
import FooterWarpper from './styled'
import { footerList } from "@/assets/data"

const AppFooter = memo(() => {
  return (
    <FooterWarpper>
      <div className='footer'>
         <div className="list">
        <>
          {
            footerList?.map(item => (
              <div className='item' key={item.name}>
                <div className='title'>{item.name}</div>
                <>
                  {
                    item.list.map(item => (
                      <div className="li" key={item}>{ item }</div>
                    ))
                  }
                </>
              </div>
            ))
          }
       </>
      </div>
      <p>
       京ICP备16017121号 京ICP证 160773号 中国公安局标志 京公网安备 11010502032345号
      </p>
      <p>© 2023 Airbnb, Inc. All rights reserved.
       条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</p>
     </div>
    </FooterWarpper>
  )
})

export default AppFooter