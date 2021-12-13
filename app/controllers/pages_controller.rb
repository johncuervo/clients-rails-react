class PagesController < ApplicationController
  before_action :authenticate_user!
  def home
  end

  def clients
  end
end
