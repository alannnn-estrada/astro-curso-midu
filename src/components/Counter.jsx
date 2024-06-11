import { useState } from 'preact/hooks';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div class="p-4 rounded-lg shadow-md">
            <p class="text-2xl font-bold">Count: {counter}</p>
            <button class="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md" onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    );
}