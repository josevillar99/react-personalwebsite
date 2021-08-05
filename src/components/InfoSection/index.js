import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import { Button2 } from '../ButtonRedirect'
import { BtnWrap, Heading, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper,
    TopLine, Column1, Column2, FormContainer, FormGroup, FormLabel, FormInput, FormTextArea,
    FormGroupButton, FormError } from './InfoElements'

import { ReactComponent as ImageOne } from '../../images/svg-developer.svg';
import { ReactComponent as ImageTwo } from '../../images/svg-resume.svg';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, buttonTo, primary, dark, dark2, email, asunto, contenido, button, formError }) => {

    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        correo: '',
        asunto: '',
        contenido: ''
    })

    const restartForm = () => {
        setFormData({
            correo: '',
            asunto: '',
            contenido: ''
        })
    }

    const sendForm = () => {
        // console.log(formData);
        setError(formError)
        restartForm();
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>
                                    {description.map((item, i) => {
                                        if (item === '...') return (<br key={i} />)
                                        return (<span key={i}>{item}<br/></span>)
                                    })}
                                </Subtitle>
                                <BtnWrap>
                                    {buttonTo.includes('/')
                                        &&
                                        <Button2
                                            // to={buttonTo}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}
                                        >{buttonLabel}</Button2>
                                    }
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                {id === 'about' && <ImageOne className="imgSection" />}
                                {id === 'resume' && <ImageTwo className="imgSection" />}
                                {id === 'contact' &&
                                    <>
                                        <FormContainer>
                                            <FormGroup>
                                                <FormLabel>{email}</FormLabel>
                                                <FormInput
                                                    value={formData.correo}
                                                    onChange={(e) => {
                                                        setFormData({
                                                            ...formData,
                                                            correo: e.target.value
                                                        })
                                                    }}
                                                ></FormInput>
                                            </FormGroup>
                                            <FormGroup>
                                                <FormLabel>{asunto}</FormLabel>
                                                <FormInput
                                                    value={formData.asunto}
                                                    onChange={(e) => {
                                                        setFormData({
                                                            ...formData,
                                                            asunto: e.target.value
                                                        })
                                                    }}
                                                ></FormInput>
                                            </FormGroup>
                                            <FormGroup>
                                                <FormLabel>{contenido}</FormLabel>
                                                <FormTextArea
                                                    value={formData.contenido}
                                                    onChange={(e) => {
                                                        setFormData({
                                                            ...formData,
                                                            contenido: e.target.value
                                                        })
                                                    }}
                                                ></FormTextArea>
                                            </FormGroup>
                                            <FormGroupButton>
                                                <Button
                                                    to=""
                                                    onClick={sendForm}
                                                    primary={0}
                                                    dark={0}
                                                    dark2={0}
                                                >{button}</Button>
                                            </FormGroupButton>

                                            <FormError>{error}</FormError>
                                        </FormContainer>
                                    </>}
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
