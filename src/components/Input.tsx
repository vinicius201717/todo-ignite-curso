import { FormEvent, ChangeEvent, useState } from 'react';
import style from './Input.module.css';
import { InterfaceTask } from './Task';

import { PlusCircle } from 'phosphor-react'


interface InputProps {
    setArrayTask: React.Dispatch<React.SetStateAction<InterfaceTask[]>>;
    arrayTask: InterfaceTask[]
}

export function Input({ setArrayTask, arrayTask }: InputProps) {

    const [task, setTask] = useState('');

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setTask(event.target.value);
    }

    function handleClickCreateTask(event: FormEvent) {
        event.preventDefault();
        const newTaskToAdd: InterfaceTask[] = arrayTask.concat({id: Date.now(), task: task})
        setArrayTask(newTaskToAdd)
    }

    return (
        <form onSubmit={handleClickCreateTask} className={style.form}>
            <input type="text" placeholder='Digite uma nova tarefa' onChange={handleChangeInput} required />
            <button type='submit'>
                <span>Criar</span> <PlusCircle />
            </button>
        </form>
    )
}