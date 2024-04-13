import React from "react";
import { TypeAnimation } from "react-type-animation"

const TypeAnim = () => {
    return (
        <TypeAnimation
            sequence={[
                'Chat with your OWN AI',
                1000,
                'Build with OpenAI 🤖',
                2000,
                'Your Own Customized ChatGPT 💻',
                1500,
            ]}
            speed={50}
            style={{ fontSize: '60px', color:"white", display: "inline-block", textShadow: "1px 1px 20px #000"}}
            repeat={Infinity}
        />
    )
}

export default TypeAnim