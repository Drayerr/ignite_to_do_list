import { AddButton } from '../AddButton'
import { Container, Input } from './styles'

export function InputArea() {

  return (
    <Container>
        <Input placeholder='Adicione uma nova tarefa'/>
        <AddButton />
    </Container>
  )
}
