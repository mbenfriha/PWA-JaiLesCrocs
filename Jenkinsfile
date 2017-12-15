pipeline {
  agent any
  stages {
    stage('npm i') {
      steps {
        sh 'npm i'
      }
    }
    stage('ng build') {
      steps {
        sh 'npm run build-prod-ngsw'
      }
    }
    stage('mv') {
      steps {
        sh 'cp -R ./dist/* /var/www/jailescrocs/assets/'
      }
    }
  }
}