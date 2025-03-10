class CreateTodoitems < ActiveRecord::Migration[8.0]
  def change
    create_table :todoitems do |t|
      t.string :content
      t.boolean :completed

      t.timestamps
    end
  end
end
