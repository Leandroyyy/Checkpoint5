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
    margin:4rem;

    h2{
        color:#87CEFA;
        margin-top:0.5rem;
        padding:1rem;
        border-style:outset;
        border-color:#B0E0E6;
        border-radius:1rem;
    }

    ul{
        list-style:none;
    }

    li{
        color:#40E0D0;
        font-size:1.2rem;
        padding:0.1rem;
    }

`

export const Borda = styled.div`

    background:#191970;
    border-style:double;
    border-color:#B0E0E6;
    border-width:1rem;
    border-radius:2rem;

    display:flex;
    align-items:center;
    justify-content:center;

    width:50vw;
    height:50vh;

    overflow-y:scroll;
    overflow-x:hidden;

    &::-webkit-scrollbar {
    width: 6px;               /* width of the entire scrollbar */
  }
    &::-webkit-scrollbar-track {
    background: #191970;  
    border-radius:1rem;      /* color of the tracking area */
  }

    &::-webkit-scrollbar-thumb {
    background-color: #87CEFA;    /* color of the scroll thumb */
    border-radius: 16px;       /* roundness of the scroll thumb */
    border: 3px solid #87CEFA;  /* creates padding around scroll thumb */
  }


`

export const Endereco = styled.footer`

    display:flex;
    justify-content:center;
    position: absolute;
    bottom:0;
    width:100vw;
    height:5vh;
    padding:0.7rem;

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

export const Separar = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding:5rem;
    }

`
