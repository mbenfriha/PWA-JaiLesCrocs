pipeline {
  agent any
  stages {
    stage('npm i') {
      steps {
        sh 'npm install'
      }
    }
    stage('ng build') {
      steps {
        sh 'npm run build-prod-ngsw'
      }
    }
    stage('mv') {
      steps {
        sh 'cp ./dist/* /var/www/jailescrocs/assets'
      }
    }
  }
}