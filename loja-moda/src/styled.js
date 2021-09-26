import styled from "styled-components"

export const Html = styled.html`
    font-family:Verdana, Geneva, Tahoma, sans-serif;
`


export const Navegacao = styled.nav`
    
    ul{
        display:flex;
        align-items:center;
        justify-content:space-evenly;

        list-style:none;

        height:10vh;
        background-color:#000080;
        
      
    }

    li{

        &:hover{
            transform: scale(1.1);
            transition:0.5s
        }
    }

    a{
        text-decoration:none;
        color:#fff
    }


`

export const Inicio = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#87CEEB;

    h1{
        font-size:2rem;
        color:#fff;
        
    }
`
export const Card = styled.div`
    display:flex;
    align-items: center;

    span{
    padding:1rem
    }

    img{
        width:30vw;
        height:70vh;
    }

    p{
        font-size:2rem;
        color:#fff
    }
`
export const Itens = styled.div`
    display:flex;
    align-items:center;

    span{
    padding:1rem
    }

    img{
        width:14vw;
        height:30vh;
    }

    p{
        
        color:#fff
    }
`


export const Pe = styled.footer`

    display:flex;
    justify-content:center;
    
   
    bottom:0;
    width:100vw;
    height:5vh;
    padding:0.7rem;

    background-color:#000080;

    p{
        color:#fff;
    }

`