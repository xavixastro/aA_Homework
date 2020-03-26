class BandsController < ApplicationController

    before_action :require_logged_in


    def new
        render :new
    end

    def create
        band = Band.new(band_params)
        if band.save
            redirect_to band_url(band)
        else
            redirect_to new_band_url
        end
    end

    def index
        @bands = Band.all
        render :index
    end

    def edit
        @band = Band.find(params[:id])
        render :edit
    end

    def update
        band = Band.find(params[:id])
        if band.update(band_params)
            redirect_to band_url(band)
        else
            redirect_to edit_band_url
        end
    end

    def show
        @band = Band.find(params[:id])
        render :show
    end

    def destroy
        band = Band.find(params[:id])
        band.destroy
        redirect_to bands_url
    end

    private

    def band_params
        params.require(:band).permit(:name)
    end
end
