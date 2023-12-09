import React,{useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Helmet from 'react-helmet';
import {MdDelete, MdEdit} from 'react-icons/md';
import Pagination from '../home/Pagination';
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import toast,{Toaster} from 'react-hot-toast';
import { get_all_tag,delete_tag } from "../../store/actions/Dashborad/tagAction";


const AllTag = () => {
    const dispatch = useDispatch();
    const {currentPage} = useParams();
    const { parPage,allTag,tagCount,tagSuccessMessage } = useSelector(state=>state.dashboradTag);
    
    useEffect(()=>{
        if(tagSuccessMessage){
            toast.success(tagSuccessMessage);
            dispatch({type : 'TAG_SUCCESS_MESSAGE_CLEAR'});
        }
        dispatch(get_all_tag(currentPage?currentPage.split('-')[1]:1));
    },[currentPage,tagSuccessMessage])
    return (
        
        <div className="all-category">
             <Toaster position={'bottom-center'}
            reverseOrder = {false}
            toastOptions={
                {
                    style:{
                        fontSize : '15px'
                    }
                }
            }
            />
            <Helmet>
            <title>ALL TAG</title>
            </Helmet>
            <div className="show-category-action">
            
            <div className="num-of-search-newAdd">
                    <div className="numof">
                        <h2>({tagCount})</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input onChange={(e)=>dispatch(get_all_tag(currentPage?currentPage.split('-')[1]:1,e.target.value))} type="text" placeholder='Search Article' className="form-control" />
                        </div>
                        <span><FaSearch/></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashborad/add-tag'>Add New</Link>
                    </div>
                </div>
                <div className="height-60vh">
                <div className="categorys">
                        {
                            allTag.length>0 ? allTag.map((c,index)=><div key={index} className="category">
                            <div className="name">{c.tagName}</div>
                            <div className="action">
                                <span><Link to={`/dashborad/tag/edit/${c.tagSlug}`}><MdEdit/></Link></span>
                                <span onClick={()=>dispatch(delete_tag(c._id))}><MdDelete/></span>
                            </div>
                        </div>):"tag not found...."
                        }
                       
                    </div>
                </div>
                <Pagination pageNumber={currentPage ? currentPage.split('-')[1]:1}
                parPage = {parPage}
                itemCount = {tagCount}
                path = '/dashborad/all-tag'
                />
        </div>
        </div>
    );
};

export default AllTag;