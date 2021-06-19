import * as React from 'react'
import { SpinnerLogoWrapper, SpinnerLogoImage } from './styles'
import { SpinnerLogoProps } from './interfaces'
import { useSelector } from 'react-redux'
import { AppState } from '../../reducers'

const SpinnerLogo: React.FC<SpinnerLogoProps> = ({ isSpinning, logo }) => {
  const { isRotating } = useSelector<AppState, AppState['animationsState']>(
    (state) => state.animationsState
  )
  return (
    <SpinnerLogoWrapper>
      <SpinnerLogoImage isSpinning={isRotating} src={logo} />
    </SpinnerLogoWrapper>
  )
}

export default SpinnerLogo

/**
 * @Assumtion
 * if we are already passing the
 * {isSpinning} prop as true or false then the
 * spinner either rotates or stays still
 */
