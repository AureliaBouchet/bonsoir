class EventsController < ApplicationController
  def index

    params[:date] = Date.today.strftime('%Y-%m-%d') unless params[:date].present?
    params[:location] = "Paris, France" if params[:location] == "Indiquez un lieu"
    # params[:distance].downcase.gsub("km", '') if params[:distance].include?("km")


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

# alerts
  unless @events.size == 0
  #   flash[:alert] = "Dommage! Toutes les pièces de théatre autour de vous affichent complet. Elargissez votre périmètre géographique ou choisissez une autre soirée"
  # else
    if @events.size == 1
      flash.now[:alert] = "Il ne reste plus qu'une pièce de théâtre disponible autour de vous ce soir. Dépêchez-vous ou modifiez vos critères de recherche !"
    # elsif @events.size == 0
    #   flash[:alert] = none
    elsif @events.size == 5
      flash.now[:alert] = "Voici les #{@events.size} pièces de théâtre sélectionnées autour de vous. Bonsoir."
    else
      flash.now[:alert] = "Voici les #{@events.size} pièces de théâtre sélectionnées autour de vous. Pour afficher plus de résultats, modifiez vos critères de recherche !"
    end

  end



   @generated_coord = []

    @markers = @events.map do |event|
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
        id: event.id.to_s,
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





