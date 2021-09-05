# frozen_string_literal: true

class PostSerializer
  include JSONAPI::Serializer

  set_type :post
  attributes :title
end
