const Create = () => {

    return ( 
        <div className="create">
            <h2>Add a new course</h2>

            <form>
                <label>
                    Course Title:<br></br>
                    <input type="text" required/>
                </label>
                <br></br>
                <label>
                    Course Author:<br></br>
                    <select>
                        <option value="Oluwatobi">Oluwatobi</option>
                        <option value="Oluwaseun">Oluwaseun</option>
                        <option value="Ayooluwa">Ayooluwa</option>
                        <option value="Emmanuel">Emmanuel</option>
                    </select>
                </label>
                <br></br>
                <label>
                    Course Body:<br></br>
                    <textarea>
                        
                    </textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
            
        </div>
     );
}
 
export default Create;