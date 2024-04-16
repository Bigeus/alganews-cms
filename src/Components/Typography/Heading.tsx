import styled from "styled-components"

export interface HeadingProps{
    level: 1 | 2 | 3
    children: React.ReactNode
}

const Heading1 = styled .h1`
    font-weight: 900;
    font-size: 36px
`
const Heading2 = styled .h2`
    font-weight: 900;
    font-size: 24px
`
const Heading3 = styled .h3`
    font-weight: 900;
    font-size: 18px
`

export default function Heading({ level, children }: HeadingProps){
  const Component = ({
    1: Heading1,
    2: Heading2,
    3: Heading3
  }[level])
  
  return <Component>
        { children }
    </Component>
}