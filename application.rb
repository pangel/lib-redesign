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
  query, source = params['query'], params['source']
  case source
  when 'melvyl'
    redirect "http://ucla.worldcat.org/search?qt=wc_org_ucla&q=#{query}&scope=2"
  when 'catalog'
    redirect "http://catalog.library.ucla.edu/cgi-bin/Pwebrecon.cgi?Search_Arg=#{query}&Search_Code=GKEY^&SL=None&PID=3bw_ofT163-dSbNulGF8CZZ6KbNC&CNT=50"
  end
  haml :layout
end