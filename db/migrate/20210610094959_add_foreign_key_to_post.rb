class AddForeignKeyToPost < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :posts, :users, column: :user_id, on_delete: :cascade
  end
end
