import * as S from "./style";
import { useSelector } from "react-redux";
import { newComment } from "../../../api/apiAds";
import { selectorAdsComments } from "../../../store/selectors/ads";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Reviews ( {modal, handleModal, currentAd, updateComments }){
  const adReviews = useSelector(selectorAdsComments);

  const [text, setText] = useState('')

const handleNewComments = () => {
    newComment( {text :text}, currentAd.id)
        .then(() => updateComments())
        .then(() => setText(''))
}

const comment = useMemo(() => {
        if (text !== '') {
        return false
    } else return true
}, [text])

const user = localStorage.getItem("access_token");

    return (
      <S.Wrapper  style={{ visibility: modal ? "visible" : "hidden" }}>
          <S.Backdrop onClick={handleModal} />
      <S.ContainerBg >
          <S.ModalBlock>
              <S.ModalContent>
                  <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                  <S.ModalBtnClose onClick={handleModal}>
                      <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
                  </S.ModalBtnClose>
                  <S.ModalScroll>
                      {user ? (<S.ModalFormNewArt onSubmit={(e) => e.preventDefault()}>
                          <S.FormNewArtBlock>
                              <label htmlFor="text">Добавить отзыв</label>
                              <S.FormNewArtArea name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание" 
                        value={text}
                        onChange={(event) => {
                            setText(event.target.value);
                        }}></S.FormNewArtArea>
                          </S.FormNewArtBlock>
                          <S.FormNewArtBtnPub className="btn-hov02" id="btnPublish" onClick={handleNewComments} disabled={comment} >
                              
                              <S.ButtonText>Опубликовать </S.ButtonText>
                              
                              </S.FormNewArtBtnPub>
                      </S.ModalFormNewArt>) : (<></>)}
  
                      
                      <S.ModalReviews>
                        {adReviews.length > 0 ? (adReviews?.map((el) => 
                           <S.ReviewsReview key = {el.id}>
                              <S.ReviewItem>
                                  <S.ReviewLeft>
                                      <S.ReviewImg>
                                          <img src={`http://localhost:8090/${el.author?.avatar}`} alt=""/>
                                      </S.ReviewImg>
                                  </S.ReviewLeft>
                                  <S.ReviewRight>
                                      <S.ReviewName>{el.author?.name} &nbsp; {new Date(el?.created_on).toLocaleDateString()} </S.ReviewName>
                                      <S.ReviewTitle>Комментарий</S.ReviewTitle>
                                      <S.ReviewText >{el.text}</S.ReviewText>
                                  </S.ReviewRight>
                              </S.ReviewItem>
                              
                          </S.ReviewsReview>
                          )
) : ('Список отзывов пуст') }


                          {!user ? (  <S.NotUserText>Вы&nbsp;не&nbsp;авторизованы и&nbsp;не&nbsp;можете оставлять отзывы.<br/>
Чтобы авторизоваться, нажмите на&nbsp; <Link to = "/login"><span>эту ссылку</span></Link></S.NotUserText>) : ('')}


  
  
  
                      </S.ModalReviews>
                  </S.ModalScroll>
              </S.ModalContent>
          </S.ModalBlock>
      </S.ContainerBg>
  </S.Wrapper>
  )
}