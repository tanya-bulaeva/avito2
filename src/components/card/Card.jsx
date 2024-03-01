import { Link } from "react-router-dom"
import * as S from "./style"

export const Card = ({ ad }) => {
    return (
        <S.CardItem>
            <S.CardsCard>
                <S.CardImage>
                    <Link to={`/article/${ad?.id}`}>
                        {ad?.images.length !== 0 ? (
                            <img
                                src={`http://localhost:8090/${ad?.images[0]?.url}`}
                                alt="picture"
                            />
                        ) : (
                            <S.CardSkeleton></S.CardSkeleton>
                        )}
                    </Link>
                </S.CardImage>
                <S.CardContent>
                    <Link to={`/article/${ad.id}`}>
                        <S.CardTitle>{ad?.title}</S.CardTitle>
                    </Link>
                    <S.CardPrice>{ad?.price} ₽</S.CardPrice>
                    <S.CardPlace>{ad?.user?.city}</S.CardPlace>
                    <S.CardDate>
                        {new Date(ad?.created_on).toLocaleDateString()}
                    </S.CardDate>
                </S.CardContent>
            </S.CardsCard>
        </S.CardItem>
    )
}
