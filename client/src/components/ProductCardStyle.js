import styled from 'styled-components';
import colors from '../styles/colors';

export const CardContainer = styled.div`
    display:flex;
    align-items:start;
    width:32%;
    margin-bottom:1.5rem;
    padding:2rem 1rem;
    border: 2px solid ${colors.secondary};
    :hover{
        -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
        -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
        transition:0.3s;
    }

    img{
        width:30%;
        object-fit:contain;
    }

    @media (max-width: 1024px) {
        width:48%;
      }

    @media (max-width: 768px) {
        width:100%;
    }
`

export const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:70%;
    padding: 0rem 1rem;

    h2{
        text-style:bold;
        margin-bottom:0.3rem;
        font-size:1.2rem;
        margin-bottom:1rem;
    }

    h3{
        font-size:0.9rem;
        margin-bottom:0.5rem;

    }

    ul li{
        font-size:0.9rem;
        margin: 0.5rem 0
    }

    span{
        font-weight: black;
        color:${colors.primary}
    }

    h4{
        margin:1rem 0;
        font-size:1rem;
        align-self:flex-end;
    }

    a{
        align-self:flex-end;
        width:70%;
        padding:0.5rem 1rem;
        border:2px solid ${colors.primary};
        background-color: ${colors.primary};
        color:${colors.white};
        font-size:0.8rem;
        text-align:center;
        text-decoration:none;
        :hover{
            border:2px solid ${colors.primary};
            background-color: ${colors.white};
            color:${colors.primary};
            transition:0.3s;
        }
    }

`