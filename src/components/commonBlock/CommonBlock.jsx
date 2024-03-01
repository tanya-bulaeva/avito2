import * as S from "./style"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../store/selectors/user"
import AddNew from "../modal/addnew/AddNew"
import { removeUser } from "../../store/slices/userSlice"
import Footer from "../footer/Footer"
import {
    removeUserPassword,
    setUserPassword,
} from "../../store/slices/adsSlice"

export default function CommonBlock({ children }) {
    const user = useSelector(selectUser)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const isProfilePage = location.pathname === "/profile"
    const [modal, setModal] = useState(false)
    const [modalRedact, setModalRedact] = useState(false)
    const handleModal = () => setModal((prev) => !prev)
    const handleRedact = () => setModalRedact((prev) => !prev)
    const pass = localStorage.getItem("userPassword")
    // useEffect(() => {
    //     dispatch(setUserPassword(pass))
    // })
    const logout = () => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        localStorage.removeItem("user")
        sessionStorage.removeItem("updatedToken")
        localStorage.removeItem("userPassword")
        dispatch(removeUser())
        dispatch(removeUserPassword())
        navigate("/")
    }
    return (
        <S.Wrapper>
            <S.Container>
                <S.Header>
                    <S.HeaderNav>
                        <S.HeaderLogo>
                            <S.LogoMobLink to="/">
                                <S.LogoMobImg
                                    src="/img/logo-mob.png"
                                    alt="logo"
                                />
                            </S.LogoMobLink>
                        </S.HeaderLogo>
                        {user.id ? (
                            isProfilePage ? (
                                <>
                                    <S.HeaderBtnPutAd
                                        className=" btn-hov01"
                                        id="btputAd"
                                        onClick={handleModal}
                                    >
                                        Разместить объявление
                                    </S.HeaderBtnPutAd>
                                    <NavLink to="/profile">
                                        <S.HeaderBtnLk
                                            className=" btn-hov01"
                                            id="btnlk"
                                        >
                                            Личный кабинет
                                        </S.HeaderBtnLk>
                                    </NavLink>
                                    <S.HeaderBtnLk
                                        className="btn-hov02"
                                        id="logout"
                                        onClick={logout}
                                    >
                                        Выйти из&nbsp;профиля
                                    </S.HeaderBtnLk>
                                </>
                            ) : (
                                <>
                                    <NavLink to="/profile">
                                        <S.HeaderBtnLk
                                            className=" btn-hov01"
                                            id="btnlk"
                                        >
                                            Личный кабинет
                                        </S.HeaderBtnLk>
                                    </NavLink>
                                </>
                            )
                        ) : (
                            <NavLink to="/login">
                                <S.Btn className="btn-hov01" id="btnMainEnter">
                                    Вход в личный кабинет
                                </S.Btn>
                            </NavLink>
                        )}
                    </S.HeaderNav>
                </S.Header>
                <Footer
                    modal={modal}
                    handleModal={handleModal}
                    handleRedact={handleRedact}
                />
                {children}
            </S.Container>
            {modal && <AddNew modal={modal} handleModal={handleModal} />}
        </S.Wrapper>
    )
}
