import React from 'react'
import { Container, Item, Heading, Pane } from './styles'
import { Children } from '../../helpers/types'
import Button from '../StylishButton'

type CompoundComponent = {
  children?: Children | any
}

type Text = {
  children: string
}

interface IButton extends CompoundComponent {
  dispatch: () => void
}

interface NamesContainer extends React.FC {
  children?: Children
  Container: React.FC<CompoundComponent>
  Title: React.FC<Text>
  Panes: React.FC<CompoundComponent>
  Name: React.FC<Text>
  GenerateButton: React.FC<IButton>
}

const Names: NamesContainer = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>
}

Names.Container = function NamesContainer({ children }) {
  return <Container>{children}</Container>
}

Names.Title = function NamesTitle({ children }) {
  return <Heading>{children}</Heading>
}

Names.Panes = function NamesPane({ children }) {
  return <Pane>{children}</Pane>
}

Names.Name = function NameTitle({ children }) {
  return <h3>{children}</h3>
}

Names.GenerateButton = function NamesButton({ dispatch, ...restProps }) {
  return <Button text={'Generate Names'} onClick={dispatch} />
}

export default Names
