git clone https://github.com/jhipster/jhipster.github.io.git --depth=1
cd jhipster.github.io
for tag in $(git tag)
do
    mkdir ../$tag
    chmod 777 ../$tag

    echo "Building docs for $tag"
    rm Gemfile
    git checkout $tag
cat >  _config-baseurl.yml << EOF
baseurl: /documentation-archive/$tag
url: /documentation-archive/$tag
EOF

    if [ ! -f Gemfile ]
    then
        echo "source 'https://rubygems.org'
gem 'github-pages'">Gemfile
    fi
    bundle install
    bundle exec jekyll build -d ../$tag --config _config.yml,_config-baseurl.yml
    find ../$tag -name "*.html" -exec sh -c "cat ../alert-snippet.html >> {}" \;
    find ../$tag -name "*.html" -exec sh -c "gsed -i '/<\/head>/i     <meta name=\"robots\" content=\"noindex\">' {}" \;
done
