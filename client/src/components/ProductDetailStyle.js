import styled from 'styled-components';

export const ProductWrapper = styled.div`
    display:flex;
    width:100%;
    max-width:1200px;
    margin-top:6rem;
    
    img{
        width:25%;
        object-fit:contain;
    }
    
    @media (max-width: 1024px) {
        width:80%;
    
        img{
            width:40%;
        }
      }

    @media (max-width: 768px) {
        align-items:center;
        flex-direction:column;
        width:100%;
    
        img{
            width:50%;
            object-fit:contain;
        }
    }
`

export const InfoDetailContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:75%;
    padding:0 2rem;
    
    h1{
        font-size:2rem;
        margin-bottom:0.5rem;
        margin-top:1rem;
    }
    
    h2{
        font-size:1rem;
        margin-bottom:2rem;
    }
    
    h3{
        font-size: 1.2rem;
        margin-bottom:1rem;
    }
    
    p{
        margin-bottom:2rem;
        width:70%;
        font-size:1.2rem;
        font-weight:light;
        line-height:1.5rem;
    }

    ul li{
        margin: 0.5rem 0;
    }

    h4{
        font-size:2rem;
        margin-top:2rem;
    }

    @media (max-width: 1024px) {
        width: 60%;
            p{
            width:100%;
             }
    }

    @media (max-width: 768px) {
        width:100%;
         p{
            width:100%;
        }
        h4{
            text-align:right;
        }
    }

`


