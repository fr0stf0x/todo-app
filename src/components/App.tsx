import { AppWrapper, AppFrame } from './app.styled'

import TodoInput from './TodoInput'
import TodoList from './TodoList'
import Filter from './Filter'
import Greeting from './Greeting'
import { Provider } from 'jotai'
import Background from './Background'


// TODO 1.responsive
// TODO 2.toggle all

function App() {

  return (
    <Provider>
      <AppWrapper>
        <Background />
        <AppFrame>
          <Greeting />
          <TodoInput />
          <Filter />
          <TodoList />
        </AppFrame>
      </AppWrapper>
    </Provider>
  )
}

export default App
