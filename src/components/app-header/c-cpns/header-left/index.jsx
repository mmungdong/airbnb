import React, { memo } from 'react'

import { LeftWrapper } from './style'
import Icon_Logo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <Icon_Logo />
    </LeftWrapper>
  )
})

export default HeaderLeft