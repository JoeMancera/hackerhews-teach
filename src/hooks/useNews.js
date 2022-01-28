import { useState, useEffect } from 'react';
import getNews from 'service/getNews';

const INITIAL_PAGE = 0;

export function useNews(){
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    getNews().then(setNewsList);
  }, [setNewsList]);

  useEffect(() => {
    if(page === INITIAL_PAGE)return;
    
    getNews({page}).then(setNewsList);
  }, [page, setNewsList]);

  return { newsList, page, setPage };
}
