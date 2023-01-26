import React from 'react';
import { dumpLogs } from './Utils';
//import './BlogCard.css';
import classes from './BlogCard.module.css';

class BlogCard extends React.Component
// =(props)=>
{
    componentWillUnmount(){
        console.log('Unmounting Blog Cards');
    }
    render(){
    // state={
    //     likeCount:0
    // }
    // onLikeBtnClick=()=>{
    //    this.setState((prevState,prevProps)=>{
    // return{
    //     likeCount:prevState.likeCount+1}
    //    }) ;
    // }
   
    return(
        <div className={classes.BlogCard} >
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <p>Like Count: 
                <span className={classes.likeCount}>
                    {this.props.likeCount}</span></p>
            <button onClick={this.props.onLikeBtnClik}>Like</button>
        </div>
    )
}
}
export default BlogCard;