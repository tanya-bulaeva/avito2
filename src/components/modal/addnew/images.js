import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import * as S from "./style";

function DropzoneComponent() {
    const [files, setFiles] = useState([]);//предосмотр файлов
    const [ imageSent , setImageSent ] = useState ([]);  
  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));//предосмотр файлов
    console.log(acceptedFiles)//инфа по файлам, можно загрущить нексколько файлов
  }, []);

  const handleImg = (event) => {
    event.preventDefault();
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
        console.log('Файл не выбран');
    } else {
        setImages((prev) => ({ ...prev, [event.target.id]: selectedFile }))
    };
 
}

const handleFile = ( e ) => { 
    setImageSent ( e.target.files [ 0 ] ) ; _ };  


  const thumbs = files.map(file => (
    <S.FormImg key={file.name}>
      <img
        src={file.preview}
        alt={file.name}
      />
    </S.FormImg>
  ));

  // clean up//Чтобы избежать сохранения ненужных предварительных просмотров, нужно вызвать URL.revokeObjectURL(file.preview).
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));

  }, [files]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject, 
    acceptedFiles,
     rejectedFiles
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png', //тип принимаемых файлов
    maxFiles: 5,//количество принимаемых файлов
    uploadMultiple: false,
  });


  return (
    <S.FormNewArtBarImg>
        <S.FormImg {...getRootProps({onChange: handleFile})}>
               <input {...getInputProps()}/>
        </S.FormImg>
        {thumbs}     
</S.FormNewArtBarImg>
  )
}

export default DropzoneComponent;

