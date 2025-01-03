import React from 'react'

export default function Form({value, setValue, handleSubmit}) {

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        /**
         * form = "flex pt-2"
         * - flex: "display: flex;" => 이 요소를 Flexbox 컨테이너로 설정
         * - pt-2: "padding-top: 0.5rem" => 요소의 위쪽 패딩(padding-top)을 설정
         *
         * input1 = "w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
         * - w-full: "width: 100%;" => 입력 필드의 너비를 부모 컨테이너의 100%로 설정
         * - px-3 => 입력 필드의 좌우 패딩(padding-left 및 padding-right)을 설정
         * - py-2 => 입력 필드의 상하 패딩(padding-top 및 padding-bottom)을 설정
         * - mr-4: "margin-right: 1rem" => 입력 필드의 오른쪽 외부 여백(margin-right)을 설정
         * - border: "border-width: 1px;" => 입력 필드에 기본 테두리를 추가
         * - rounded: "border-radius: 0.25rem" => 테두리를 둥글게 설정
         * - shadow => 입력 필드에 기본 그림자를 추가
         *
         * input2 = "p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
         * - border-2: "border-width: 2px;" => 테두리 두께를 2px로 설정
         * - border-blue-400 => 테두리 색상을 blue-400으로 설정
         * - hover:text-white => 사용자가 마우스를 올렸을 때(hover 상태) 텍스트 색상을 흰색으로 변경
         */
        <div>
            <form className="flex pt-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="value"
                    className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                    value={value}
                    placeholder="Enter to-do task."
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                    value="ENTER"
                />
            </form>
        </div>
    )
}
