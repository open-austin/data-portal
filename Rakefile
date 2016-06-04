require 'rake'

desc "runs server"
task :run do
  puts "Installing..."
  system "bundle install"

  puts "Running now, check out: \"http://127.0.0.1:4000/data-portal-new/\"\n\n"
  system 'bundle exec jekyll serve --watch --incremental'
end
