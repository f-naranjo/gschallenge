import styled from 'styled-components';
import colors from '../styles/colors';
export const NavWrapper = styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:4rem;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    div{
        display:flex;
        justify-content: space-between;
        align-items:center;
        width:100%;
        max-width:1200px;
    }
    ul{
        display:flex;
        list-style-type:none
    }
    li{
        margin:1rem;
        button{
            display:block;
            -webkit-appearance: none;
            appearance:none;
            border:none;
            outline: none;
            text-decoration:none;
            background-color:${colors.secondary};
            padding:0.5rem;
            font-size:1rem;
            color: ${colors.primary};
            transition: 0.3s;
           :hover{
                transform: translateY(-0.2rem);
                color: ${colors.primarySoft};
                cursor:pointer;
                transition: 0.3s;
            }
        }
       
       :last-child{
           margin-right:2rem;
       }
    }
    .logo{
        margin-left:2rem;
        font-weight:bold;
        text-decoration:none;
        color: ${colors.primary};
    }
    
`





