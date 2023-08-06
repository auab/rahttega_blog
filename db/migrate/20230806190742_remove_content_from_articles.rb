class RemoveContentFromArticles < ActiveRecord::Migration[7.0]
  def change
    remove_column(:articles, :content)
  end
end
