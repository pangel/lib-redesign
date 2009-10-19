require 'sinatra'
require 'environment'

configure do
  set :views, "#{File.dirname(__FILE__)}/views"
end

helpers do
  include Rack::Utils
  alias_method :h, :escape_html

  def partial(name, options={})
    haml "_#{name}".to_sym, options.merge(:layout => false)
  end
end


get '/' do
  haml :layout
end