import { transparentize } from "polished";
import styled from "styled-components";

export const WrapperProgressBar = styled.div`
    width: 100%;
    height: 24px;
    color: #fff;
    background-color: ${transparentize(0.85, '#244060')};
    position: relative;
`
/* export const PERCENTAGE ={
    value: number,
} */

export const FirstBar = styled.div<{
    percentage: number
    theme: 'primary' | 'secondary'
}>`

    font-size: 14px;
    width: ${p => p.percentage}%;
`