import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
                                            //azul "cián" - negro
    background: ${({ lightBg }) => (lightBg ? '#7698DB' : '#334B49')};

    @media screen and (max-width: 768) {
        padding: 150px 0;
        margin-bottom: 500px;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    min-height: 800px;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)}; 
    
    @media screen and (max-width: 900px){
        margin-top: 80px;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : ' #010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

//FORM ITEMS
export const FormContainer = styled.div`
    color: #000;
    background-color: #fff;
    width: 90%;
    height: auto;
    max-height: 800px;
    min-height: 450px;
    padding: 30px;
    border: 1px solid #fff;
    border-radius: 20px;
    box-shadow: 3px 3px #cfd4d1;
`

export const FormGroup = styled.div`
    width: 100%;
    padding: 10px
`

export const FormGroupButton = styled.div`
    width: 100%;
    display: table;
    text-align: center;
    padding: 10px;
`

export const FormLabel = styled.div`
    margin-left: 5px;
`

export const FormInput = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border-radius: 6px;
    border-color: #010101;
`

export const FormTextArea = styled.textarea`
    width: 100%;
    font-size: 14px;
    max-width: 100%;
    height: 60px;
    max-height: 150px;
    padding: 1px;
    border-color: #010101;
`

export const FormButton = styled.button`
    width: 20%;
    padding: 8px 0px;
    display: table-cell; 
    margin-top: 50px;
    vertical-align: bottom;
    background-color: #7f8c8d;
    border-color: transparent;
    border-radius: 3px;
`

export const FormError = styled.div`
    color: red;
    text-align: center;
    margin-top: 20px;
`