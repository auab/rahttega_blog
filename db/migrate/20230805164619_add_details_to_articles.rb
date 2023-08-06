class AddDetailsToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :summary, :text
    add_reference :articles, :user, foreign_key: true
    add_reference :articles, :category, foreign_key: true
  end
end
