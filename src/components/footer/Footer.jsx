import { Link, useLocation } from "react-router-dom"
import * as S from "./style"
import AddNew from "../modal/addnew/AddNew"

export default function Footer({ modal, handleModal, handleRedact }) {
    const location = useLocation()
    const isProfilePage = location.pathname === "/profile"
    return (
        <S.Footer>
            <S.FooterContainer>
                {isProfilePage ? (
                    <>
                        {" "}
                        <S.FooterImg>
                            <Link to="/" target="_self">
                                <img src="/img/icon_01.png" alt="home" />
                            </Link>
                        </S.FooterImg>
                        <S.FooterImg onClick={handleModal}>
                            <img src="/img/icon_02.png" alt="newadd" />
                        </S.FooterImg>
                        <S.FooterImg>
                            <Link to="/profile" target="_self">
                                <img src="/img/icon_03.png" alt="profile" />
                            </Link>
                        </S.FooterImg>
                    </>
                ) : (
                    <>
                        {" "}
                        <S.FooterImg>
                            <Link to="/" target="_self">
                                <img src="/img/icon_01.png" alt="home" />
                            </Link>
                        </S.FooterImg>
                        <S.FooterImg>
                            <Link to="/profile" target="_self">
                                <img src="/img/icon_03.png" alt="profile" />
                            </Link>
                        </S.FooterImg>
                    </>
                )}
            </S.FooterContainer>
            {modal && <AddNew modal={modal} handleModal={handleModal} />}
        </S.Footer>
    )
}
