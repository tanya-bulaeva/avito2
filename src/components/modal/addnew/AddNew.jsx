import { useDispatch, useSelector } from "react-redux";
import { delImg, getAds, newAd, patchAd,  postNewAdPhoto } from "../../../api/apiAds";
import { setAdsPage, setUpdate } from "../../../store/slices/adsSlice";
import * as S from "./style";
import { useEffect, useMemo, useState } from "react";
import { selectorUpdate } from "../../../store/selectors/ads";

export default function AddNew ({modal, handleModal, currentAd}){
const dispatch = useDispatch();
const setNewAd = (ad) => dispatch(setAdsPage(ad));
const [title, setTitle] = useState(currentAd ? currentAd.title : "");
const [description, setDescription] = useState(currentAd ? currentAd.description : "");
const [price, setPrice] = useState(currentAd ? currentAd.price : "");
const [images, setImages] = useState({});
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const Update = useSelector(selectorUpdate);  
const [errorsForm, setErrorsForm] = useState({
    title: "",
    description: "", 
    price: ''
  });
  const validateForm = () => {
    let isValid = true;
    const pricePattern = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
    const newErrors = { ...errorsForm };

    if (title.trim() === "") {
      newErrors.title = "Введите название товара";
      isValid = false;
    } else {
      newErrors.title = "";
    }

    if (description.trim() === "") {
        newErrors.description = "Введите описание товара";
        isValid = false;
      } else {
        newErrors.description = "";
      }

      if (price.trim() === "") {
        newErrors.price = "Введите цену товара";
        isValid = false;
      }else if (!pricePattern.test(price)) {
        newErrors.price= "Цена не должна быть отрицательной";
        isValid = false;
      } else {
        newErrors.price = "";
      }

  
    setErrorsForm(newErrors);

    return isValid;
  };

  useEffect(() => {
    setError(null);
  }, [title, description, price]);

  useEffect(() => {
    const newErrors = { ...errorsForm };
    newErrors.title = "";
    setErrorsForm(newErrors);
  }, [title]);

  useEffect(() => {
    const newErrors = { ...errorsForm };
    newErrors.description = "";
    setErrorsForm(newErrors);
  }, [description]);

  useEffect(() => {
    const newErrors = { ...errorsForm };
    newErrors.price = "";
    setErrorsForm(newErrors);
  }, [price]);


const handleNewAd = async () => {
    
    if (validateForm ()){
    setLoading(true)
  try {
    const ad = await newAd(title, description, price)
    const keys = Object.keys(images)
    if (keys.length > 0) {
        for (const key in images) {
            const formData = new FormData();
            formData.append('file', images[key]);
            await postNewAdPhoto(formData, ad.id);
        }
    }
    handleModal()
    setLoading(false)
    getAds()
    .then((data) => {
        setNewAd(data)
    })
    setUpdate(true)
   
  } catch (error)  {
    setError(error?.message)
}

    }

}
const handleChangeAd = async () => {

    
    if (validateForm ()){
    setLoading(true)  
    const ad = await patchAd({title, description, price}, currentAd.id)
    const keys = Object.keys(images)
    if (keys.length > 0) {
      for (const key in images) {
          const formData = new FormData();
          formData.append('file', images[key]);
          await postNewAdPhoto(formData, ad.id);
      }
  }
  
    handleModal()
    await getAds().then((data) => {
        setNewAd (data);
      });
    setLoading(false)
    }
}
const handleImg = (event) => {
    event.preventDefault();
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
        console.log('Файл не выбран');
    } else {
        setImages((prev) => ({ ...prev, [event.target.id]: selectedFile }))
    };
 
}

//console.log(currentAd.images.length);

return (
    <S.Wrapper style={{ visibility: modal ? "visible" : "hidden" }}>
        <S.Backdrop onClick={handleModal} />
        <S.ContainerBg>
            <S.ModalBlock>
                <S.ModalContent>
                    <S.ModalTitle>{currentAd  ? "Редактировать" : "Новое объявлениe" }</S.ModalTitle>
                    <S.ModalBbtnClose onClick={handleModal}>
                    <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
                    </S.ModalBbtnClose>
                    <S.ModalFormNewArt  onSubmit={(e) => e.preventDefault()}>
                        <S.FormNewArtBlock>
                            <S.LabelForm htmlFor="name">Название</S.LabelForm>
                            {errorsForm.title && <S.error>{errorsForm.title}</S.error>}
                            <S.FormNewArtInput type="text" name="name" id="formName"
                             placeholder="Введите название"
                             value={title}
                             onChange={(event) => {
                                 setTitle(event.target.value);
                             }}
                             />


                        </S.FormNewArtBlock>
                        <S.FormNewArtBlock>
                            <label htmlFor="text">Описание</label>   
                            {errorsForm.description && <S.error>{errorsForm.description}</S.error>}                         
                            <S.FormNewArtArea name="text" id="formArea" cols="auto"
                             rows="10"
                        
                             placeholder="Введите описание"
                             value={description}
                             onChange={(event) => {
                                 setDescription(event.target.value);
                             }} 

                            ></S.FormNewArtArea>
                        </S.FormNewArtBlock>
                        <S.FormNewArtBlock>
                            <S.FormNewArtP>Фотографии товара<span>не более 5 фотографий</span></S.FormNewArtP>
                            <S.FormNewArtBarImg>
                              <S.ImageBlock>


                            <S.FormNewArtImg >
                              <img src={images['file-upload1'] ? URL.createObjectURL(images['file-upload1']) : `http://localhost:8090/${currentAd?.images[0]?.url}`} alt="" />
                              

                               <S.FormNewArtImgCover htmlFor="file-upload1"></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.inputChange id="file-upload1" name="photo" type="file" placeholder="" onChange={handleImg} />

                              </S.ImageBlock>
                              <S.ImageBlock>
                            <S.FormNewArtImg >

                              <img src={images['file-upload2'] ? URL.createObjectURL(images['file-upload2']) : `http://localhost:8090/${currentAd?.images[1]?.url}`} alt="" />
                                <S.FormNewArtImgCover htmlFor="file-upload2"></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.inputChange id="file-upload2" name="photo" type="file" placeholder="" onChange={handleImg} />

                            </S.ImageBlock>
                            <S.ImageBlock>
                            <S.FormNewArtImg >
                           
                            <img src={images['file-upload3'] ? URL.createObjectURL(images['file-upload3']) : `http://localhost:8090/${currentAd?.images[2]?.url}`} alt="" />
                                <S.FormNewArtImgCover htmlFor="file-upload3"></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.inputChange id="file-upload3" name="photo" type="file" placeholder="" onChange={handleImg} />

                            </S.ImageBlock>
                            <S.ImageBlock>
                            <S.FormNewArtImg >

                              <img src={images['file-upload4'] ? URL.createObjectURL(images['file-upload4']) : `http://localhost:8090/${currentAd?.images[3]?.url}`} alt="" />
                                <S.FormNewArtImgCover htmlFor="file-upload4"></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.inputChange id="file-upload4" name="photo" type="file" placeholder="" onChange={handleImg} />

                            </S.ImageBlock>
                            <S.ImageBlock>
                            <S.FormNewArtImg >

                              <img src={images['file-upload5'] ? URL.createObjectURL(images['file-upload5']) : `http://localhost:8090/${currentAd?.images[4]?.url}`} alt="" />
                                <S.FormNewArtImgCover htmlFor="file-upload5"></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.inputChange id="file-upload5" name="photo" type="file" placeholder="" onChange={handleImg} />

                            </S.ImageBlock>
                            </S.FormNewArtBarImg>
                        </S.FormNewArtBlock>
                        <S.BlockPrice>
                            <label htmlFor="price">Цена</label>
                            {errorsForm.price && <S.error>{errorsForm.price}</S.error>}
                            <S.FormNewArtInputPrice name="price" 
                            id="formName" 
                            type="number"
                            value ={price}
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }} />
                            <S.FormNewArtInputPriceCover></S.FormNewArtInputPriceCover>
 
                        </S.BlockPrice> 
                        <S.FormNewArtBtnPub className="btn-hov02" id="btnPublish" >
                        {error && <S.error>{error}</S.error>}

                        <S.ButtonText onClick={currentAd ? handleChangeAd : handleNewAd} disabled = {loading}>  {loading? ('Загружаем') : currentAd ? ('Сохранить') :('Опубликовать' )}     </S.ButtonText>
                            
                            </S.FormNewArtBtnPub>
                        
                    </S.ModalFormNewArt>
                </S.ModalContent>
            </S.ModalBlock>
        </S.ContainerBg>
    </S.Wrapper>

)
}