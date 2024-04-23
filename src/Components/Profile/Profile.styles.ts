import styled from "styled-components";

export const Wrapper = styled.a`
  display: flex;
  gap: 24px;

  border: 1px solid #ccc;
  padding: 16px;

  cursor: pointer;

  transition: box-shadow .15s ease;

  text-decoration: none;
  color: #274060;
  
  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0 0 5px #09f;
    border-color: #09f;
  }
`

export const imgContainer = styled.img`
    height: 48px;
    width: 48px;
    object-fit: cover;
`

export const textContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;

    gap: 8px;
    color: #274060;

    .name{
        font-size: 18px;
    }

    .description{
        font-size: 12px;
    }
`