class AddRatingToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :rating, :integer
    add_column :events, :top_rating, :integer
  end
end
