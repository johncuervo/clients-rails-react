class Api::V1::ClientsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_client, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  # GET /clients
  # GET /clients.json
  def index
    @clients = Client.all.order(name: :asc)
    render json: @clients
  end

  # GET /clients/1
  # GET /clients/1.json
  def show
    if @client
      render json: @client
    else
      render json: @client.errors
    end
  end

  # GET /clients/new
  def new
    @client = Client.new
  end

  # GET /clients/1/edit
  def edit
  end

  # POST /clients
  # POST /clients.json
  def create
    @client = Client.new(client_params)
    if @client.save
      render json: @client
    else
      render json: @client.errors
    end
  end

  # PATCH/PUT /clients/1
  # PATCH/PUT /clients/1.json
  def update
  end

  # DELETE /clients/1
  # DELETE /clients/1.json
  def destroy
    @client.destroy
    render json: { notice: 'client was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      byebug
      @client = Client.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def client_params
      params.require(:client).permit(:name, :email, :city, :company)
    end
end
