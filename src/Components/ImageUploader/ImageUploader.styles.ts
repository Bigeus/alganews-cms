import styled from "styled-components";
import { Wrapper as Button } from "../Button/Button.styles";

export const Wrapper = styled.div`
    
`

export const Label = styled.label`
    background-color: #09f;
    color: #fff;

    padding: 24px;

    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 12px;
`

export const ImagePreview = styled.div<{ preview: string }>`
    height: 100%;
    background-image: url(${p => p.preview});
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImagePreviewWrapper = styled.div`
    background-color: #274060;
    height: 240px;

    ${Button}{
        display: none;
    }

    &:hover{
        ${ImagePreview}::after {
      content: '';
      width: 100%;
      height: 240px;
      background-color: rgba(39, 64, 96, 0.7);
    }

    ${Button} {
      width: 203px;
      height: 56px;
      display: block;
      position: absolute;
      background-color: #FFFFFF;
      color: #274060;
      border-color: transparent;
      padding: 16px;
      font-family: "Lato", serif;
      font-size: 18px;
      justify-content: center;
      align-items: center;
    }
    }

`

export const ContentLabel = styled.div`
display: flex;
align-self: center;
justify-content: center;
flex-direction: row;
`

export const Input = styled.input`
    display: none;
`
