/// <reference types="cypress" />

import ArticlePage from './article.page';
import BlogPage from './blog.page';
import HomePage from './home.page';

export default class PageController {
    homePage: HomePage;
    blogPage: BlogPage;
    articlePage: ArticlePage;

    constructor() {
        this.homePage = new HomePage();
        this.articlePage = new ArticlePage();
        this.blogPage = new BlogPage();
    }
}