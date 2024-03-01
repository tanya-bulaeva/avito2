import * as S from "./style"
import { Link, NavLink, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pageAdsSelector } from "../../store/selectors/ads"
import { getAds, getUserById } from "../../api/apiAds"
import { Card } from "../../components/card/Card"
import CommonBlock from "../../components/commonBlock/CommonBlock"

export default function SellerProfile() {
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()
    const [userAds, setUserAds] = useState()
    const [user, setUser] = useState()

    const [isOpen, setIsOpen] = useState(false)
    const togglePhone = () => setIsOpen(!isOpen)
    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ]

    useEffect(() => {
        if (!params.id) {
            navigate("/")
        }
        getUserById(params.id).then((data) => {
            if (data) {
                setUser(data)
                getAds({ user_id: data.id }).then((userAdsData) => {
                    if (userAdsData) {
                        setUserAds(userAdsData)
                    }
                })
            }
        })
    }, [])
    const backpage = () => {
        navigate("/")
    }
    return (
        <S.Container>
            <CommonBlock>
                <S.Main>
                    <S.MainContainer>
                        <S.MainCenterBlock>
                            <S.MainMenu>
                                <S.MenuLogoLink to="/">
                                    <S.MenuLogoImg
                                        src="/img/logo.png"
                                        alt="logo"
                                    />
                                </S.MenuLogoLink>

                                <NavLink to="/">
                                    <S.MenuForm action="#">
                                        <S.MenuBtn
                                            className="btn-hov02"
                                            id="btnGoBack"
                                        >
                                            Вернуться на&nbsp;главную
                                        </S.MenuBtn>
                                    </S.MenuForm>
                                </NavLink>
                            </S.MainMenu>

                            <S.MainH2>Профиль продавца</S.MainH2>
                            <S.MobClose onClick={backpage}></S.MobClose>
                            <S.MainProfileSell>
                                <S.ProfileSellContent>
                                    <S.ProfileSellSeller>
                                        <S.SellerLeft>
                                            {!user?.avatar ? (
                                                <S.SellerImgSkeleton></S.SellerImgSkeleton>
                                            ) : (
                                                <S.SellerImg>
                                                    <img
                                                        src={`http://localhost:8090/${user?.avatar}`}
                                                        alt=""
                                                    />
                                                </S.SellerImg>
                                            )}
                                        </S.SellerLeft>
                                        <S.SellerRight>
                                            <S.SellerTitle>
                                                {!user?.name
                                                    ? "Имя продавца отсутствует"
                                                    : user?.name}
                                            </S.SellerTitle>
                                            <S.SellerCity>
                                                {user?.city}
                                            </S.SellerCity>
                                            <S.SellerInf>
                                                {`Продает товары с ${
                                                    months[
                                                        new Date(
                                                            user?.sells_from,
                                                        ).getMonth()
                                                    ]
                                                } ${new Date(
                                                    user?.sells_from,
                                                ).getFullYear()}`}{" "}
                                            </S.SellerInf>

                                            <S.SellerImgMobBlock>
                                                <S.SellerImgMob>
                                                    <img
                                                        src={`http://localhost:8090/${user?.avatar}`}
                                                        alt=""
                                                    />
                                                </S.SellerImgMob>
                                            </S.SellerImgMobBlock>
                                            {!user?.phone ? (
                                                <S.SellerBtn className=" btn-hov02">
                                                    Телефон не указан
                                                </S.SellerBtn>
                                            ) : isOpen ? (
                                                <S.SellerBtn
                                                    className=" btn-hov02"
                                                    onClick={togglePhone}
                                                >
                                                    Показать&nbsp;телефон
                                                    <span>{user?.phone}</span>
                                                </S.SellerBtn>
                                            ) : (
                                                <S.SellerBtn
                                                    className=" btn-hov02"
                                                    onClick={togglePhone}
                                                >
                                                    Показать&nbsp;телефон
                                                    <span>
                                                        {user?.phone?.substring(
                                                            1,
                                                            4,
                                                        )}
                                                        XXXXXXX
                                                    </span>
                                                </S.SellerBtn>
                                            )}
                                        </S.SellerRight>
                                    </S.ProfileSellSeller>
                                </S.ProfileSellContent>
                            </S.MainProfileSell>

                            <S.MainTitle>Товары продавца</S.MainTitle>
                        </S.MainCenterBlock>
                        <S.MainContent>
                            {userAds?.length > 0 ? (
                                <S.Cards>
                                    {" "}
                                    {userAds?.map((ad) => (
                                        <Card ad={ad} key={ad.id} />
                                    ))}
                                </S.Cards>
                            ) : (
                                "Объявления данного продавца отсутствуют"
                            )}
                        </S.MainContent>
                    </S.MainContainer>
                </S.Main>
            </CommonBlock>
        </S.Container>
    )
}
