const Home = () => {

    const title="welcome to the new blog!"
    const likes= 9760;
    return ( 
        <div className="home">
            <h2 style={{
                color: "gold",
                textShadow: "0px 2px 2px black",
            }}>This is my Homepage component</h2>
            <h4 className="title">{title}</h4>
            <h4 className="likes">{likes} Likes</h4>
            <h4 id="random">{Math.random() * 10}</h4> 
        </div>
     );
}
 
export default Home;