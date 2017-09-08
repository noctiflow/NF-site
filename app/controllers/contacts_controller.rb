class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = "#{ t('text_29') }"
    else
      flash.now[:error] = "#{ t('text_30') }"
      render :new
    end
  end
end