import React from "react"
import languages from "../data/languages.json"
import Card from "./Card"

const List = () => {
    return (
        <div className="container">
            {languages.map((language) => {
                return <Card language={language} />
            })}
        </div>
    )
}

export default List