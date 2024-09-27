/// <reference types="cypress" />

import PageController from "../pages/page.controller";

const pageController = new PageController();
const searchString = 'Vietnam';
const articleTitle = 'Why Vietnam is Emerging as a Top Destination for Global Talent';
const articleSentence = 'Vietnam’s rise as a top destination for global talent';

describe('The article contains the sentense', () => {
  beforeEach(() => {
    pageController.homePage.open();
    pageController.homePage.verifyPageTitle();
  })

  it('Should find and open the article properly', () => {
    pageController.homePage.clickOnBlockMenu();

    pageController.blogPage.clickOnSearch()
                          .enterSearchString(searchString)
                          .clickOnSubmit()
                          .clickOnArticle(articleTitle);

    pageController.articlePage.verifyArticleTitle(articleTitle)
                              .verifyTheParagraphTextContains(articleSentence);
  })
})