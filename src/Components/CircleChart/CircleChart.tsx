import { useEffect, useState } from 'react';
import * as CC from './CircleChart.styles';
import { off } from 'process';

export interface CircleChartProps {
    size: number
    progress: number
    caption?: string
    theme?: 'default' | 'primary' | 'undefined'
    strokeWidth?: number
}

export default function CircleChart(props: CircleChartProps) {

    const getThemeColor = () =>
        props.theme === 'primary' ? '#09f' : '#274060';

    const THEME = getThemeColor()
    const STROKE_WIDTH = props.strokeWidth || 8
    const STROKE_COLOR = THEME

    const CENTER = props.size / 2
    const RADIUS = props.size / 2 - STROKE_WIDTH / 2
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS

    const [offset, setOffset] = useState(CIRCUMFERENCE)

    useEffect(() => {
        const progressOffset = ((100 - props.progress) / 100) * CIRCUMFERENCE
        setOffset(progressOffset)
    }, [setOffset, CIRCUMFERENCE, props.progress, offset])

    return <CC.Wrapper>
        <CC.SvgWrapper style={{ width: props.size, height: props.size }}>
            <CC.Svg width={props.size} height={props.size}>
                <CC.CircleBG cy={CENTER} cx={CENTER} r={RADIUS}></CC.CircleBG>
                <CC.Circle
                    cy={CENTER}
                    cx={CENTER}
                    r={RADIUS}
                    stroke={STROKE_COLOR}
                    strokeWidth={STROKE_WIDTH}
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={offset}
                    fill='none'
                ></CC.Circle>
            </CC.Svg>
            <CC.Percentage color={STROKE_COLOR}>
                {props.progress}%
            </CC.Percentage>
        </CC.SvgWrapper>
        {
            props.caption &&
            <CC.Caption>{props.caption}</CC.Caption>
        }
    </CC.Wrapper>
}