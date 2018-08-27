class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.string :category
      t.text :address
      t.datetime :date
      t.integer :price
      t.string :venue
      t.string :photo

      t.timestamps
    end
  end
end
