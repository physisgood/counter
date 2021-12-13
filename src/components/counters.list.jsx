import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name:"Ненужная вещь"},
        {id: 1, value: 0, name:"Ложка"},
        {id: 3, value: 0, name:"Вилка"},
        {id: 4, value: 0, name:"Тарелка"},
        {id: 5, value: 0, name:"Набор минималиста"},
    ]
    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCountersList = counters.filter(counter => counter.id !== id)
        setCounters(newCountersList)
    }
    const handleReset = () => {
        setCounters(initialState)
        console.log('handle Reset')
    }

    const handleIncrement = (id) => {
        counters.forEach((count) =>
            count.id === id ? count.value += 1 : count.value
        )
        const newCountersList = counters.filter(counter => counter.id > -1)
        setCounters(newCountersList)
    }

    const handleDecrement = (id) => {
        counters.forEach((count) =>
            count.id === id ? count.value -= 1 : count.value
        )
        const newCountersList = counters.filter(counter => counter.id > -1)
        setCounters(newCountersList)
    }

    return (<>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleReset}
            >
                Сброс
            </button>
        </>
    )
}

export default CountersList