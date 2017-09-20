class ShowcaseController < ApplicationController
  def new
    @showcase = Showcase.new
  end

  def create
    @showcase = Showcase.new(params[:showcase])
    @showcase.request = request
    if @showcase.deliver
      flash.now[:notice] = "#{ t('text_29') }"
    else
      flash.now[:error] = "#{ t('text_30') }"
      render :new
    end
  end
end
