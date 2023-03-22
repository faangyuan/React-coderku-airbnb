import React, { memo, useRef, useState } from 'react'
import ItemWrapper from './style'
import { Rate, Carousel} from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const HouseItem = memo((props) => {
  const { itemData, layoutSize, itemCLick } = props
  const [ selectIndex, setSelectIndex] = useState(0)
  const slderRef = useRef()

  const btnClickFn = (isLeft = true, event) => {
    isLeft ? slderRef.current.prev() : slderRef.current.next()
    event.stopPropagation()
  }
  
  const onChange = (currentSlide) => {
    setSelectIndex(currentSlide)
  }

  const itemHouseClickFn = () => {
    // 只在监听页面 进行跳转
    if (itemCLick) itemCLick(itemData)
  }

  return (
    <ItemWrapper desColor={itemData.verify_info.text_color || '#39576a'} layoutSize={layoutSize || "25%"} onClick={itemHouseClickFn}>
      <div className="inner">
        {
          itemData.picture_urls ? 
            <div className="swiper">
              {/* 轮播图控制按钮 */}
              <div className="left btn" onClick={e => btnClickFn(true, e)}>
                <IconArrowLeft />
              </div>
              <div className="right btn" onClick={e => btnClickFn(false, e)}>
                  <IconArrowRight />
              </div>
              {/* 轮播图组件 */}
              <Carousel dots={false} ref={slderRef} afterChange={onChange}>
                {
                  itemData?.picture_urls?.map(item => (
                    <div className="cover" key={item}>
                    <img src={item} alt="" />
                    </div>
                  ))
                }
             </Carousel>
              {/* 轮播图指示器 */}
              <div className='pointer'>
                <Indicator selectIndex={selectIndex}>
                  {
                    itemData?.picture_urls?.map((item, index) => (
                      <div key={item} className="dot-item">
                        <span className={classNames('dot',{ active: index === selectIndex})} ></span>
                      </div>
                    ))
                  }
                </Indicator>
              </div>
            </div> :
            <div className="cover">
              <img src={itemData.picture_url} alt="" />
            </div> 
       }
        <div className="describe">
          <span>{ itemData.verify_info.messages}</span>
        </div>
        <p className='title'>{ itemData.name }</p>
        <p className="price">{itemData.price_format + '/晚'}</p>
        <Rate disabled value={itemData.star_rating} style={{ fontSize: '14px', color: itemData.star_rating_color }} />
        <span className="message"> {itemData?.bottom_info?.content}</span>
      </div>
    </ItemWrapper>
  )
})

export default HouseItem