class MakeTitleNotNullable < ActiveRecord::Migration[6.0]
  def change
    change_column_null :posts, :title, false
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
