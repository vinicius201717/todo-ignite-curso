import { useState } from 'react';

import style from './Task.module.css';
import { Trash, Check } from 'phosphor-react';

export interface InterfaceTask {
    id: number;
    task: string;
}

interface TaskProps {
    task: InterfaceTask;
    arrayTask: InterfaceTask[];
    setArrayTask: React.Dispatch<React.SetStateAction<InterfaceTask[]>>;
    setDone: React.Dispatch<React.SetStateAction<number>>;
}

export function Task( { task, arrayTask, setArrayTask, setDone }: TaskProps ) {

    const [isSelected, setIsSelect] = useState(false);

    function handleTaskRemove(event: React.MouseEvent<SVGSVGElement>) {
        const svgElement = event.target as SVGSVGElement;
        const taskId = parseInt(svgElement.id);
        const newArrayTask = arrayTask.filter(t => t.id !== taskId);
        setArrayTask(newArrayTask);
    }

    function handleCheckTaskDone() {
        if(isSelected){
            setDone(current => current - 1);
            setIsSelect(false);
        } else {
            setDone(current => current + 1);
            setIsSelect(true);
        }
  
    }

    return (
        <article className={style.article}>
            <Check 
                onClick={handleCheckTaskDone}
                className={`${style.svgNoSelect} ${isSelected ? style.svgSelect : ''} `} 
            />
            <div className={style.text}>
                <p className={`${style.articleParagraphDefault} ${isSelected ? style.articleParagraphDone : ''}`}>{task.task}</p>
            </div>
            <Trash 
                id={task.id.toString()} 
                onClick={handleTaskRemove} 
                className={style.trash} 
            />
        </article>
    )
}