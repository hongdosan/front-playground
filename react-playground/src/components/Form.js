import React from 'react'

export default function Form({value, setValue, handleSubmit}) {

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <form style={{display: 'flex'}} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="value"
                    value={value}
                    placeholder="Enter to-do task."
                    style={{flex: "10", padding: "5px"}}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="ENTER"
                    className="btnStyle"
                    style={{flex: "1"}}
                />
            </form>
        </div>
    )
}
