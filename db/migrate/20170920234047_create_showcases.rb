class CreateShowcases < ActiveRecord::Migration[5.0]
  def change
    create_table :showcases do |t|

      t.timestamps
    end
  end
end
