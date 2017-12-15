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
    stage('error') {
      steps {
        sh 'mv dist /var/www/jailescrocs/assets'
      }
    }
  }
}