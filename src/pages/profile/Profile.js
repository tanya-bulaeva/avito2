import * as S from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import {  selectUser } from "../../store/selectors/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Card } from "../../components/card/Card";
import {  removeUser, setUser } from "../../store/slices/userSlice";
import { ChangeUserPassword, getAds,   patchUser, postNewUserPhoto } from "../../api/apiAds";
import {  selectorUpdate } from "../../store/selectors/ads";
import { removeUserPassword, setUpdate, setUserPassword } from "../../store/slices/adsSlice";


export default function Profile(){
  const [userAds, setUserAds] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const setCurrentUser = (value) => dispatch(setUser(value));
  const Update = useSelector(selectorUpdate);  

      const updateAds = () => {
        getAds({ user_id: user.id }).then((data) => {
          if (data) {
            setUserAds(data);
          }
        });
      };
      useEffect(() => {
        if (Update) updateAds();
      }, [Update]);
    
      useEffect(() => {
        if (!Update) updateAds();
      }, []);  


      useEffect(() => {
        if (userAds){
          updateAds()
        }
      })

    const [userData, setUserData] = useState({
        name: user.name,
        surname: user.surname,
        city: user.city,
        phone: user.phone,
      });



      const buttonDisabled = useMemo(() => {
        if (
          userData.name !== user.name|| 
          userData.surname !== user.surname ||
          userData.city !== user.city ||
          userData.phone !== user.phone
        )
        return false;
        else return true;
      }, [
        user.city,
        user.name,
        user.phone,
        user.surname,
        userData.city,
        userData.name,
        userData.phone,
        userData.surname,
      ]);

      const handleName = (e) =>
      setUserData((prev) => ({ ...prev, name: e.target.value }));
    const handleSurname = (e) =>
      setUserData((prev) => ({ ...prev, surname: e.target.value }));
    const handleCity = (e) =>
      setUserData((prev) => ({ ...prev, city: e.target.value }));
    const handlePhone = (e) =>
      setUserData((prev) => ({ ...prev, phone: e.target.value }));

      const changeUserInfo = async (e) => {
        e.preventDefault()

        const updatedUserInfo = await patchUser({
          name: userData.name,
          surname: userData.surname,
          city: userData.city,
          phone: userData.phone,
          error: false,
        });
        if (updatedUserInfo) {
          setCurrentUser(updatedUserInfo);
          setUserData({
            name: updatedUserInfo.name,
            surname: updatedUserInfo.surname,
            city: updatedUserInfo.city,
            phone: updatedUserInfo.phone,
          });

          localStorage.setItem("user", JSON.stringify(updatedUserInfo));

        }
       };

          const handleUserPhoto = async (event) => {
            event.preventDefault();
            const selectedFile = event.target.files[0];
            if (!selectedFile) {
            } else {
              const formData = new FormData();
              formData.append("file", selectedFile);
              const userPhoto = await postNewUserPhoto(formData);
              setCurrentUser(userPhoto);
              localStorage.setItem("user", JSON.stringify(userPhoto));
            }
          };

      const [newPassword, setNewPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [offbtn, setOffBtn] = useState(false)
      const passwordOld = localStorage.getItem('userPassword');
     
      const [errorsForm, setErrorsForm] = useState({
        newPassword: "",
        confirmPassword: ""
      });
      const [error, setError] = useState(null);
      const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errorsForm };
        const passPattern = /^[^\s]+$/g;
    
        if (newPassword.trim() === "") {
          newErrors.password = "Введите пароль";
          isValid = false;
        } else if (!passPattern.test(newPassword)) {
          newErrors.newPassword = "Пароль не должен содержать пробелы";
          isValid = false;
        } else {
          newErrors.newPassword = "";
        }
    
        if (confirmPassword.trim() === "") {
          newErrors.confirmPassword = "Подтвердите пароль";
          isValid = false;
        } else if (confirmPassword !== newPassword) {
          newErrors.confirmPassword = "Пароли не совпадают";
          isValid = false;
        } else {
          newErrors.newPassword = "";
        }
    
        setErrorsForm(newErrors);
    
        return isValid;
      };
      useEffect(() => {
        setError(null);
      }, [newPassword, confirmPassword]);
    
      useEffect(() => {
        const newErrors = { ...errorsForm };
        newErrors.password = "";
        setErrorsForm(newErrors);
      }, [newPassword]);
    
      useEffect(() => {
        const newErrors = { ...errorsForm };
        newErrors.confirmPassword = "";
        setErrorsForm(newErrors);
      }, [confirmPassword]);


      const handleChangePassword = async () => {
        if (validateForm()) {
          setOffBtn(true)
          try {
            await ChangeUserPassword(passwordOld, newPassword);
            dispatch(setUserPassword(newPassword))
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              localStorage.removeItem("user");
              sessionStorage.removeItem("updatedToken");
              localStorage.removeItem("userPassword");
              dispatch(removeUser());
              dispatch(removeUserPassword())
              navigate('/login')
          } catch (error) {
            setError(error.message);
          } finally {
            setOffBtn(false);
            setNewPassword('');
            setConfirmPassword('')
          }
        }
      };
    return (
        <S.Container>

        <S.Main>
                <S.MainContainer>
                    <S.MainCenterBlock>
                        <S.MainMenu>

                            <S.MenuLogoLink to = "/">
                                <S.MenuLogoImg src="/img/logo.png" alt="logo"/>
                            </S.MenuLogoLink>

                            <S.MenuForm>
                                <NavLink to ="/">
                                <S.MenuBtn className="btn-hov02" id="btnGoBack">Вернуться на&nbsp;главную</S.MenuBtn>
                            </NavLink>
                            
                            </S.MenuForm>
                        
                        </S.MainMenu>
                        
                        <S.MainH2>Здравствуйте, {!user.name  ? user.email : user.name}!</S.MainH2>
                        
                        <S.MainProfile>
                            <S.ProfileContent>
                                <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                                <S.ProfileSetting>
                                    <S.SettingsLeft>
                                        {!user?.avatar? (<S.SettingImg></S.SettingImg>) : 
                                
                                (<S.SettingImg>
                                    <S.UserAvatar src= {`http://localhost:8090/${user?.avatar}`} alt="avatar"/>
                                </S.SettingImg>)}


                                        <S.SettingsChangePhoto htmlFor="file-upload">
                                            Заменить
                                        </S.SettingsChangePhoto >
                                        <S.inputChange id="file-upload" name="photo" type="file" placeholder="" onChange={handleUserPhoto}></S.inputChange>
                                    </S.SettingsLeft>
                                    <S.SettingsRight >
                                        <S.SettingsForm>
                                            <S.SettingsDiv>
                                                <label htmlFor="fname">Имя</label>

                                                <S.SettingsFName id="settings-fname" name="fname" type="text"  placeholder="" value={userData.name} onInput={handleName}/>                                           </S.SettingsDiv>
                        
                                            <S.SettingsDiv>
                                                <label htmlFor="lname">Фамилия</label>

                                                <S.SettingsLName id="settings-lname" name="lname" type="text"  placeholder="" value={userData.surname} onInput={handleSurname}/>
                                            </S.SettingsDiv>
                        
                                            <S.SettingsDiv>
                                                <label htmlFor="city">Город</label>

                                                <S.SettingsCity id="settings-city" name="city" type="text" placeholder="" value={userData.city} onInput={handleCity}/>
                                            </S.SettingsDiv>
                        
                                            <S.SettingsDiv>
                                                <label htmlFor="phone">Телефон</label>

                                                <S.SettingsPhone id="settings-phone" name="phone" type="tel"  placeholder="" value={userData.phone} onInput={handlePhone}/>
                                            </S.SettingsDiv>
                                              <p style={{ color: "red" }}>
                                                {userData.error ? userData.error : ""}
                                                </p>
                                                    <S.SettingsBtn className="btn-hov02" id="password-btn" onClick={changeUserInfo} disabled={buttonDisabled}> Сохранить</S.SettingsBtn>
                     
                                            
                                        </S.SettingsForm>
                                    </S.SettingsRight>
                                </S.ProfileSetting>
                                

                            </S.ProfileContent>
                            <S.ProfileSettingPass>

                              <S.SettingsForm onSubmit={(e) => e.preventDefault()}>

                              <S.ProfileTitle>Сменить пароль</S.ProfileTitle>
                              <S.SettingsLeft></S.SettingsLeft>
                              <S.SettingsRight >
                              <S.SettingsDiv>
                              <label htmlFor="phone">Пароль</label>
                              {errorsForm.confirmPassword && <S.error>{errorsForm.confirmPassword}</S.error>}


                              <S.SettingInfo id="settings-password1" name="passwordOld" type="password"  autocomplete="new-password" placeholder="" 
                              value={newPassword}
                              onChange={(event) => {
                              setNewPassword(event.target.value);
                              }}/>
                              </S.SettingsDiv>
                              <S.SettingsDiv>
                              <label htmlFor="phone">Повторите пароль</label>
                              {errorsForm.newPassword && <S.error>{errorsForm.newPassword}</S.error>}
                              <S.SettingInfo id="settings-password2" name="passwordNew" type="password" autocomplete="new-password"  placeholder="" 
                              value={confirmPassword}
                              onChange={(event) => {
                              setConfirmPassword(event.target.value);
                              }}/>


                              </S.SettingsDiv>{error && <S.error>{error}</S.error>}
                              <S.SettingsBtn className="btn-hov02" id="settings-btn"  onClick={() => handleChangePassword()}> {offbtn ? 'Сохраняем' : 'Сохранить пароль'}</S.SettingsBtn>

                              </S.SettingsRight>


                              </S.SettingsForm>
                              </S.ProfileSettingPass>

                        </S.MainProfile>
                        
                        <S.MainTitle>
                            Мои товары
                        </S.MainTitle>
                        
                    </S.MainCenterBlock>
                    <S.MainContent>
                        
                        <S.Cards>   
                        {!userAds  ? "Загрузка..." : userAds?.map((ad) => <Card ad={ad} key ={ad.id} />)}

                        </S.Cards>                        
                    </S.MainContent>
                    
                </S.MainContainer>
                
            </S.Main>


    </S.Container>
    )
}


