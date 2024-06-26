import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 2000);

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run once on mount

    return (
        <>
            Count is {count}
        </>
    )
}
