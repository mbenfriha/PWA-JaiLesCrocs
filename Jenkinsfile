pipeline {
  agent any
  stages {
    stage('npm i') {
      steps {
        sh 'cd JaiLesCrocs && npm i'
      }
    }
    stage('ng build') {
      steps {
        sh 'ng build --prod'
      }
    }
  }
}