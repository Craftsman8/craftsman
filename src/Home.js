const Home = () => {

    const title="welcome to the new blog!"
    const likes= 9760;
    return ( 
        <div className="home">
            <h2>This is my Homepage component</h2>
            <p className="title">{title}</p>
            <p className="likes">{likes} Likes</p>
            <p id="random">{Math.random() * 10}</p> 
        </div>
     );
}
 
export default Home;