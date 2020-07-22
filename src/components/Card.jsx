import React from 'react';

// styled components
import styled from '@emotion/styled';

const CardContainer = styled.div`
    margin: auto;
    margin-bottom: 20px;
    height: 300px;
    width: 150px;    
    font-family:Arial, Helvetica, sans-serif;
    background: #CCCCCC;
`

const CardHeader = styled.div`
    background: #FFFFFF;    
    color: #000;   
    padding: 0px 10px;
    display: flex;
    align-items: center;
    height:25%;
    h2{
        font-size:100%;
        margin:0;
        word-break: break-all;
    }
`

const CardBody = styled.div`  
    height:75%;    
    display: flex;
    align-items: center;
    p{
        font-size: 14px;
        text-align: center;
        padding: 0px 10px;   
        color: #000;     
    }
`

const Card = ({contenido}) => {
    
    return ( 
        <CardContainer>
            <CardHeader>
                <h2>{contenido.title}</h2>                
            </CardHeader>
            <CardBody>
                <p>{contenido.body}</p>                
            </CardBody>
        </CardContainer>
     );
}
 
export default Card;