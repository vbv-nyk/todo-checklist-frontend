import * as d3 from "d3";

export default function Chart() {
    const height = 300;
    const width = 300;
    const centerX = width / 2;
    const centerY = height / 2;
    const strokeWidth = 10;
    const radius = height / 2 - strokeWidth / 2;
    const eyeOffsetX = 50;
    const eyeOffsetY = 50;
    return (
        <>
            <svg width="300" height="300">
                <circle
                    cx={centerX}
                    cy={centerY}
                    r={radius}
                    fill="yellow"
                    stroke="black"
                    strokeWidth={10}
                >
                </circle>
                <circle
                    cx={centerX - eyeOffsetX}
                    cy={centerY - eyeOffsetY}
                    r="25"
                    strokeWidth={10}
                >

                </circle>
                <circle
                    cx={centerX + eyeOffsetX}
                    cy={centerY - eyeOffsetY}
                    r="25"
                    strokeWidth={10}
                >

                </circle>
            </svg>
        </>
    )
}