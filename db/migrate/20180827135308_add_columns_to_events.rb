class AddColumnsToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :artist, :string
    change_column :events, :date, :date
    add_column :events, :time, :time
  end
end
