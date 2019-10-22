как завести на windows:
https://github.com/gemini-testing/hermione/issues/258

что нужно для старта:
https://github.com/gemini-testing/hermione#prerequisites

// install jdk
sudo apt-get update
java -version
sudo apt-get install default-jre
sudo apt-get install default-jdk

// install chome on wsl (not work)
// Add apt installation key (source):
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
// Download the package:
wget https://dl.google.com/linux/direct/google-chrome-beta_current_amd64.deb
// Try to install the package:
sudo dpkg -i google-chrome-beta_current_amd64.deb
// Install the dependencies:
sudo apt -f install
// Now install the actual package:
sudo dpkg -i google-chrome-beta_current_amd64.deb

// install and start selenium
selenium-standalone install
selenium-standalone start
