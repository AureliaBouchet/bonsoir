namespace :scrapping do
  desc "destruction et actualisation de toute la base d'évènements"
  task night_scrapping: :environment do
    NightJob.perform_later

  end

end
