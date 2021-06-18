
class User < ApplicationRecord
   
    has_many :posts, dependent: :destroy
    has_secure_password
    has_secure_password :recovery_password, validations: false

    VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze

    validates :email, presence: true,
                    uniqueness: true,
                    format: { with: VALID_EMAIL_REGEX }
    validates :password_digest, length: {minimum: 8, maximum: 72}, presence: true, confirmation: true,  if: :password_required?
	validates :role,  inclusion: { in: [0, 1, 2], message:"role can be only in [0 1 2]" }

    before_save :to_lowercase

    private

    def to_lowercase
        email.downcase!
    end

      # is password required for user?
    def password_required?
        password_digest.nil?
    end

end
