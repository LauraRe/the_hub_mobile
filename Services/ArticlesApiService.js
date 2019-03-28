import axios from "axios";

const url = `http://10.0.2.2:3000`;

export const GetArticles = async () => {
  let response = await axios.get(url + "/api/v1/articles");
  const articles = response.data.articles;
  return articles
}; 

export const GetArticle = async (articleId) => {
  let response = await axios.get(url + `/api/v1/articles/${articleId}`);
  const article = response.data;
  return article
}; 