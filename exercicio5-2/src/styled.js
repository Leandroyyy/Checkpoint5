import styled from "styled-components"

export const Html = styled.html`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const Titulo = styled.header`

    background-image:linear-gradient(to right,#4682B4,#00FFFF);
    margin-bottom:1rem;
    width:70vw;
    height:12vh;
    padding:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:20px;
    opacity:.8;

    h1{
        color:#FFFAFA;
        opacity:1;
    }
    p{
        color:#FFFAFA;
        opacity:1;
    }
`

export const Sabores = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;

    h2{
        color:#87CEFA;
    }

    ul{
        list-style:none;
    }

    li{
        color:#6D70C6;
        
    }

`

export const Borda = styled.div`

    background:#191970;
    border-style:double;
    border-color:#B0E0E6;
    border-width:1rem;
    border-radius:2rem;

    display:flex;
    flex-direction:column;
    align-items:center;

    width:50vw;
    height:50vh;


`

export const Endereco = styled.footer`

    display:flex;
    justify-content:center;
    position: absolute;
    bottom:0;
    width:100vw;

    background-image:linear-gradient(to right,#00FFFF,#4682B4);

    p{
        color:#fff;
    }

`

export const Alinhar = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`