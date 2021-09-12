import { getNews } from "../service/api";
import { useEffect , useState} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Article from "./Article";

const Articles = () => {
    const [news , setNews] = useState([]);
    const [page , setPage] = useState(0);

    useEffect(() => {
        dailyNews();
    },[page]);

    const dailyNews = async () => {
        let response = await getNews(page);
        setNews([...news,...response.data]);
    }
    return(
        <InfiniteScroll
        dataLength={news.length}
        next={() => setPage(page => page+1)}
        hasMore={true}
        >
            {
        news.length > 0 && news.map((article) => (
            <Article article={article}/>
        ))
            }
        </InfiniteScroll>
    )
}
export default Articles;