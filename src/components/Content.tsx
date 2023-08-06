import { useState, useEffect } from 'react';

import style from './Content.module.css';
import { Clipboard } from 'phosphor-react';
import { Task, InterfaceTask } from './Task';

interface ContentProps {
    arrayTask: InterfaceTask[];
    done: number;
    setArrayTask: React.Dispatch<React.SetStateAction<InterfaceTask[]>>
    setDone: React.Dispatch<React.SetStateAction<number>>
}

function renderTasksOnScreen(
        arrayTask: InterfaceTask[], 
        setArrayTask: React.Dispatch<React.SetStateAction<InterfaceTask[]>>, 
        setDone: React.Dispatch<React.SetStateAction<number>>
    ) {
    return arrayTask.map((task) => (
        <Task 
            key={task.id} 
            task={task} 
            arrayTask={arrayTask} 
            setArrayTask={setArrayTask}
            setDone={setDone}
        />
    ));
}

function renderHaventTask() {
    return (
        <>
            <Clipboard className={style.haventTaskIcon} size={56} />
            <h2 className={style.haventTaskTextH2}>Você ainda não tem tarefas cadastradas</h2>
            <h3 className={style.haventTaskTextH3}>Crie tarefas e organize seus itens a fazer</h3>
        </>
    );
}

export function Content({ arrayTask, setArrayTask, done, setDone }: ContentProps) {

    const [count, setCount] = useState(0);

    
    function handleUpdateCountTask() {
        setCount(arrayTask.length)
    }

    useEffect(() => {
        handleUpdateCountTask()
    }, [arrayTask])

    return (
        <main className={style.main}>
            <header className={style.header}>
                <p>Tarefas criadas  <span>{count}</span></p>
                <p>Concluídas <span>{done} de {count}</span></p>
            </header>
            <div className={style.contentWithTask}>
                {arrayTask.length > 0 ? renderTasksOnScreen(arrayTask, setArrayTask, setDone) : renderHaventTask()}
            </div>
        </main>
    );
}