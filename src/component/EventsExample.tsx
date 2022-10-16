import React, {ChangeEvent, DragEvent, FC, useRef, useState} from 'react';

export const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onClickHandler = () => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = () => {
        setIsDrag(false)
        console.log('Drag')
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        console.log('Drop')
    }

    const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    };

    return (
        <div>
            <div>{value}</div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                <input value={value}
                       onChange={onChangeHandler}
                       type="text"
                       placeholder={'Управляемый'}/>

                <input type="text"
                       ref={inputRef}
                       placeholder={'Неуправляемый'}/>

                <button onClick={onClickHandler}>КНОПКА</button>

                <div draggable // перемещаемый элемент
                     onDrag={dragHandler} //сработает если элемент перемещаешь
                     style={{height: 100, width: 100, background: 'green'}}>

                </div>

                <div
                    onDrop={dropHandler} // сработает когда отпустишь перетаскиваемый элемент в области этого
                    onDragLeave={leaveHandler} // сработает когда вышли за переделы элемента
                    onDragOver={dragWithPreventHandler} // сработает когда находимся внутри элемента
                    style={{
                        height: 100,
                        width: 100,
                        background: isDrag ? 'blue' : 'green',
                        marginTop: 20
                    }}>

                </div>
            </div>
        </div>
    )
}


