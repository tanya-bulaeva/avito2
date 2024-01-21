import * as S from "./style";
import CommonBlock from "../../components/commonBlock/CommonBlock";
import Footer from "../../components/footer/Footer";
import {  NavLink, useNavigate, useParams } from "react-router-dom";
import {  delAd, getAdComments, getAds } from "../../api/apiAds";
import { pageAdsSelector,  selectorAdsComments } from "../../store/selectors/ads";
import { useDispatch, useSelector } from "react-redux";
import { setAdsPage, setAdsComments } from "../../store/slices/adsSlice";
import { useEffect, useMemo, useState } from "react";
import { selectUser } from "../../store/selectors/user";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import AddNew from "../../components/modal/addnew/AddNew";
import Reviews from "../../components/modal/reviews/Reviews";


export default function Article(){
    const [mainImage, setMainImage] = useState("");
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const AllAds = useSelector(pageAdsSelector);
    const [isOpen, setIsOpen] = useState(false);
    const togglePhone = () => setIsOpen(!isOpen);

    const currentAd = useMemo(() => {
        const ad = AllAds?.find((el) => {
          if (el.id === Number(params.id)) return true;
          else return false;
        });
    
        if (ad) {
          setMainImage(
            ad?.images?.length > 0
              ? `http://127.0.0.1:8090/${ad?.images[0]?.url}`
              : <S.CardSkeleton></S.CardSkeleton>
          );
        }
       // console.log(ad?.images?.length);
       return ad;
     }, [AllAds, params.id]);

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
    ];


  const AdsReviews = useSelector(selectorAdsComments);
  const user = useSelector(selectUser)
  const setComments = (value) => dispatch(setAdsComments(value || []));     
     const updateComments = () => {
        getAdComments(params, currentAd?.id).then((comments) => {
          setComments(comments);
        });
      };




  const setAds = (value) => dispatch(setAdsPage(value || []));
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal((prev) => !prev);
  const [changeAdModal, setChangeAdModal] = useState(false);
  const openModal = () => setChangeAdModal((prev) => !prev);

  const deleteAd = async () => {
    delAd(currentAd.id).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    if (!AllAds || AllAds.length === 0)
      getAds().then((data) => {
        if (data) {
            setAds(data);
        } else {
          navigate("/");
        }
      });

if (currentAd) updateComments();
  }, [currentAd?.id]);


  const backpage = () => {
    navigate("/")
  }

    return (
        <S.Container>
          <CommonBlock>
          <S.Main>
                
                <S.MainContainer>
                    <S.MainMenu>
                        <S.MenuLogoLink to="/">
                            <S.MenuLogoImg src="/img/logo.png" alt="logo"/>
                        </S.MenuLogoLink>
                        <S.MenuForm action="#">
                            <NavLink to = "/">                        
                            <S.MenuBtnSerch className="btn-hov02" id="btnGoBack">Вернуться на главную</S.MenuBtnSerch >
                            </NavLink> 
                        </S.MenuForm>                    
                    </S.MainMenu>                    
                </S.MainContainer>
        
                <S.MainArctic>
                        <S.ArticContent>                           
                            <S.ArticleLeft>
                                <S.ArticleFillImg>
                                    <S.ArticleImg > 
                               <S.MobClose  onClick={backpage}></S.MobClose>       
                                    {currentAd?.images.length > 0 ? <S.MainImage src = {mainImage}/> : (<S.CardSkeleton></S.CardSkeleton>)}
                                                                      
                                    </S.ArticleImg>                                    


                                        {currentAd?.images.length > 0 && (
                                         <S.ArticleImgBar>  
                                            {currentAd?.images.map((img) => (
                                        <S.ArticleImgBarDiv key = {img.id} onClick = {() => setMainImage((`http://127.0.0.1:8090/${img.url}`))}>
                                            <S.OtherImage src = {`http://127.0.0.1:8090/${img.url}`}/>

                                        </S.ArticleImgBarDiv>

                                            ))} 


                                        
                                         </S.ArticleImgBar>   
                                        )}


        


                                    <S.ArticleImgBarMob>
                                        <S.ImgBarMobCircleActive></S.ImgBarMobCircleActive>
                                        <S.ImgBarMobCircle></S.ImgBarMobCircle>
                                        <S.ImgBarMobCircle></S.ImgBarMobCircle>
                                        <S.ImgBarMobCircle></S.ImgBarMobCircle>
                                        <S.ImgBarMobCircle></S.ImgBarMobCircle>
                                    </S.ArticleImgBarMob>
                                </S.ArticleFillImg>                                
                            </S.ArticleLeft>
                            <S.ArticleRight>
                                <S.ArticleBlock>
                                    <S.ArticleTitle>{currentAd?.title}</S.ArticleTitle>
                                    <S.ArticleInfo>
                                        <S.ArticleDate>{new Date(currentAd?.created_on).toLocaleDateString()}
                                        </S.ArticleDate>
                                        <S.ArticleCity>{currentAd?.user?.city}</S.ArticleCity>
                                        <S.ArticleLink onClick={handleModal}>{AdsReviews.length} отзыва</S.ArticleLink>
                                    </S.ArticleInfo>
                                    <S.ArticlePrice>{currentAd?.price} ₽</S.ArticlePrice>
                                    {currentAd?.user?.id === user?.id ? (
                    <S.BtnForm>
                      <S.ArticleBtn onClick={openModal}>
                        Редактировать
                      </S.ArticleBtn>
                      <S.ArticleBtn onClick={deleteAd}>
                        Снять с публикации
                      </S.ArticleBtn>
                    </S.BtnForm>
                  ) : (
                    <></>
                  )}

{currentAd?.user?.id === user?.id ? (<></>) : (                                    currentAd?.user?.phone === null ? 
                                    (<S.ArticleBtn>Телефон не указан</S.ArticleBtn>) : 
                                    (<S.ArticleBtn className="btn-hov02" onClick={togglePhone} >
                                        Показать&nbsp;телефон {isOpen ? ( 
                                        <span id ="phone">{currentAd?.user.phone}</span>
                                    ) : ( 
                                    <span id ="phone">+{currentAd?.user.phone.substring(1, 4)}XXX XX XX</span>)
                                   }
                                    </S.ArticleBtn>))}




        
                                    <S.ArticleAuthor>
                                        <S.AuthorImg>
                                            <img src= {`http://localhost:8090/${currentAd?.user.avatar}`} alt=""/>
                                        </S.AuthorImg>
                                        <S.AuthorCont>

                                            <S.AuthorName to = {currentAd?.user?.id === user?.id ? `/profile` : `/seller/${currentAd?.user?.id}`}>{currentAd?.user.name}</S.AuthorName>

                                            <S.AuthorAbout>{`Продает товары с ${months[new Date(currentAd?.user?.sells_from).getMonth()]
                          } ${new Date(currentAd?.user?.sells_from).getFullYear()}`}</S.AuthorAbout>
                                        </S.AuthorCont>
                                    </S.ArticleAuthor>
                                </S.ArticleBlock>
                            </S.ArticleRight>
                        </S.ArticContent>
                </S.MainArctic>

        
                <S.MainContainer>
                    <S.MainTitle>
                    Описание товара
                    </S.MainTitle>
                    <S.MainContent>
                        <S.MainText>{!currentAd?.description? ("Описание отсутсвует") : (currentAd?.description) }</S.MainText>

                    </S.MainContent>
                    
                </S.MainContainer>
        
        
                
            </S.Main>
            <Reviews 
          currentAd={currentAd}
          modal={modal}
          handleModal={handleModal}
          updateComments={updateComments}
        />
        {changeAdModal && (
          <AddNew
            handleModal={openModal}
            modal={changeAdModal}
            currentAd={currentAd}
          />
        )}
  

        </CommonBlock>
        </S.Container>
    )
}


//{currentAd?.images.length > 0 ? (<img src={`http://localhost:8090/${currentAd?.images[0]?.url}`} alt="picture"/>  ) : (<S.CardSkeleton></S.CardSkeleton>)}                                       
                                                