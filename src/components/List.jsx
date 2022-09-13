import React from "react"
import Card from "./Card"

const List = ({ languagesList }) => {
    return (
        <div className="container">
            {languagesList.map((language, index) => {
                return <Card language={language} key={`card ${index}`} />
            })}
        </div>
    )
}

export default List