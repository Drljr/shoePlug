// import React from 'react';
import './Landing.css'; // Make sure you have this CSS file
import { Link } from 'react-router-dom';
import logo from './logo3.svg';
import { RiSearch2Line } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from 'react';
// import { Row, Col } from 'react-bootstrap';

const BASE_URL = 'https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/search?query=';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;

}

const Landing = () => {
    const [searchProducts, setSearchProducts] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState(null);

    const apiKey = '8349a88eb2msh844aa2251c891f3p1d1230jsn77b34dfc1f94'; // Replace with your actual API key



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetchData(searchProducts);
    }, [searchProducts]);

    const handleSearchChange = (event) => {
        setSearchProducts(event.target.value);
    };


    const fetchData = async (query) => {
    const url = `${BASE_URL}${query}`;
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        setProducts(data);
        setError(null);
    } catch (e) {
        setError(error);
    }
  };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const url = BASE_URL;
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': apiKey,
    //                 'X-RapidAPI-Host': 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com'
    //             }
    //         };

    //         try {
    //             const response = await fetch(url, options);
    //             const result = await response.json(); // Assuming the API returns JSON
    //             setProducts(result);
    //         } catch (e) {
    //             setError(error);
    //         }
    //     };

    //     fetchData();
    // }, []); // Empty dependency array ensures data is fetched only once

    // if (error) {
    //     return <div>Error fetching data</div>;
    // }

    // if (!products) {
    //     return <div>Loading...</div>;
    // }


    return (
        <div className='page-container'>
            <nav className="navbar">
                <div className='Logo3'>
                    <img src={logo} alt="ShoePlug Logo" />
                </div>
                <div className="search-bar">
                    <div className="search-logo-container">
                        <RiSearch2Line className='search-logo' size="25px" onClick={() => fetchData(searchProducts)}/>
                    </div>
                    <div className='likes-container'>
                        <LuHeart className='likes' size="20px" />
                    </div>
                    <div className='cart-container'>
                        <Link to='/cart'>
                            <PiShoppingCartBold className='cart' size="20px" />
                        </Link>
                    </div>
                    <div className='user-container'>
                        <FaRegUser className='user' size="20px" />
                    </div>
                    <input type="text" value={searchProducts} onChange={handleSearchChange} placeholder="Search for shoes" />
                </div>
                <div className='Sp'>
                    <span className='radwave-text'>
                        SHOE PLUG
                    </span>
                    <span className='radwave-text-shadow'>
                        SHOE PLUG
                    </span>
                </div>
                <div className='explore'>
                    Explore our amazing collection of
                    trendy kicks and find the perfect
                    pair to rock your style
                </div>
                <button className='pill'>
                    <span className='pill-tittle'>SHOP NOW</span>
                </button>
                <div className='nav-container'>
                    <Link to="/landing">HOME</Link>
                    <Link to="">TRENDING</Link>
                    <Link to="">NEW ARRIVALS</Link>
                    <Link to="">COLLECTIONS</Link>
                </div>
            </nav>
            <div className="background-image-section">
            </div>
            <div className="body-container">
                <h1>Products</h1>

                {/* <Row xs={1} md={4} className="g-4">
                    {products.map((Product) => (
                        <Col key={Product.id}>
                            <div className="product-card">
                                <div className="product">
                                    <img src={Product.image} alt={Product.name} className='product-image'/>
                                </div>
                                <div className="product">
                                <li>{Product.name}</li>
                                </div>
                                <div className="product">
                                <li>${Product.price}</li>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row> */}
            </div>
        </div>
    );
};

export default Landing;
