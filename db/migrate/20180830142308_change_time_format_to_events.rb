class ChangeTimeFormatToEvents < ActiveRecord::Migration[5.2]
  def change
    change_column :events, :time, :string
  end
end
