# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

2.times do |i|
  User.create(
    email: "user-#{i}@email.com", 
    password: "password#{i}",
    password_confirmation: "password#{i}"
  )
end

30.times do |i|
  Client.find_or_create_by(
    name: "name-#{i}",
    email: "client-#{i}@email.com", 
    city: "city-#{i}",
    company: "company-#{i}"
  )
end
