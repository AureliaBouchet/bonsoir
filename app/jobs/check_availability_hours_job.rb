require 'open-uri'
require 'nokogiri'

class CheckAvailabilityHoursJob < ApplicationJob
  queue_as :default

  def perform(events)
    new_events = []

    events.each do |event|
      break if new_events.size == 5

      heure_string = fetch_event_hour(event)

      if heure_string == ""
        event.destroy # => <Event id: 1> => truthy
      else
        event.update(time: heure_string)
        new_events << event
      end
    end

    return new_events

    # #faire le tri sur la liste des events triés selon notre algo
    # events.select do |event|
    #   if count < 5
    #     url_event = event.url_zoom.gsub('evt.htm', 'evtbook.htm')
    #     day_event = event.date.day
    #     month_event = event.date.month
    #     year_event = event.date.year

    #     html_file = open(url_event).read
    #     html_doc = Nokogiri::HTML(html_file)
    #     doc = html_doc.search('.calendrierhome')
    #     doc_year = doc.search("[y='#{year_event}']")
    #     doc_month = doc_year.search("[m='#{month_event}']")
    #     doc_day = doc_month.search("[d='#{day_event}']")
    #     lien = doc_day.search('a')
    #     heure_string = lien.text.strip
    #     # heure_time = Time.valueOf(heure_string)
    #     # puts heure_string
    #     # puts heure_time
    #     #event.update(time: heure_string)

    #     if heure_string == ""
    #       event.destroy # => <Event id: 1> => truthy
    #       false # because we're in a select
    #       #puts "event destroyé"
    #     else
    #       event.update(time: heure_string)
    #       count = count + 1
    #       true # because we're in a select

    #       # puts count
    #       #puts "event updaté"
    #     end
    #   end
    # end
  end

  private

  def fetch_event_hour(event)
    url_event = event.url_zoom.gsub('evt.htm', 'evtbook.htm')
    day_event = event.date.day
    month_event = event.date.month
    year_event = event.date.year

    html_file = open(url_event).read
    html_doc = Nokogiri::HTML(html_file)
    doc = html_doc.search('.calendrierhome')
    doc_year = doc.search("[y='#{year_event}']")
    doc_month = doc_year.search("[m='#{month_event}']")
    doc_day = doc_month.search("[d='#{day_event}']")
    lien = doc_day.search('a')
    heure_string = lien.text.strip

    return heure_string
  end
end
