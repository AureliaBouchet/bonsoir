class AddPhUrlToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :ph_url, :string
  end
end
