import React from "react";
import Helmet from 'react-helmet';
import { BsTrash } from "react-icons/bs";
import Pagination from '../home/Pagination';
const DashComments = () => {
    return (
        <div className='dashborad_comments'>
            <Helmet>
            <title>All Comments</title>
            </Helmet>
            <div className="comments">
                <h3>Article Comments</h3>
                <div className="main-reply-comment">
        <div className="image-comment-time-name">
        <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
        <div className="name-time-comment">
            <div className="name-time">
                <h4>Shubham Tiwari</h4>
                <span>10 day ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptas?</p>
            <div className="replay_btn">
                <button>Reply</button>
            </div>
            <div className="reply_box">
                <div className="image-input">
            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
            <input type="text" placeholder="Add a public reply"/>
            </div>
            <div className="reply_submit">
            <button className="cancle">Cancel</button>
                <button className="submit">Submit</button>
            </div>
            </div>
            <div className="reply_comment">
                <div className="reply_comment_image_name_time">
                <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                <div className="name-time-comment">
                <div className="name-time">
                <h4>Shubham Tiwari</h4>
                <span>10 day ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptas?</p>
            <div className="replay_btn">
                <button>Reply</button>
            </div>
            <div className="reply_box">
                <div className="image-input">
            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
            <input type="text" placeholder="Add a public reply"/>
            </div>
            <div className="reply_submit">
            <button className="cancle">Cancel</button>
                <button className="submit">Submit</button>
            </div>
            </div>
                </div>
                </div>
                <div className="action">
            <BsTrash/>
        </div>
            </div>
            <div className="reply_comment">
                <div className="reply_comment_image_name_time">
                <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                <div className="name-time-comment">
                <div className="name-time">
                <h4>Shubham Tiwari</h4>
                <span>10 day ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptas?</p>
            <div className="replay_btn">
                <button>Reply</button>
            </div>
            <div className="reply_box">
                <div className="image-input">
            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
            <input type="text" placeholder="Add a public reply"/>
            </div>
            <div className="reply_submit">
            <button className="cancle">Cancel</button>
                <button className="submit">Submit</button>
            </div>
            </div>
                </div>
                </div>
                <div className="action">
            <BsTrash/>
        </div>
            </div>
        </div>
        </div>
        <div className="action">
            <BsTrash/>
        </div>
       </div>
       <div className="main-reply-comment">
        <div className="image-comment-time-name">
        <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
        <div className="name-time-comment">
            <div className="name-time">
                <h4>Shubham Tiwari</h4>
                <span>10 day ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptas?</p>
            <div className="replay_btn">
                <button>Reply</button>
            </div>
            <div className="reply_box">
                <div className="image-input">
            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
            <input type="text" placeholder="Add a public reply"/>
            </div>
            <div className="reply_submit">
            <button className="cancle">Cancel</button>
                <button className="submit">Submit</button>
            </div>
            </div>
            <div className="reply_comment">
                <div className="reply_comment_image_name_time">
                <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                <div className="name-time-comment">
                <div className="name-time">
                <h4>Shubham Tiwari</h4>
                <span>10 day ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptas?</p>
            <div className="replay_btn">
                <button>Reply</button>
            </div>
            <div className="reply_box">
                <div className="image-input">
            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
            <input type="text" placeholder="Add a public reply"/>
            </div>
            <div className="reply_submit">
            <button className="cancle">Cancel</button>
                <button className="submit">Submit</button>
            </div>
            </div>
                </div>
                </div>
                <div className="action">
            <BsTrash/>
        </div>
            </div>
            <div className="reply_comment">
                <div className="reply_comment_image_name_time">
                <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
                <div className="name-time-comment">
                <div className="name-time">
                <h4>Shubham Tiwari</h4>
                <span>10 day ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptas?</p>
            <div className="replay_btn">
                <button>Reply</button>
            </div>
            <div className="reply_box">
                <div className="image-input">
            <img src="http://localhost:3000/articalImage/s.jpg" alt=""/>
            <input type="text" placeholder="Add a public reply"/>
            </div>
            <div className="reply_submit">
            <button className="cancle">Cancel</button>
                <button className="submit">Submit</button>
            </div>
            </div>
                </div>
                </div>
                <div className="action">
            <BsTrash/>
        </div>
            </div>
        </div>
        </div>
        <div className="action">
            <BsTrash/>
        </div>
       </div>
       <div className="comment-pagenation">
        <Pagination/>
       </div>
            </div>
        </div>
    );
};

export default DashComments;