import { Container, TextBold } from './styles'

import { ReactComponent as Clipboard } from '../../assets/Clipboard.svg'

export function PlaceHolder() {

  return (
    <Container>
        <Clipboard />
        <TextBold>Você ainda não tem tarefas cadastradas</TextBold>
        <div>Crie tarefas e organize seus itens a fazer</div>
    </Container>
  )
}
