Rails.application.routes.draw do
  post 'token', action: :create, controller: 'tokens', param: :user
  resources :posts, only: [:index], param: :slug
  resources :users, only: [:show, :update, :destroy, :create]
  # post '/signin', to: 'users#create'
  root "home#index"

  get '*path', to: 'home#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
