Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope "(:locale)", locale: /en|zh_TW/ do
    root 'home#index'
    get 'portfolio' => 'portfolio#index'
    get 'pricing' => 'pricing#index'

    match '/contacts',     to: 'contacts#new',             via: 'get'
    resources "contacts", only: [:new, :create]

    get 'marketing' => 'marketing#index'
    get 'team' => 'team#index'

    match '/showcase',     to: 'showcase#new',             via: 'get'
    resources "showcase", only: [:new, :create]
  end
end