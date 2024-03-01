import { Link } from "react-router-dom"
import * as S from "./style"

export default function Footer({ handleModal, modal }) {
    return (
        <S.Footer>
            <S.FooterContainer>
                <S.FooterImg>
                    <Link to="/" target="_self">
                        <img src="/img/icon_01.png" alt="home" />
                    </Link>
                </S.FooterImg>
                <S.FooterImg>
                    <img src="/img/icon_02.png" alt="home" />
                </S.FooterImg>
                <S.FooterImg>
                    <Link to="/profile" target="_self">
                        <img src="/img/icon_03.png" alt="home" />
                    </Link>
                </S.FooterImg>
            </S.FooterContainer>
        </S.Footer>
    )
}
