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
        sh 'ng build --prod'
      }
    }
  }
}