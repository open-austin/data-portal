require 'rake'

desc "runs server"
task :run do
  puts "Installing..."
  system "bundle install"
  system "npm install"

  Thread.new do
    system 'bundle exec sass --watch css/main.scss'
  end

  Thread.new do
    system 'NODE_ENV=development webpack -d -w'
  end

  puts "Running now, check out: \"http://127.0.0.1:4000/data-portal/\"\n\n"
  system 'bundle exec jekyll serve --watch --incremental --config _config.yml,_config_localhost.yml'
end
