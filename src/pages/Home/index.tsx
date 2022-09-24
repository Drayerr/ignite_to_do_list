import { Header } from '../../components/Header'
import { TasksHolder } from '../../components/TasksHolder'

import { Container } from './styles'

export function Home() {

  return (
    <Container>
      <Header />
      <TasksHolder />
    </Container>
  )
}
