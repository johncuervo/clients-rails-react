class Client < ApplicationRecord
  validates :name, :email, :city, :company , presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
end
