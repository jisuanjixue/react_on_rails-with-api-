class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email, limit:100, null:false, default:''
      t.index :email, unique: true
      t.string :name
      t.string :avatr
      t.string :password_digest, limit:256, null:false, default:''
      t.integer :role, default: 1, null: false, unsigned: true
      
      t.timestamps
    end
  end
end
