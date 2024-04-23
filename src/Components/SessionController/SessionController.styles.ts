import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 12px;

    border: 1px solid #c4c4c4;
    color: #274060;
`
export const Image = styled.img`
    height: 47px;
    width: 47px;
`

export const Name = styled.h2`
    width: 100%;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    text-align: center;
`

export const Description = styled.span`
    font-size: 12px;
`





