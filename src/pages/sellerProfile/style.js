import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;

    @media screen and (max-width: 590px) {
        width: 100%;
        min-width: 320px;
    }
`

export const Header = styled.header`
    background-color: #009ee4;
    @media screen and (max-width: 580px) {
        width: 100%;
        height: 55px;
        -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3;
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
    @media screen and (max-width: 580px) {
        height: 55px;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: start;
        padding: 0 20px;
    }
`
export const HeaderLogo = styled.div`
    display: none;
    @media screen and (max-width: 580px) {
        display: block;
    }
`
export const LogoMobLink = styled.a`
    @media screen and (max-width: 580px) {
        display: block;
        width: 32px;
        height: 32px;
    }
`
export const LogoMobImg = styled.a`
    @media screen and (max-width: 580px) {
        width: 32px;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }
`
export const HeaderBtnPutAd = styled.button`
    width: 232px;
    height: 40px;
    border: 1px solid #ffffff;
    border-radius: 6px;
    background-color: transparent;
    color: #ffffff;
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
    border: 1px solid #ffffff;
    border-radius: 6px;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    line-height: 1;
    @media screen and (max-width: 590px) {
        display: none;
    }
`
export const Main = styled.div``
export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 10px 79px;
    @media screen and (max-width: 580px) {
        padding: 85px 0px 84px;
    }
`
export const MainCenterBlock = styled.div`
    margin: 0 auto;

    @media screen and (max-width: 580px) {
        margin: 0 auto;
        padding: 0 20px;
    }
`

export const MainContent = styled.div`
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 580px) {
        width: 100%;
        margin: 0 auto;
    }
`
export const MainMenu = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 11px 0;
    width: 100%;
    padding: 31px 10px 64px;
    @media screen and (max-width: 620px) {
        display: none;
    }
`

export const MenuLogoLink = styled(NavLink)`
    width: 54;
    height: 50px;
`
export const MenuLogoImg = styled.img`
    width: 54px;
    height: auto;
`
export const MenuForm = styled.form`
    margin-left: 60px;
    max-width: 1044px;
    width: 100%;
`
export const MenuBtn = styled.button`
    width: 241px;
    height: 50px;
    background-color: #009ee4;
    border: 1px solid #009ee4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
`
export const MobClose = styled.div`
    display: none;
    &:hover::before {
        border-top: 2px solid #0080c1;
        border-left: 2px solid #0080c1;
    }
    @media screen and (max-width: 580px) {
        display: block;
        width: 23px;
        height: 23px;
        border-top: 2px solid black;
        border-left: 2px solid black;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        background-color: transparent;
        position: absolute;
        top: 89px;
        left: 15px;
        cursor: pointer;
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
        border-top: 2px solid #0080c1;
        border-left: 2px solid #0080c1;
    }
    @media screen and (max-width: 620px) {
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        padding: 0 0 0 26px;
        margin-bottom: 20px;
        position: relative;
    }
`

export const MainProfile = styled.div`
    width: 100%;
    padding: 0 0 70px;
    @media screen and (max-width: 620px) {
        width: 100%;
        padding: 0 0 40px;
    }
`

export const ProfileContent = styled.div`
    max-width: 834px;
    @media screen and (max-width: 890px) {
        max-width: 834px;
        width: 100%;
    }
`
export const MainProfileSell = styled.div`
    width: 100%;
    padding: 0 0 70px;

    @media screen and (max-width: 580px) {
        width: 100%;
        padding: 0 0 40px;
    }
`
export const ProfileSellContent = styled.div`
    width: 100%;
    @media screen and (max-width: 890px) {
        max-width: 834px;
        width: 100%;
    }
    @media screen and (max-width: 580px) {
        max-width: 100%;
        width: 100%;
    }
`
export const ProfileSellSeller = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    @media screen and (max-width: 890px) {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 580px) {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
`

export const SellerLeft = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 50px;
    @media screen and (max-width: 580px) {
        display: none;
        margin-right: 0px;
    }
`

export const SellerImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #f0f0f0;
    img {
        width: 100%;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }

    @media screen and (max-width: 580px) {
        display: none;
    }
`
export const SellerImgSkeleton = styled(SellerImg)`
    width: 170px;
    height: 170px;
    background-color: #f0f0f0;
`
export const SellerRight = styled.div`
    width: auto;
    @media screen and (max-width: 580px) {
        width: 100%;
    }
`
export const SellerTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    color: #000000;
    margin-bottom: 0px;
    @media screen and (max-width: 580px) {
        font-size: 20px;
        line-height: 26px;
        margin-bottom: 6px;
    }
`
export const SellerCity = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 10px;
    @media screen and (max-width: 580px) {
        font-size: 16px;
        line-height: 21px;
        color: #5f5f5f;
        margin-bottom: 6px;
    }
`
export const SellerInf = styled.p`
font-size: 16px;
line-height: 21px;
color: #5F5F5F;
margin-bottom: 10px;
@media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 6px;
`

export const SellerImgMobBlock = styled.div`
    display: none;
    @media screen and (max-width: 580px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 20px 0;
    }
`
export const SellerImgMob = styled.div`
    @media screen and (max-width: 580px) {
        display: block;
        width: 132px;
        height: 132px;
        border-radius: 50%;
        background-color: #f0f0f0;
        img {
            width: 100%;
            height: auto;
            display: block;
            -o-object-fit: cover;
            object-fit: cover;
        }
    }
`
export const SellerBtn = styled.button`
    margin-top: 20px;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    width: 214px;
    height: 62px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    span {
        display: block;
        font-size: 14px;
        font-weight: 400;
    }

    @media screen and (max-width: 580px) {
        width: 100%;
        height: 57px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        span {
            font-size: 12px;
        }
    }
`

export const ProfileTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
    @media screen and (max-width: 620px) {
        font-size: 18px;
        line-height: 1;
    }
`
export const ProfileSetting = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    @media screen and (max-width: 890px) {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
`
export const SettingsLeft = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 43px;
    @media screen and (max-width: 620px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 0;
    }
`

export const SettingImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #f0f0f0;
    img {
        width: 100%;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }

    @media screen and (max-width: 620px) {
        width: 132px;
        height: 132px;
    }
`

export const SettingsChangePhoto = styled.a`
    margin-top: 10px;
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    color: #009ee4;
`

export const SettingsRight = styled.div`
    width: 630px;
    @media screen and (max-width: 620px) {
        width: 100%;
    }
`
export const SettingsForm = styled.form`
width: 630px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
    flex-wrap: wrap;
label {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: #C4C4C4;
        margin-bottom: 4px;
        display: block;
      }
input {
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;   
}
input::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  input:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  input::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  input::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

@media screen and (max-width: 620px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;  
            input {
                border-radius: 30px;
                padding: 9px 17px;
              }     
              input::-webkit-input-placeholder {
                font-size: 14px;
                line-height: 21px;
              }
              input:-ms-input-placeholder {
                font-size: 14px;
                line-height: 21px;
              }
              input::-ms-input-placeholder {
                font-size: 14px;
                line-height: 21px;
              }
              input::placeholder {
                font-size: 14px;
                line-height: 21px;
              }
              label {
                font-size: 14px;
                line-height: 21px;
                color: #C4C4C4;
                margin-bottom: 6px;
              }

            }       
`
export const SettingsDiv = styled.div`
    display: inline-block;
    margin: 0 7px 20px;
    @media screen and (max-width: 620px) {
        display: inline-block;
        margin: 0 0px 18px;
    }
`
export const SettingsFName = styled.input`
    width: 300px;
    @media screen and (max-width: 620px) {
        width: 100%;
    }
`
export const SettingsLName = styled.input`
    width: 300px;
    @media screen and (max-width: 620px) {
        width: 100%;
    }
`
export const SettingsCity = styled.input`
    width: 300px;
    @media screen and (max-width: 620px) {
        width: 100%;
    }
`
export const SettingsPhone = styled.input`
    width: 614px;
    @media screen and (max-width: 620px) {
        width: 100%;
    }
`
export const SettingsBtn = styled.button`
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    width: 154px;
    height: 50px;
    margin: 10px 7px 0;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    @media screen and (max-width: 620px) {
        font-size: 16px;
        line-height: 1;
        width: 100%;
        height: 46px;
        margin: 8px 0px 0;
    }
`
export const MainTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
    @media screen and (max-width: 620px) {
        margin-bottom: 30px;
        font-size: 18px;
        line-height: 1;
    }
`

export const Cards = styled.div`
    max-width: 1158px;
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px) [4];
    grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 40px 26px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow-y: auto;
    scrollbar-color: #ffffff #2e2e2e;
    scrollbar-width: thin;
    scrollbar-width: 0px;
    height: 441px;
    ::-webkit-scrollbar {
        width: 0px;
        background-color: #009ee4;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #0080c1;
        border-radius: 3px;
    }
    @media screen and (max-width: 1158px) {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: (270px) [3];
        grid-template-columns: repeat(3, 270px);
    }
    @media screen and (max-width: 890px) {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: (270px) [2];
        grid-template-columns: repeat(2, 270px);
    }
    @media screen and (max-width: 620px) {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: (137px) [2];
        grid-template-columns: repeat(2, 137px);
        grid-auto-rows: 293px;
        grid-gap: 10px 10px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 596px;
    }
`
export const CardItem = styled.div`
    margin: 0;
    @media screen and (max-width: 620px) {
        margin: 0;
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
    @media screen and (max-width: 620px) {
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
    background-color: #f0f0f0;
    img {
        width: 100%;
        height: 100%;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }
    @media screen and (max-width: 620px) {
        width: 137px;
        height: 132px;
        background-color: #d9d9d9;
        img {
            width: 100%;
            height: 100%;
            display: block;
            -o-object-fit: cover;
            object-fit: cover;
        }
    }
`
export const CardContent = styled.div``
export const CardTitle = styled.h3`
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 620px) {
        height: 51px;
        font-size: 14px;
        line-height: 17px;
        color: #009ee4;
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

    @media screen and (max-width: 620px) {
        font-size: 16px;
        line-height: 24px;
    }
`
export const CardPlace = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
    @media screen and (max-width: 620px) {
        font-size: 12px;
        line-height: 16px;
        color: #5f5f5f;
    }
`

export const CardDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    @media screen and (max-width: 620px) {
        font-size: 12px;
        line-height: 16px;
        color: #5f5f5f;
    }
`
