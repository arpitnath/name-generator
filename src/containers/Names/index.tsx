import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadNames } from '../../actions/names.action'
import Name from '../../components/Names'
import { AppState } from '../../reducers'
import { Wrapper } from './styles'

type Props = {
  children?: React.ReactNode
  restProps?: any
}

const Conatainer: React.FC<Props> = ({ children, ...restProps }) => {
  const { names } = useSelector<AppState, AppState['randomNames']>(
    (state) => state.randomNames
  )

  const dispatch = useDispatch()

  const generateRandomNames = () => {
    dispatch(loadNames())
  }

  React.useEffect(() => {
    if (names.includes('Error')) {
      throw new Error('Data passed was empty ')
    }
  }, [names])

  return (
    <Wrapper>
      <Name.Title>{'Random Names'}</Name.Title>
      <Name.Container {...restProps}>
        {names.length > 0 ? (
          <>
            {names.map((name) => (
              <Name key={`${Math.random() * 6}${name}`}>
                <Name.Panes>
                  <Name.Name>{name}</Name.Name>
                </Name.Panes>
              </Name>
            ))}
          </>
        ) : (
          <>{'Click to Generate'}</>
        )}
      </Name.Container>
      <Name.GenerateButton dispatch={generateRandomNames} />
    </Wrapper>
  )
}

export default Conatainer
