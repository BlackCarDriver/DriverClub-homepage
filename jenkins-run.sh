docker run \
--rm --name ngbuild \
-v /home/ubuntu/DockerWorkPlace/jenkins/jenkins_home/workspace/homepage:/workplace \
-w /workplace/homepage \
blackcardriver2/mcis:ngcli \
sh -c 'ng build --prod --aot'

if [ -w /nginx_home/homepage ]; then rm -rf /nginx_home/homepage && echo 'rm homepage succeed'; fi
cp -rf dist/homepage /nginx_home/homepage
