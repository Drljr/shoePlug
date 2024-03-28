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


interface Product {
    id: number;
    title: string;
    description: string;
    brand: string;
    image: string;

}

const Landing = () => {
    const [searchProducts, setSearchProducts] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [error, setError] = useState<Error | null>(null);

    const BASE_URL = 'https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/search?query=';
    const apiKey = '4bd7346311mshfb4718560f58675p19c074jsn7c131e391adb'; // Replace with your actual API key

    const options: RequestInit = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com'
        }
    };

    const fetchData = async (query: string) => {
        const url = `${BASE_URL}${query}`;
        try {
        const response = await fetch(url, options);
        const data = await response.json();
        // Assuming the API response has a "results" property containing the products
        const productList = data?.results as Product[] || [];
        setSearchResults(productList);
        setError(null);
        } catch (e) {
        setError(error);
        }
    };

    useEffect(() => {
        if (searchProducts.length > 0) {
        fetchData(searchProducts);
        } else {
        setSearchResults([]); // Clear results when search term is empty
        }
    }, [searchProducts]);

    const handleSearchChange = (value: string) => {
        setSearchProducts(value);
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
                    <input type="text" value={searchProducts} onChange={(e) => handleSearchChange(e.target.value)} placeholder="Search for shoes" />
                    {searchResults.length > 0 && (
                        <div className="search-results">
                        {searchResults.map((product) => (
                            <div key={product.id} className="search-result-item">
                            <img src={product.image} alt={product.title} className="search-result-image" />
                            <div className="search-result-details">
                                <p>{product.title}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                    )}
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
