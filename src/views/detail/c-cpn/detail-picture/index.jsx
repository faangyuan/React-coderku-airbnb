import BrowseProcture from '@/base-ui/browse-pricture'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { PrictureWrapper } from './style'

const DetailPicture = memo((props) => {
  const { pictureUrls = [] } = props
  const [showBrowse, setShowBrowse] = useState(false)

  const closeClickFn = () => {
    setShowBrowse(false)
  }
  
  return (
    <PrictureWrapper>
      <div className="detailBox">
        <div className="left picture">
          <div className="item">
            <img src={pictureUrls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right picture">
          <div className="right-list">
             {
            pictureUrls.slice(1, 5)?.map(item => (
              <div className='item' key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            ))
           }
         </div>
        </div>

        {showBrowse && <BrowseProcture prictureUrls={pictureUrls} closeClickFn={closeClickFn} />}
        <button className='btn-brw' onClick={ e => setShowBrowse(true) }>查看图片</button>
      </div>
    </PrictureWrapper>
  )
})

DetailPicture.propTypes = {
  pictureUrls: PropTypes.array
}

export default DetailPicture