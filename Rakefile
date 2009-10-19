namespace :app do
  task :deploy do
    Dir.chdir '/var/www/vcs/lib-redesign/'
    puts `git pull`
    puts `git checkout-index -a -f --prefix=/var/www/lib-redesign.pangel.fr/`
    Dir.chdir '/var/www/lib-redesign.pangel.fr'
    puts `/etc/init.d/thin restart`
    puts "Deploy complete"
  end
end