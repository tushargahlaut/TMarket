import styled from "styled-components"
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { mobile } from "../Responsive";
import {useLocation} from "react-router-dom";
import { useState } from "react";
const Container = styled.div` `;
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;

`;
const Title=styled.h1`
    margin:20px;
`;
const Filter=styled.div`
    margin:20px;
    ${mobile({width:"0px 20px"})}
`;

const FilterText=styled.span`
    font-size:20px;
    font-weight:600; 
    margin-right: 20px;
`;

const Select=styled.select`
    padding: 10px;
    margin-right: 20px;
` 
const Option=styled.option``
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2] ;
    const [filters,setFilters]=useState({});
    const [sort,setSort]=useState({});
    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
          [e.target.name]:value
        })
    }
    // console.log(filters);
    return ( 
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select name="color" onChange={handleFilters}> 
                                <Option disabled>
                                        Color
                                </Option>
                                <Option>white</Option>
                                <Option>black</Option>
                                <Option>red</Option>
                                <Option>blue</Option>
                                <Option>yellow</Option>
                                <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                                <Option disabled>
                                         Size
                                </Option>
                                <Option>xs</Option>
                                <Option>s</Option>
                                <Option>m</Option>
                                <Option>l</Option>
                                <Option>xl</Option>
                     </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select onChange={(e)=>setSort(e.target.value)}>
                                <Option value="newest" selected>Newest</Option>
                                <Option value="asc">Price (asc)</Option>
                                <Option value="desc">Price (desc)</Option>
                      </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter/>
            <Footer/>
        </Container>
     );
}
 
export default ProductList;