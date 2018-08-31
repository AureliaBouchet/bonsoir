class EventsController < ApplicationController
  def index

    params[:date] = Date.today.strftime('%Y-%m-%d') unless params[:date].present?

    if params[:date].present? && params[:location].present?
      events = Event.where(date: params[:date]).near(params[:location], params[:distance].blank? ? 10 : params[:distance]).select {|event| event.rating}.sort_by(&:rating).reverse
      @events = CheckAvailabilityHoursJob.perform_now(events)
    elsif params[:date].present? && params[:location].empty?
      events = Event.where(date: params[:date]).select {|event| event.rating}.sort_by(&:rating).reverse
      @events = CheckAvailabilityHoursJob.perform_now(events)
    elsif params[:date].empty? && params[:location].present?
      events = Event.near(params[:location], params[:distance].blank? ? 10 : params[:distance]).select {|event| event.rating}.sort_by(&:rating).reverse
      @events = CheckAvailabilityHoursJob.perform_now(events)
    else
      events = Event.all.select {|event| event.rating}.sort_by(&:rating).reverse
      @events = CheckAvailabilityHoursJob.perform_now(events)
    end


   @generated_coord = []

    @markers = @events.map do |event|
      #  {
      #   lat: event.latitude,
      #   lng: event.longitude
      # }
      # doublons = generated_coord.find_all do |e|
      #   generated_coord.count(e) > 1
      # end
      @generated_coord.each do |coord|
        if coord[:lng] == event.longitude || coord[:lat] == event.latitude
          event.longitude += 1/1000.to_f
          event.latitude -= 1/10000.to_f
        end

      end
     @generated_coord <<  {
        lat: event.latitude,
        lng: event.longitude
      }




      {
        lat: event.latitude,
        lng: event.longitude,
        icon: {
          url: 'map_marker.png',

        },
        infoWindow: { content: render_to_string(partial: "/events/map_box", locals: { event: event }) }
      }
    end

    location_r = Geocoder.search(params[:location])
    @markers << {
      lat: location_r[0].data["geometry"]["location"]["lat"],
      lng: location_r[0].data["geometry"]["location"]["lng"],
      icon: {
        url: 'markers-google-api-red.png',
      },
      title: "Vous êtes ici",
    }

  end
end





