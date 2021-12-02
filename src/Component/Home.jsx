import { useState, useEffect} from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs,setBlogs] = useState([
        {title:"My new website",body:"lorem lipsum ....",author:"mario",id:1},
        {title:"Welcome party!",body:"lorem lipsum ....",author:"lekha",id:2},
        {title:"Web dev top tips",body:"lorem lipsum ....",author:"ajith",id:3},
        {title:"Party!",body:"lorem lipsum ....",author:"lekha",id:4},
        {title:"Web dev ",body:"lorem lipsum ....",author:"ajith",id:5}

    ])

    const handleDelete = (id) => {
        const newBlog = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect(() => {
        console.log('ran useEffect!')
    })
    
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'lekha')} title="Lekha's Blogs!"/> */}
            
           
        </div>
     );
}
 
export default Home;