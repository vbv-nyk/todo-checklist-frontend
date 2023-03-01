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
    const eyeRadius = 25;
    const mouthArc = d3.arc()
        .innerRadius(90)
        .outerRadius(100)
        .startAngle(2)
        .endAngle(4.2);

    return (
        <>
            <svg width="300" height="300">
                <g transform={`translate(${centerX},${centerY})`}>
                    <circle
                        r={radius}
                        fill="yellow"
                        stroke="black"
                        strokeWidth={10}
                    />
                    <circle
                        cx={- eyeOffsetX}
                        cy={- eyeOffsetY}
                        r={eyeRadius}
                        strokeWidth={10}
                    />
                    <circle
                        cx={eyeOffsetX}
                        cy={-eyeOffsetY}
                        r={eyeRadius}
                        strokeWidth={10}
                    />
                    <path d={mouthArc()} />
                </g>
            </svg>
        </>
    )
}