import React from 'react';
import styled from 'styled-components';
import './styles.css'
import close from '../../icons/close.svg'; 

const FilterBottomWrapper = styled.div`
    position: absolute;
    bottom: 0;
    height: 80vh;
    width: 100%;
    max-height: 704px;
    background: #F2F5F7;
    border-radius: 16px 16px 0px 0px;
    
`

const FilterOthers = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    min-width: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 14px;
    line-height: 18px;
    height: 32px;
    width: 100%;
`;


const FilterOthersKuxna = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    min-width: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 14px;
    line-height: 18px;
    height: 32px;
    width: 127px;
    margin-right: 10px;
    margin-bottom: 10px;
`;

const ButtonMenu = styled.div`
    background: #FA3E05;
    border-radius: 8px;
    height: 48px;
    width: 335px;
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const marginBlockCenter = {
    margin: '0 8px',
}



const FiltersBottom = () => {
  
    return (
        <FilterBottomWrapper>
            <div className="top">
                <p>Фильтры</p>
                <img src={close} alt="close" className="close" />
            </div>
            <div className="padding-alignment">
                <div className="finance-block">
                    <p>Бюджет</p>
                    <div className="flex-alignment">
                    <FilterOthers>
                        до 100 ₴
                    </FilterOthers>
                    <FilterOthers style={marginBlockCenter}>
                            100 ₴ - 300 ₴
                    </FilterOthers>
                    <FilterOthers>
                            от 300 ₴
                    </FilterOthers>
                    </div>
                </div>
                <div className="kuxna-block">
                    <p>Кухня</p>
                    <div className="flex-alignment">
                    <FilterOthersKuxna>
                    Китайская
                    </FilterOthersKuxna>
                    <FilterOthersKuxna>
                    Американская
                    </FilterOthersKuxna>
                    <FilterOthersKuxna>
                    Украинская 
                    </FilterOthersKuxna>
                    <FilterOthersKuxna>
                    Веганская
                    </FilterOthersKuxna>
                    <FilterOthersKuxna>
                    Веганская
                    </FilterOthersKuxna>
                    <FilterOthersKuxna>
                    Название кухни
                    </FilterOthersKuxna>
                    </div>
                </div>
                <div className="finance-block">
                    <p>Начало обеда</p>
                    <div className="flex-alignment">
                    <FilterOthersKuxna>
                    c 12:00
                    </FilterOthersKuxna>
                    <FilterOthersKuxna>
                    c 13:00
                    </FilterOthersKuxna>
                    <FilterOthersKuxna>
                    c 14:00
                    </FilterOthersKuxna>
                    <FilterOthersKuxna>
                    c 15:00
                    </FilterOthersKuxna>
                    </div>
                </div>
                <ButtonMenu>
                <p className="buttonMenuText">Понятно</p>
                </ButtonMenu>
            </div>
        </FilterBottomWrapper>
    )
}

export default FiltersBottom