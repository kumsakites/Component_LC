//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import BlogItem from './BlogCard';
import { isArrayEmpty } from './Utils'

//function App()
class App extends Component{
constructor(props){
super(props);
this.state={
  showBlogs: true, 
blogArr:[
{
id:1,
 title:'Blog Title 1',
 description:'I am her to preach the Gospel',
 likeCount:0,
},
{
id:2,
title:'Blog Title 2',
description:'I am her to preach the Gospel',
likeCount:0,
},
{
id:3,
title:'Blog Title 3',
description:'I am her to preach the Gospel',
likeCount:0,
}

]
}
console.log('inside constructor');
}
 
 
onLikeBtnClick=(pos)=>{
  const updatedBlogList=this.state.blogArr;
  const updatedBlogObj = updatedBlogList[pos];
  updatedBlogObj.likeCount=updatedBlogObj.likeCount + 1;
  updatedBlogList[pos]=updatedBlogObj;
  this.setState({blogArr: updatedBlogList});
}
onHideBtnClick=()=>{
  this.setState((prevState,prevProps)=>{
return {showBlogs: !prevState.showBlogs}
  });
  console.log(this.showBlogs);
}
shouldComponentUpdate(){
  console.log('Inside shouldComponentUpdate');
  return true;
}
componentDidMount(){
  console.log('Component Did Mount');
}
componentWillUnmount(){
  console.log('Component Unmounting');
}
componentDidUpdate(){
  console.log('Inside ComponentDidUpdate');
}

render (){
  console.log('Render Called for AppJs');
  console.log(this.state);
  const BlogCards= isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item,pos)=>{
    
    return (
      
    <BlogItem className='Blog' key={pos} 
    title={item.title} description={item.description} 
    likeCount={item.likeCount} id={item.id}
     onLikeBtnClick={()=>this.onLikeBtnClick(pos)}/>
    )
    })
  return (
    <div className="App">
   
    <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
    <br></br>
    {
      this.state.showBlogs ? BlogCards : null}
    </div>
  );
}
// class based component does not have return statement
   
    // <div className="App">
    //  {/* <h3>Name: {getFullName(firstName,lastName)}</h3>
    //  <p>Age: {mObj.age}</p>
    //  <p>Position: {jop}</p>
    // {mArr[0]}
    // {
    //   mArr[0] > 0 ? "True": "False"
    // } */}
    // {/* <div style={styles}> */}
    // {/* <div className='BlogCard'>
    //   <h3>{blogObj.title}</h3>
    //   <p>{blogObj.description}</p>
    // </div> */}
    // {/* <div className='BlogCard'>
    //   <h3>{blogObj.title}</h3>
    //   <p>{blogObj.description}</p>
    // </div>
    // <div className='BlogCard'>
    //   <h3>{blogObj.title}</h3>
    //   <p>{blogObj.description}</p>
    // </div> */}
    // <button onClick={onHideBtnClick}>Hide List</button>
    // <br></br>
    // {BlogCards}
    // </div>
  
}

export default App;
