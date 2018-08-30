Rails.application.routes.draw do

  root to: 'pages#home'
  resources :events, only: [:index, :update]

end
