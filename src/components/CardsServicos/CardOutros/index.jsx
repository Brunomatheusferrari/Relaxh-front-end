import styled from "styled-components";
import colors from "../../../themes/colors";

export const CardOutros = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 25vw;
    height: 25vw;
    background-color: ${colors.mediumGreen};
    transition: .5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;


    &:hover {
        transform: scale(1.1);
        background-color: ${colors.lightGreen};
    }

    .deliveryCardPng {
        width: 30%;
        height: auto;
    }

    .cardTitle {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 50px;
        margin: 10px;
    }

 
    .leaves1 {
        width: 25%;
        height: 20%;
        background-image: url("https://i.imgur.com/AZ8zOHu.png");
        background-size: cover;
        position: absolute;
        top: -2%;
        left: 0;
        z-index: 1000;
        opacity: 100%;
        transform: rotate(150deg);
    }

    
    .leaves2 {
        width: 25%;
        height: 20%;
        background-image: url("https://i.imgur.com/AZ8zOHu.png");
        background-size: cover;
        position: absolute;
        bottom: -1%;
        right: 0;
        z-index: 1000;
        opacity: 100%;
        transform: rotate(335deg);
    }

    @media (max-width: 1250px) {
        .deliveryCardPng {
            width: 25%;
        }

        .cardTitle {
            font-size: 40px;
        }
    }

    @media (max-width: 850px) {
        margin-bottom: 50px;
        width: 60vw;
        height: 60vw;

        
        &:hover {
            background-color: ${colors.mediumGreen};
            transform: scale(1);
        }
    }

  
`;