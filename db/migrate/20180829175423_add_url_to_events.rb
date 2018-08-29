class AddUrlToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :url_zoom, :string
  end
end
