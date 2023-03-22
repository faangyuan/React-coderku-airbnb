import React, { memo, useState } from 'react'
import { HeaderWrapper } from './styled'
import Button from '@mui/material/Button';
import { entrieList } from '@/assets/data'
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import { useNavigate } from 'react-router-dom';

const EntrieHeader = memo(() => {
  const [selectItems, setSelectItems] = useState([])
  const navigate = useNavigate()
  const BtnClickFn = (item) => {
    let newItems = [...selectItems]
    if (!selectItems.includes(item)) {
      newItems.push(item)
    } else {
      newItems = newItems.filter(obj => obj !== item)
    }
    setSelectItems(newItems)
  }
  const navigateHomeFn = () => {
    navigate('/home')
  }
  return (
    <HeaderWrapper>
      <div className="left">
        {
        entrieList.map(item => (
          <Button key={item} variant={selectItems.includes(item)? 'contained' : 'outlined'} color="error"
            size='small' style={{ marginRight: '15px' }}
            onClick={e => BtnClickFn(item)}
          >
            {item}
          </Button>
        ))
      }
      </div>
      <div className="right" onClick={navigateHomeFn}>
        <div className="text">返回首页</div>
        <IconArrowRight style={{ fontSize: '40px' }} />
      </div>
    </HeaderWrapper>
  )
})

export default EntrieHeader