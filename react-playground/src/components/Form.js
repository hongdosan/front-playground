import React from 'react'

export default function Form({value, setValue, handleSubmit}) {

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="value"
                    value={value}
                    placeholder="Enter to-do task."
                    onChange={handleChange}
                />
                <input type="submit" value="ENTER"/>
            </form>
        </div>
    )
}
