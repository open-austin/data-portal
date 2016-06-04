require 'rake'

desc "runs server"
task :run do
  puts "Installing..."
  system "bundle install"

  Thread.new do
    system 'bundle exec sass --watch css/main.scss'
  end

  puts "Running now, check out: \"http://127.0.0.1:4000/data-portal-new/\"\n\n"
  system 'bundle exec jekyll serve --watch --incremental'
end
