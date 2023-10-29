class PagesController < ApplicationController
  def home
    @articles = Article.last(3)
    @categories = Category.all
  end
end
