Rails.application.routes.draw do

  root to: 'pages#home'
  resources :events, only: [:index, :update, :show]

  resource :geocoding, only: [:create]

end
