Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'portfolio' => 'portfolio#index'
  get 'pricing' => 'pricing#index'

  resources 'contact', only: [:index, :create]

  match '/contacts',     to: 'contacts#new',             via: 'get'
  resources "contacts", only: [:new, :create]

  get 'team' => 'team#index'
end
