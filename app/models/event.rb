class Event < ApplicationRecord
 geocoded_by :address
 validates :photo, presence: true
 validates :title, presence: true
 validates :venue, presence: true
 validates :date, presence: true

 after_validation :geocode, if: :will_save_change_to_address?

 mount_uploader :photo, PhotoUploader

end
