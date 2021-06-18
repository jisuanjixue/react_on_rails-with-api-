class PostSerializer
  include JSONAPI::Serializer

  set_type :post 
  attributes :title
end
