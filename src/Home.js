const Home = () => {

    const title="welcome to the new blog!"
    const likes= 9760;
    return ( 
        <div className="home">
            <h1>This is my blog homepage component</h1>
            <p className="title">{title}</p>
            <p className="likes">{likes} Likes</p>
            <p id="random">{Math.random() * 10}</p> 
        </div>
     );
}
 
export default Home;