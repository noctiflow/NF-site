Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'portfolio' => 'portfolio#index'
  get 'pricing' => 'pricing#index'
  resources 'contact', only: [:index, :create]
  get 'team' => 'team#index'
end
