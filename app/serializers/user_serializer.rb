# frozen_string_literal: true

class UserSerializer
  include JSONAPI::Serializer

  set_type :post
  attributes :email, :password_digest, :role
end
