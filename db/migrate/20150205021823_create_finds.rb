class CreateFinds < ActiveRecord::Migration
  def change
    create_table :finds do |t|
	  t.string :name
	  t.string :carrier
	  t.string :state
	  t.string :tier
	  t.string :brand_or_generic

      t.timestamps
    end

    add_index :finds, :name, :unique => true
  end
end
