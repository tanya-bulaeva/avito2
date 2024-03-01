import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
`
export const ContainerSignup = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #f4f5f6;
    @media screen and (max-width: 768px) {
    }
`
export const ModalBlock = styled.div`
    position: absolute;
    z-index: 2;
    left: calc(50% - (366px / 2));
    top: calc(50% - (647px / 2));
    opacity: 1;
    @media screen and (max-width: 768px) {
        left: calc(50% - (320px / 2));
        top: 55px;
    }
`
export const ModalFormLogin = styled.form`
width: 366px;
height: 647px;
background-color: #FFFFFF;
border-radius: 12px;
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
padding: 43px 42px 47px;
}
 input:first-child {
margin-bottom: 30px;
}
@media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    border-radius: 0px;
    padding: 40px 20px;
}
`
export const ModalLogo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 42px;
    background-color: transparent;

    img {
        width: 140px;
        height: auto;
    }

    @media screen and (max-width: 768px) {
        width: 120px;
        height: 18px;
        margin-bottom: 30px;
        background-color: transparent;
        img {
            width: 120px;
            height: auto;
        }
    }
`

export const ModalInput = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;
    margin-bottom: 38px;

    ::-webkit-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }

    :-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }

    ::-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }

    ::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        border: 1px solid #d9d9d9;
        border-radius: 30px;
        padding: 9px 19px;
        margin-bottom: 14px;

        ::-webkit-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
        :-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
        ::-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
        ::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #b3b3b3;
        }
    }
`
export const ModalBtnSignupEnt = styled.button`
width: 278px;
color: white;
height: 62px;
background-color: #009EE4;
border-radius: 6px;
border: none;
margin-top: 30px;
font-size: 18px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
}

a {
width: 100%;
height: 100%;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.05px;
color: #FFFFFF;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
}
:hover {
    background-color: #0080C1;
  }
  
:active {
    background-color: #0080C1;
  }
@media screen and (max-width: 768px) {
    height: 46px;
    border: none;
    margin-top: 26px;
  }
 a {
    font-size: 16px;
    line-height: 24px;
  }
}
`

export const Link = styled(NavLink)`
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`
export const error = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    color: #dd4333;
`
