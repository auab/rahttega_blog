class AddCreationDateToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :creation_date, :datetime
  end
end
