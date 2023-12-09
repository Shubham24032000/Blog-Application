import React from "react";
import { Link } from "react-router-dom";

const PopularArtical = () => {
    return (
        <>
        <div className="row">
            <div className="col-4">
                <Link to='/' className='image'><img src="http://localhost:3000/articalImage/s.jpg" alt=""/></Link>
            </div>
            <div className="col-8">
                <div className="title-time">
                    <Link to='/'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, nam?</Link>
                    <br/>
                    <span>2 june 2023</span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <Link to='/' className='image'><img src="http://localhost:3000/articalImage/s.jpg" alt=""/></Link>
            </div>
            <div className="col-8">
                <div className="title-time">
                    <Link to='/'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, nam?</Link>
                    <br/>
                    <span>2 june 2023</span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <Link to='/' className='image'><img src="http://localhost:3000/articalImage/s.jpg" alt=""/></Link>
            </div>
            <div className="col-8">
                <div className="title-time">
                    <Link to='/'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, nam?</Link>
                    <br/>
                    <span>2 june 2023</span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <Link to='/' className='image'><img src="http://localhost:3000/articalImage/s.jpg" alt=""/></Link>
            </div>
            <div className="col-8">
                <div className="title-time">
                    <Link to='/'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, nam?</Link>
                    <br/>
                    <span>2 june 2023</span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <Link to='/' className='image'><img src="http://localhost:3000/articalImage/s.jpg" alt=""/></Link>
            </div>
            <div className="col-8">
                <div className="title-time">
                    <Link to='/'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, nam?</Link>
                    <br/>
                    <span>2 june 2023</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default PopularArtical;