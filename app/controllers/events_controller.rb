class EventsController < ApplicationController
  def index
    if params[:date].present? && params[:location].present?
      @events = Event.where(date: params[:date]).near(params[:location], params[:distance].blank? ? 3 : params[:distance])
    elsif params[:date].present? && params[:location].empty?
      @events = Event.where(date: params[:date])
    elsif params[:date].empty? && params[:location].present?
      @events = Event.near(params[:location], params[:distance].blank? ? 3 : params[:distance])
    else
      @events = Event.all
    end

    @markers = @events.map do |event|

      {
        lat: event.latitude,
        lng: event.longitude,
        icon: {
          url: 'map_marker.png',

        },
        infoWindow: { content: render_to_string(partial: "/events/map_box", locals: { event: event }) }
      }

    end
  end

  end





