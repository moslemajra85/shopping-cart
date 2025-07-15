import React, { useState } from 'react'

const Test = () => {

    const [isVisible, setIsVisible] = useState(true)

    const handleClick = () => {


        setIsVisible(false)

        setTimeout(() => {

            setIsVisible(true)
        }, 3000)

    }
    return (
        <div>

            {

                isVisible ? <h1>
                    💕
                </h1> :
                    <div>
                        <h1>Moslem Is The greatest man ever walked on the Earth!</h1>
                    </div>
            }




            <button onClick={handleClick}>action</button>
        </div>
    )
}

export default Test