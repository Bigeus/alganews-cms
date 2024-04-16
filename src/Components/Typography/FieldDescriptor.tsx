import styled from "styled-components";

export interface FieldDescriptorProps {
    head: string
    children: React.ReactNode
}

export default function FieldDescriptor({ head, children }: FieldDescriptorProps) {
    return <Component>
        <span className="head"> {head}:</span>
        <span className="description">{children}</span>
    </Component>
}

const Component = styled.span`
 display: flex;
 flex-direction: column;
 gap: 4px;
 color: #274060;
 font-size: 14px;

    .head{
        font-weight: bold;
        font-size: 12px;
    }
`