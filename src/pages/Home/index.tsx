import { Header } from '../../components/Header'
import { InputArea } from '../../components/InputArea'
import { TasksHolder } from '../../components/TasksHolder'

import { Container } from './styles'

export function Home() {

  return (
    <Container>
      <Header />
      <InputArea />
      <TasksHolder />
    </Container>
  )
}
