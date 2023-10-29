Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  resources :articles
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :youtube, only: :show
  resources :about, only: :index
end
