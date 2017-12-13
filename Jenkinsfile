pipeline {
  agent any
  stages {
    stage('npm i') {
      steps {
        sh 'cd JaiLesCrocs && ls'
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