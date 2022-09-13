import React, { useState } from "react";
import PropTypes from "prop-types"

const Card = ({ language }) => {
    const [votes, setVotes] = useState(0)
    const handleClick = () => {
        setVotes((prev) => prev + 1)
    }
    return (
        <div className="card">
            {language}
            <div className="controls">
                <button onClick={handleClick}>+</button>
                <p>{votes}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    language: PropTypes.string
}

export default Card