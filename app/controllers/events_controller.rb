class EventsController < ApplicationController
  def index

     if params[:date].present?
      @events = Event.where(date: params[:date].blank? ? Date.today : params[:date])
      if params[:location].present?
        @near_events = @events.near(params[:location], params[:distance].blank? ? 3 : params[:distance])
      else
        @near_events = @events.where.not(latitude: nil, longitude: nil)
      end
    end

    @markers = @near_events.map do |event|
      {
        lat: event.latitude,
        lng: event.longitude
        # infoWindow: { content: render_to_string(partial: "/flats/map_box", locals: { flat: flat }) }
      }
    end
  end
end


