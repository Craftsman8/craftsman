import Categories from "./Categories";
import Tags from "./Tags";

const Sidebar = () => {
    const subcomponent="there are two subcomponents under Sidebar, which are; Categories and Tags"
    return ( 
        <div className="Sidebar">
        <h2>Sidebar component</h2>
        <p className="subcomponent">{subcomponent}</p>
        <div className="categories">
        <Categories />
        </div>
        <div className="tags">
        <Tags />
        </div>
    </div>

     );
}
 
export default Sidebar;
