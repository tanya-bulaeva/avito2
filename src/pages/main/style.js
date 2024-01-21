import styled from "styled-components"
import { NavLink } from "react-router-dom";


export const MainContainer = styled.div`
max-width: 1178px;
margin: 0 auto;
padding: 52px 10px 37px;
@media screen and (max-width: 590px) {
    padding: 85px 10px 84px;
}
`
export const MainH2 = styled.h2`
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 42px;
color: #000000;
margin-bottom: 30px;
:hover::before {
border-top: 2px solid #0080C1;
border-left: 2px solid #0080C1;}
    @media screen and (max-width: 590px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
    position: relative;

    }
`



export const MainContent = styled.div`
width: 100%;
margin: 0 auto;
@media screen and (max-width: 590px) {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: fixed;
    right: 0;
    left: 0;
    top: 134px;
    bottom: 84px;
}
`

export const LoadingCircle = styled.div`
  margin-top: 100px;
  position: relative;
  text-align: center; 
  padding: 20px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
::before {
  content: ''; /
  position: absolute;
  border: 2px solid #3D64FF; 
  left: -20px;
  opacity: 0;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: pulse 2.5s linear infinite; 
}
@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
::after,
::before {
  content: '';
  position: absolute;
  border: 2px solid #3D64FF;
  left: -20px;
  opacity: 0;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: pulse 2.5s linear infinite;
}

::after {
  animation-delay: 1.25s;
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
`;
export const Cards = styled.div`
max-width: 1158px;
width: 100%;
display: -ms-grid;
display: grid;
-ms-grid-columns: (270px)[4];
    grid-template-columns: repeat(4, 270px);
grid-auto-rows: 441px;
grid-gap: 40px 26px;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
overflow-y: auto;
scrollbar-color: #FFFFFF #2E2E2E;
scrollbar-width: thin;
scrollbar-width: 0px;
height: 922px;
::-webkit-scrollbar {
    width: 0px;
    background-color: #009EE4;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0080C1;
    border-radius: 3px;
  }
  @media screen and (max-width: 1158px) {
      display: -ms-grid;
      display: grid;
      -ms-grid-columns: (270px)[3];
          grid-template-columns: repeat(3, 270px);

  }
  @media screen and (max-width: 890px) {

      display: -ms-grid;
      display: grid;
      -ms-grid-columns: (270px)[2];
          grid-template-columns: repeat(2, 270px);

  }
  @media screen and (max-width: 590px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (137px)[2];
        grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;


  }
`
export const CardItem = styled.div`
margin: 0;
@media screen and (max-width: 590px) {
    margin: 0;
    -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}
`

export const CardsCard = styled.div`
width: 270px;
height: 441px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
@media screen and (max-width: 590px) {    
    width: 137px;
    height: 293px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column; 
}    
`
export const CardImage = styled.div`
width: 270px;
height: 270px;
background-color: #F0F0F0;
img {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;   
}
@media screen and (max-width: 590px) {    
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #D9D9D9;
    img{
        width: 100%;
        height: 100%;
        display: block;
        -o-object-fit: cover;
           object-fit: cover;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }   
}
`
export const CardContent = styled.div``
export const CardSkeleton = styled.div`
width: 270px;
height: 270px;
background-color: #F0F0F0;
`
export const CardTitle = styled.h3`
height: 52px;
font-size: 22px;
font-weight: 500;
line-height: 26px;
color: #009EE4;
margin-bottom: 10px;
margin-top: 20px;
overflow: hidden;
text-overflow: ellipsis;
@media screen and (max-width: 590px) {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009EE4;
    margin-bottom: 10px;
    margin-top: 10px;   
   }
`
export const CardPrice = styled.p`
color: #000000;
font-size: 22px;
font-weight: 500;
line-height: 33px;
margin-bottom: 10px;
@media screen and (max-width: 590px) {
    font-size: 16px;
    line-height: 24px;
}
`
export const CardPlace = styled.p`
font-size: 16px;
line-height: 21px;
color: #5F5F5F;
margin-bottom: 4px;
@media screen and (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
    color: #5F5F5F; 
}
`
export const CardDate = styled.p`
font-size: 16px;
line-height: 21px;
color: #5F5F5F;
@media screen and (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
    color: #5F5F5F; 
}
`

export const MainSearh = styled.div`
width: 100%;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: justify;
    -ms-flex-pack: justify;
        justify-content: space-between;
padding: 11px 0;
max-width: 1178px;
margin: 0 auto;
padding: 31px 10px 0px;
    @media screen and (max-width: 590px) {
      width: 100%;
      height: 55px;
      background-color: #009EE4;
      -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
              box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
      margin-bottom: 0px;
      padding: 11px 17px;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 3;
    }
`
export const SearchLogoLink = styled(NavLink) `
@media screen and (max-width: 590px) {
display: none;
}
`
export const SearchLogoImg = styled.img`
width: 54px;
height: auto;
`
export const SearchLogoMobLink = styled(NavLink)`
display: none;
@media screen and (max-width: 590px) {
    display: block;
    width: 32px;
    height: 32px;
}
`
export const SearchLogoMobImg = styled.img`
@media screen and (max-width: 590px) {
    display: block;
    width: 32px;
    height: 32px;
}
`
export const SearchForm = styled.form`
margin-left: 60px;
max-width: 1044px;
width: 100%;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
@media screen and (max-width: 590px) {
    margin-left: 10px;
    max-width: 1044px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
`
export const SearchText = styled.input`
width: 100%;
height: 50px;
border-width: 1px;
border-style: solid;
border-color: rgba(0, 0, 0, 0.2);
border-radius: 6px;
background-color: transparent;
padding: 13px 19px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;}
:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;}
::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;}
    ::placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
@media screen and (max-width: 590px) {
display: none;
}
`
export const SearchTextMob = styled.input`
display: none;
@media screen and (max-width: 590px) {
    display: inline-block;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 30px;
    background-color: #FFFFFF;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    ::-webkit-input-placeholder {
        background-color: transparent;
        color: #B3B3B3;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        :-ms-input-placeholder {
            background-color: transparent;
            color: #B3B3B3;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            ::-ms-input-placeholder {
                background-color: transparent;
                color: #B3B3B3;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
              }
              ::placeholder {
                background-color: transparent;
                color: #B3B3B3;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
              }
}
`
export const SearchBtn = styled.button`
margin-left: 10px;
width: 158px;
height: 50px;
background-color: #009EE4;
border: 1px solid #009EE4;
border-radius: 6px;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
@media screen and (max-width: 590px) {
    display: none;
}
`
