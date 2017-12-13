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
        sh 'ng build --prod'
      }
    }
  }
}