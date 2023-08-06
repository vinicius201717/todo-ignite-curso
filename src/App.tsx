import './global.css';
import { useState } from 'react';

import { Header } from './components/Header';
import { Content } from './components/Content';
import { Input } from './components/Input';
import { InterfaceTask } from './components/Task';

function App() {

  const [ arrayTask, setArrayTask ] = useState<InterfaceTask[]>([]);
  const [done, setDone] = useState(0);

  return (
    <div>
      <Header />
      <Input setArrayTask={setArrayTask} arrayTask={arrayTask} />
      <Content arrayTask={arrayTask} setArrayTask={setArrayTask} done={done} setDone={setDone} />
    </div>
  )
}

export default App
