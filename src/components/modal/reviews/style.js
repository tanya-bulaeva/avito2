import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
`
export const ContainerBg = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-color: #f4f5f6;
`
export const ModalBlock = styled.div`
    position: absolute;
    z-index: 5;
    left: calc(50% - (800px / 2));
    top: 60px;
    opacity: 1;

    @media screen and (max-width: 800px) {
        left: calc(50% - (600px / 2));
    }

    @media screen and (max-width: 600px) {
        position: absolute;
        z-index: 5;
        right: 10px;
        left: 10px;
        top: 55px;
        opacity: 1;
    }
`
export const ModalContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 800px;
    height: auto;
    padding: 20px 92px 57px 50px;
    background-color: #ffffff;
    border-radius: 12px;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 600px;
    }

    @media screen and (max-width: 600px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        width: 100%;
        min-width: 320px;
        height: auto;
        padding: 30px 20px 30px;
    }
`
export const ModalTitle = styled.h3`
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 15px;

    @media screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 29px;
        padding: 0 0 0 26px;
        position: relative;

        &::before {
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background-color: transparent;
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            position: absolute;
            top: 9px;
            left: 0;
            cursor: pointer;
        }
    }
`
export const ModalBtnClose = styled.div`
    width: 23px;
    height: 23px;
    position: absolute;
    top: 47px;
    right: 50px;
    z-index: 3;
    cursor: pointer;
`
export const ModalBtnCloseLine = styled.div`
    &:hover::after {
        background-color: #0080c1;
    }

    &:hover::before {
        background-color: #0080c1;
    }

    position: relative;
    width: 100%;
    height: 100%;

    &::after,
    &::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #d9d9d9;
        top: 47%;
        right: -4px;
    }

    &::before {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    &::after {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`
export const ModalScroll = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    overflow-y: auto;
    scrollbar-color: #ffffff #009ee4;

    &::-webkit-scrollbar {
        width: 0px;
        background-color: #ffffff;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #d9d9d9;
        border-radius: 0px;
    }
`
export const ModalFormNewArt = styled.form`
    margin-top: 5px;
    margin-bottom: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;

    label {
        margin-bottom: 14px;
        font-size: 16px;
        line-height: 32px;
        font-weight: 600;
        color: #000000;
    }

    @media screen and (max-width: 600px) {
        margin-top: 22px;

        label {
            display: none;
        }
    }
`
export const FormNewArtBlock = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 14px;

    @media screen and (max-width: 600px) {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-bottom: 16px;
    }
`
export const FormNewArtArea = styled.textarea`
    font-family: "Roboto-Black", sans-serif;
    padding: 10px 19px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    width: 99%;
    height: 100px;
    max-height: 100px;

    &::-webkit-input-placeholder {
        font-family: "Roboto-Black", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }

    &:-ms-input-placeholder {
        font-family: "Roboto-Black", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }

    &::-ms-input-placeholder {
        font-family: "Roboto-Black", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }

    &::placeholder {
        font-family: "Roboto-Black", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004d;
    }

    @media screen and (max-width: 600px) {
        font-family: "Roboto-Black", sans-serif;
        width: 95%;
        max-height: 107px;
        padding: 9px 17px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        font-size: 16px;
        line-height: 1;

        &::-webkit-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
        }

        &:-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
        }

        &::-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
        }

        &::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
        }
    }
`
export const FormNewArtBtnPub = styled.button`
    width: 181px;
    height: 50px;
    background: #009ee4;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    
    &:enabled {
        :hover {
            background-color: #0080c1;
        }
    }

    &:disabled {
        background-color: gray;
        border: gray;
        cursor: not-allowed;
        :hover {
            background-color: lightgray;
        }
    }

    @media screen and (max-width: 600px) {
        margin-top: 0px;
        width: 99%;
        height: 46px;
        background-color: #009ee4;
    }
`
export const ModalReviews = styled.div`
    width: 100%;
    height: 495px;
`

export const NotUserText = styled.p`
    padding-top: 20px;
    line-height: 32px;
    color: rgb(0, 0, 0);
    font-weight: 600;

    span {
        color: rgb(0, 158, 228);
        font-size: 18px;
    }
`
export const ReviewsReview = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    margin: 15px 0;
`

export const ReviewItem = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`
export const ReviewLeft = styled.div`
    margin-right: 12px;
`
export const ReviewImg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;

    img {
        display: block;
        width: 100%;
        border-radius: 50%;
        height: auto;
        -o-object-fit: cover;
        object-fit: cover;
    }
`

export const ReviewRight = styled.div`
    display: block;
`

export const ReviewName = styled.p`
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #000000;

    span {
        margin-left: 10px;
        color: #5f5f5f;
        font-size: 16px;
        line-height: 32px;
        color: #000000;
    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 28px;
        color: #000000;
    }
`
export const ReviewTitle = styled.h5`
    font-size: 16px;
    line-height: 32px;
    color: #000000;
    font-weight: 600;

    @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 28px;
        color: #000000;
    }
`
export const ReviewText = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #000000;

    @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 28px;
        color: #000000;
    }
`
export const ButtonText = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 6px;
`
export const Loading = styled.div`
    border-radius: 50%;
    width: 10px;
    height: 10px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
    color: #ffffff;
    font-size: 10px;
    margin-top: -14px;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;

    &::before,
    &::after {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: load7 1.8s infinite ease-in-out;
        animation: load7 1.8s infinite ease-in-out;
        content: "";
        position: absolute;
        top: 0;
    }

    &::before {
        left: -14px;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }

    &::after {
        left: 14px;
    }

    @-webkit-keyframes load7 {
        0%,
        80%,
        100% {
            box-shadow: 0 10px 0 -5px;
        }
        40% {
            box-shadow: 0 10px 0 0;
        }
    }

    @keyframes load7 {
        0%,
        80%,
        100% {
            box-shadow: 0 10px 0 -5px;
        }
        40% {
            box-shadow: 0 10px 0 0;
        }
    }
`
export const Backdrop = styled.div`
    background-color: black;
    opacity: 0.5;
    z-index: 5;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
