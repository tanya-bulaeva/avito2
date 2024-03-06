import * as S from "./style"
import CommonBlock from "../../components/commonBlock/CommonBlock"
import { useDispatch, useSelector } from "react-redux"
import {
    pageAdsSelector,
    passwordSelector,
    selectorUpdate,
} from "../../store/selectors/ads"
import { useState } from "react"
import { setAdsPage } from "../../store/slices/adsSlice"
import { getAds } from "../../api/apiAds"
import { useRef } from "react"
import { useEffect } from "react"
import { Card } from "../../components/card/Card"

export default function Main() {
    const dispatch = useDispatch()
    const AllAds = useSelector(pageAdsSelector)
    const [loading, setLoading] = useState(false)
    const setAds = (value) => dispatch(setAdsPage(value || []))
    const [searchQ, setSearchQ] = useState("")
    const [adsSearch, setAdsSearch] = useState([])
    const pass = useSelector(passwordSelector)
    const ref = useRef(null)
    const Update = useSelector(selectorUpdate)

    useEffect(() => {
        setLoading(true)
        getAds()
            .then((data) => {
                setAds(data)
                setAdsSearch(data)
            })
            .catch((error) => {
                console.log(error.message)
            })
            .finally(() => setLoading(false))
    }, [])

    const filterAds = () => {
        if (searchQ === "") {
            setAdsSearch(AllAds)
            return
        }
        const adsFilter = AllAds.filter((el) => {
            if (el.title.toLowerCase().includes(searchQ.toLowerCase()))
                return true
            else return false
        })
        setAdsSearch(adsFilter)
    }

    const onClear = () => {
        setSearchQ("")
        setAdsSearch(AllAds)
    }

    return (
        <>
            <CommonBlock>
                <S.MainSearh>
                    <S.SearchLogoLink to="/">
                        <S.SearchLogoImg src="/img/logo.png"></S.SearchLogoImg>
                    </S.SearchLogoLink>
                    <S.SearchLogoMobLink to="/">
                        <S.SearchLogoMobImg
                            src="/img/logo-mob.png"
                            alt="logo"
                        />
                    </S.SearchLogoMobLink>

                    <S.SearchForm onSubmit={(e) => e.preventDefault()}>
                        <S.SearchText
                            ref={ref}
                            type="search"
                            placeholder="Поиск по объявлениям"
                            onInput={(e) => setSearchQ(e.target.value)}
                            value={searchQ}
                            onClick={() => {
                                const element = ref.current
                                element.addEventListener("search", onClear())
                                setTimeout(() =>
                                    element.removeEventListener(
                                        "search",
                                        onClear(),
                                    ),
                                )
                            }}
                        />
                        <S.SearchTextMob
                            ref={ref}
                            type="search"
                            placeholder="Поиск"
                            name="search-mob"
                            onInput={(e) => setSearchQ(e.target.value)}
                            value={searchQ}
                            onClick={() => {
                                const element = ref.current
                                element.addEventListener("search", onClear())
                                setTimeout(() =>
                                    element.removeEventListener(
                                        "search",
                                        onClear(),
                                    ),
                                )
                            }}
                        />
                        <S.SearchBtn  onClick={filterAds}>
                            Найти
                        </S.SearchBtn>
                    </S.SearchForm>
                </S.MainSearh>
                <S.MainContainer>
                    <S.MainH2>Объявления</S.MainH2>

                    <S.MainContent>
                        <S.Cards>
                            {" "}
                            {adsSearch?.map((ad) => (
                                <Card ad={ad} key={ad.id} />
                            ))}{" "}
                        </S.Cards>
                    </S.MainContent>
                </S.MainContainer>
            </CommonBlock>
        </>
    )
}
