import { BrowserRouter, Routes , Route } from "react-router-dom";
import NewsApp from "./NewsApp";

function NewsAppMain(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NewsApp category='general'/>}/>
                <Route path="/sports" element={<NewsApp category='sports'/>}/>
                <Route path="/business" element={<NewsApp category='business'/>}/>
                <Route path="/science" element={<NewsApp category='science'/>}/>
                <Route path="/entertainment" element={<NewsApp category='entertainment'/>}/>
                <Route path="/technology" element={<NewsApp category='technology'/>}/>
                <Route path="/science" element={<NewsApp category='science'/>}/>
                <Route path="*" element={<NewsApp category='general'/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default NewsAppMain;