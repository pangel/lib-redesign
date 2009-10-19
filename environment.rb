require 'rubygems'
require 'haml'
require 'sinatra' unless defined?(Sinatra)

configure do
  # Constants
  PROJECT_NAME = "lib-redesign"

  # Load extensions
  $LOAD_PATH.unshift("#{File.dirname(__FILE__)}/lib")

end

configure :development do end