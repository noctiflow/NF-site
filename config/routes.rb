Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'portfolio' => 'portfolio#index'
  get 'pricing' => 'pricing#index'
  get 'contact' => 'contact#index'
  get 'team' => 'team#index'
end
