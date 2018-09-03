class GeocodingsController < ApplicationController
  def create
    lat, lng = params[:lat], params[:lng]
    results  = Geocoder.search([lat, lng])

    render json: { address: results.first.address }
  end
end
