import React, { memo } from 'react'
import { AppHeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <AppHeaderWrapper>
      <div className='left'>left</div>
      <div className='center'>center</div>
      <div className='right'>right</div>
    </AppHeaderWrapper>
  )
})

export default AppHeader