import React from 'react';
import './MainHome.css';
import Carousel from 'react-bootstrap/Carousel';
import home1 from '../../images/home1.webp';
import home2 from '../../images/home2.webp';
import home3 from '../../images/home3.jpg';
const MainHome = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home1}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3 className='carouse-header'>First slide label</h3>
                        
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home2}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3 className='carouse-header'>Second slide label</h3>
                        
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home3}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3 className='carouse-header'>Third slide label</h3>
                        
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainHome;