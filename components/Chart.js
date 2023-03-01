import * as d3 from "d3";

export default function Chart() {
    return (
        <>
            <svg width="300" height="300">
                <circle
                    cx={300 / 2}
                    cy={300 / 2}
                    r="100"
                    fill="yellow"
                    stroke="black"
                    strokeWidth={10}
                >
                </circle>
                <circle
                    cx={250 / 2}
                    cy={250 / 2}
                    r="15"
                    strokeWidth={10}
                >

                </circle>
                <circle
                    cx={350 / 2}
                    cy={250 / 2}
                    r="15"
                    strokeWidth={10}
                >

                </circle>
            </svg>
        </>
    )
}