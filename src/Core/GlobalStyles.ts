import { transparentize } from "polished";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;    
    }

    body{
        font-family: "Lato", sans-serif;
        background-color: #F3F8FA;
        color: #274060; 
    }

    .confirmOverlay{
            background-color: ${transparentize(0.2, '#274060')};
    }
    
        .confirmOverlay{
            background-color: ${transparentize(0.2, '#F3F8FA')};
    }


    `