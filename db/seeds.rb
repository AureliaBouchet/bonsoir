
# require 'open-uri'
# require 'nokogiri'

# puts 'cleaning database...'
# Event.destroy_all
# puts 'database clean...'


# puts "Creating events"
# date_today = Date.today
# dates = [date_today, date_today + 1, date_today + 2, date_today + 3, date_today + 4, date_today + 5, date_today + 6 ]
# # dates = [date_today]
# dates.each do |d|

#   result_page = 10
#   page = 1
#   run = true
#   total_result = 0


#   d.month < 10 ? d_month = "0#{d.month}" : d_month = d.month
#   d.day < 10 ? d_day = "0#{d.day}" : d_day = d.day


#   while run

#     url = "https://www.billetreduc.com/search.htm?cp=Paris&dt=#{d.year}-#{d_month}&idrub=103,68,90&jj=#{d_day}&nbsalle=0&prix=0&tri=date&type=3,3&LISTEPEpg=#{page}"

#     html_file = open(url).read
#     html_doc = Nokogiri::HTML(html_file)

#     count=0
#     html_doc.search('.bgmulti tr td').each do |elt|
#       if count<1
#         count+=1
#         total_result = elt.text.strip.split.first.to_i
#       end
#     end

#     html_doc.search('#preliste tr').each do |element|
#      event_hash = {}
#       element.search('.head').each do |elt|
#         title = elt.text.strip
#         url_zoom = "https://www.billetreduc.com" + elt.attribute('href').value
#         event_hash[:title] = title
#         event_hash[:url_zoom] = url_zoom
#       end


#       element.search('.petit').each do |elt|
#         artist = elt.text.strip
#         event_hash[:artist] = artist
#       end

#       element.search('.libellepreliste').each do |elt|
#         description = elt.text.strip
#         event_hash[:description] = description

#       end

#       counter = 0
#       lieu =[]
#       element.search('.lieu a').each do |elt|
#         if counter<2
#           lieu << elt.text.strip
#           counter+=1
#         end
#       end
#       venue = lieu[0]
#       address = lieu.join(", ")
#       event_hash[:venue] = venue
#       event_hash[:address] = address

#       element.search('.prixl').each do |elt|
#         price = elt.text.strip
#         event_hash[:price] = price
#       end

#       element.search('td td .notevM b').each do |elt|
#         rating =  elt.text.strip
#         event_hash[:rating] = rating.to_i
#       end
#       event_hash[:top_rating] = 10
#       event_hash[:date] = d
#       event_hash[:time] = Time.now

#       event = Event.new(event_hash)

#       element.search('.photoevt').each do |elt|
#         photo_url = elt.attribute("src").value
#         ph = "https://www.billetreduc.com#{photo_url}"
#         photo = ph.gsub('/zg/n100', '/f700-600-0')
#         event.remote_photo_url = photo
#      # if event_hash[:venue].nil? == false || event_hash[:photo].nil? == false
#     #  end
#       end

#       event.save
#       # p event
#     end

#     if result_page < total_result
#       page += 1
#       result_page +=10
#       run = false
#     else
#       run = false
#     end


#   end
# end

# puts "events created"






#-------
# require 'open-uri'
# require 'nokogiri'

# event = Event.last
# title = event.title
# puts title

# url_event = event.url_zoom.gsub('evt.htm', 'evtbook.htm')


# day_event = event.date.day
# month_event = event.date.month
# year_event = event.date.year

# html_file = open(url_event).read
# html_doc = Nokogiri::HTML(html_file)
# doc = html_doc.search('.calendrierhome')
# doc_year = doc.search("[y='#{year_event}']")
# doc_month = doc_year.search("[m='#{month_event}']")
# doc_day = doc_month.search("[d='#{day_event}']")
# lien = doc_day.search('a')
# heure_string = lien.text.strip
# # heure_time = Time.valueOf(heure_string)
# puts heure_string
# # puts heure_time
# #event.update(time: heure_string)

# if heure_string == ""
#   event.destroy
#   #puts "event destroyé"
# else
#   event.update(time: heure_string)
#   #puts "event updaté"
# end


#----- trouver url booking

event = Event.last
title = event.title
url = event.url_zoom
url_format = event.url_zoom.gsub('evt.htm', 'evtbook.htm')
puts title
puts url

day_event = event.date.day.to_s
month_event = event.date.month.to_s
year_event = event.date.year.to_s
heure_string = event.time

puts day_event
puts month_event
puts year_event
puts heure_string

heure_format = heure_string.gsub('h', ':')
puts heure_format

url_booking = "#{event.url_zoom.gsub('evt.htm', 'evtbook.htm')}" + "?&dh=" + "#{event.date.year.to_s}" + "-" + "#{event.date.month.to_s}" + "-" + "#{event.date.day.to_s}" + "+" + "#{event.time.gsub('h', ':')}" + "#pricePart"
puts url_booking































