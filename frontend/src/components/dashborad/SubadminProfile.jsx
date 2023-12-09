import React from "react";
import Helmet from "react-helmet";

import { Link } from "react-router-dom";
const SubadminProfile = () => {
    const user = 'admin';
    return (
        <div className='sub_admin_profile'>
            <Helmet><title>Sub Admin Profile</title></Helmet>
            <div className="profile-contents">
            <div className="num-of-search-newAdd">
                    <div className="numof">
                        <h2>Profile</h2>
                    </div>
                    
                    <div className="newAdd">
                        <Link className='btn' to='/dashborad/all-sub-admin'>Sub Admin</Link>
                    </div>
                </div>
                <div className="profile-image-article">
                    <div className="profile-image-details">
                        <div className="image">
                        <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                        </div>
                        <ul>
                            <div className="profile-details">
                                <li>
                                    <span>Name : </span>
                                    <span>Shubham Tiwari</span>
                                </li>
                                {
                                    user === 'admin' && <li>
                                    <span>Email : </span>
                                    <span>shubhamtiwarignu@gmail.com</span>
                                </li>
                                }
                                 <li>
                                    <span>Role : </span>
                                    <span>Sub Admin</span>
                                </li>
                                <li>
                                    <span>Account Create : </span>
                                    <span>2 june 2022</span>
                                </li>
                                <li>
                                    <span>Article Write : </span>
                                    <span>2</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="write-articles">
                        <h2>Article</h2>
                        <div className="articles">
                            <Link className="article" to='/artical/details/farid'>
                            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!</h3>
                            </Link>
                            <Link className="article" to='/artical/details/farid'>
                            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!</h3>
                            </Link>
                            <Link className="article" to='/artical/details/farid'>
                            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!</h3>
                            </Link>
                            <Link className="article" to='/artical/details/farid'>
                            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!</h3>
                            </Link>
                            <Link className="article" to='/artical/details/farid'>
                            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!</h3>
                            </Link>
                            <Link className="article" to='/artical/details/farid'>
                            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!</h3>
                            </Link>
                            <Link className="article" to='/artical/details/farid'>
                            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!</h3>
                            </Link>
                            <Link className="article" to='/artical/details/farid'>
                            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubadminProfile;