pipeline {
  agent any

  triggers {
    pollSCM '* * * * *'
  }
  stages {
    stage('Build') {
      steps {
        echo "building..."
      }
    }
    stage('Test') {
      steps {
        echo "Testing..."
        sh '''
        node app.js
        '''
      }
    }
    stage('Deliver') {
      steps {
        echo 'Deliver...'
        sh '''
        echo "doing delivery..."
        '''
      }
    }
  }
}