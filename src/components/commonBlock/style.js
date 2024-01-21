import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Wrapper = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
background-color: #F1F1F1;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
`
export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
    
    @media screen and (max-width: 768px) {
      width: 100%;
      min-width: 320px;
      min-height: 100vh;
      background-color: #FFFFFF;

}
`
export const Header = styled.header`
background-color: #009EE4;
@media screen and (max-width: 590px) {
    padding: 0 20px;
    width: 100%;
    height: 55px;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
            box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    padding: 0 20px;
} 
`
export const HeaderNav = styled.nav`
max-width: 1178px;
margin: 0 auto;
padding: 0 10px;
height: 79px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: end;
    -ms-flex-pack: end;
        justify-content: end;
        @media screen and (max-width: 768px) {
            height: 55px;
            -webkit-box-pack: start;
                -ms-flex-pack: start;
                    justify-content: start;
            padding: 0;            
        }
`

export const Btn = styled.button`
width: 224px;
height: 40px;
border: 1px solid #FFFFFF;
border-radius: 6px;
background-color: transparent;
color: #FFFFFF;
font-size: 16px;
line-height: 1;
`

export const HeaderBtnPutAd = styled.button`
width: 232px;
height: 40px;
border: 1px solid #FFFFFF;
border-radius: 6px;
background-color: transparent;
color: #FFFFFF;
font-size: 16px;
line-height: 1;
@media screen and (max-width: 590px) {
    display: none;
}
`
export const HeaderBtnLk = styled.button`
width: 173px;
height: 40px;
margin-left: 10px;
border: 1px solid #FFFFFF;
border-radius: 6px;
background-color: transparent;
color: #FFFFFF;
font-size: 16px;
line-height: 1;
@media screen and (max-width: 590px) {
    display: none;
}
`

export const HeaderLogo = styled.div`
display: none;
@media screen and (max-width: 590px) {
    display: block;
}
`
export const LogoMobLink = styled(NavLink)`
@media screen and (max-width: 768px) {
    display: block;
    width: 32px;
    height: 32px;
}
`
export const LogoMobImg = styled.img`
@media screen and (max-width: 768px) {
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;
}
`