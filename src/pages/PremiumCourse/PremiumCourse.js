import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../../images/premiumIMG/img1.webp';
import img2 from '../../images/premiumIMG/img2.png';
import img3 from '../../images/premiumIMG/img3.webp';

const PremiumCourse = () => {
    return (
        <div>
            <CardGroup >
                <Card className='m-2'>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>HTML Course</Card.Title>
                        <Card.Text>
                            HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications. Let's see what is meant by Hypertext Markup Language, and Web page.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 2 Week ago</small>
                    </Card.Footer>
                </Card>
                <Card className='m-2'>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>CSS Course</Card.Title>
                        <Card.Text>
                            Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 5 Week ago</small>
                    </Card.Footer>
                </Card>
                <Card className='m-2'>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Bootstrap Course</Card.Title>
                        <Card.Text>
                            Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 2 Month ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup >
                <Card className='m-2'>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Tailwind Course</Card.Title>
                        <Card.Text>
                            Tailwind CSS is a utility-first CSS framework designed to enable users to create applications faster and easier. You can use utility classes to control the layout, color, spacing,
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 1 Month ago</small>
                    </Card.Footer>
                </Card>
                <Card className='m-2'>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>DaisyUI Course</Card.Title>
                        <Card.Text>
                            daisyUI is a customizable Tailwind CSS component library that prevents verbose markup in frontend applications
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 1 Year ago</small>
                    </Card.Footer>
                </Card>
                <Card className='m-2'>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>JavaScript Course</Card.Title>
                        <Card.Text>
                            JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 6 Month ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup >
                <Card className='m-2'>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>HTML Course</Card.Title>
                        <Card.Text>
                            HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications. Let's see what is meant by Hypertext Markup Language, and Web page.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 2 Week ago</small>
                    </Card.Footer>
                </Card>
                <Card className='m-2'>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>CSS Course</Card.Title>
                        <Card.Text>
                            Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 5 Week ago</small>
                    </Card.Footer>
                </Card>
                <Card className='m-2'>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Bootstrap Course</Card.Title>
                        <Card.Text>
                            Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 2 Month ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup >
                <Card className='m-2'>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Tailwind Course</Card.Title>
                        <Card.Text>
                            Tailwind CSS is a utility-first CSS framework designed to enable users to create applications faster and easier. You can use utility classes to control the layout, color, spacing,
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 1 Month ago</small>
                    </Card.Footer>
                </Card>
                <Card className='m-2'>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>DaisyUI Course</Card.Title>
                        <Card.Text>
                            daisyUI is a customizable Tailwind CSS component library that prevents verbose markup in frontend applications
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 1 Year ago</small>
                    </Card.Footer>
                </Card>
                <Card className='m-2'>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>JavaScript Course</Card.Title>
                        <Card.Text>
                            JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publish 6 Month ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default PremiumCourse;