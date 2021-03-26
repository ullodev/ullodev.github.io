import React, { useState } from 'react';
import styled from 'styled-components';
import filter_first from '../../icons/filter_first.svg';
import './styles.css'

const FiltersWrapper = styled.div`
    position: absolute;
    left: 1rem;
    top: 2rem;
    z-index: 1;
    height: 32px;
    display: flex;
`;

const FilterFirst = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    min-width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.colorsFiltersTopFirst ? "black" : "white"};
`;

const FilterOthers = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    min-width: 94px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 14px;
    line-height: 18px;
`;

const marginBlockCenter = {
    margin: '0 8px',
}

const marginBlockLeft = {
    marginLeft: '8px'
}

const marginBlocRight = {
    marginRight: '8px'
}

const FiltersTop = (props) => {
    let { openBottomFilters } = props
    const [colorsFiltersTopFirst, setColorsFiltersTopFirst] = useState(false);

    const openBottomFiltersTop = () => {
        openBottomFilters()
        setColorsFiltersTopFirst(!colorsFiltersTopFirst)
    }

    return (
        <FiltersWrapper>
           <FilterFirst onClick={openBottomFiltersTop} colorsFiltersTopFirst={colorsFiltersTopFirst}>
               <img src={filter_first} alt="" className={colorsFiltersTopFirst && 'invert'} />
           </FilterFirst>
           <FilterOthers style={marginBlockLeft}>
                <p>до 100 ₴</p>
           </FilterOthers>
           <FilterOthers style={marginBlockCenter}>
           <p>100 ₴ - 300 ₴</p>
           </FilterOthers>
           <FilterOthers style={marginBlocRight}>
           <p>от 300 ₴</p>
           </FilterOthers>
        </FiltersWrapper>
    )
}

export default FiltersTop