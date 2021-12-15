class Client < ApplicationRecord
  validates :name, :email, :city, :company , presence: true
  validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
end
